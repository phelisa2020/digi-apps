import GoTrue from "gotrue-js";
import { openDB } from "idb";
import { v4 as createId } from 'uuid'
import '../../types/User'


const auth = new GoTrue({
  APIUrl: "https://digi-apps.netlify.app/.netlify/identity",
  audience: "",
  setCookie: false,
});

const createUsersApi = () => {
  const dbRequest = openDB("users", 1, {
    upgrade: (innerDb) => {
      innerDb.createObjectStore("data", { keyPath: "id" });
      innerDb.createObjectStore("meta", { keyPath: "id" });
    },
  });

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null | 'noAccount' | 'technical']>}
   */

  const signIn = async (email, password) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.login(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("data", { id: id, email });

      return [true, { id }];
    } catch (error) {
      const errorAsString = error.toString();

      if (
        errorAsString ===
        "JSONHTTPError: invalid_grant: No user found with that email, or password invalid."
      ) {
        return [false, "noAccount"];
      }
      if (
        errorAsString === "JSONHTTPError: invalid_grant: Email not confirmed"
      ) {
        return [false, "notVerified"];
      }
      return [false, "technical"];
    }
  };

  /**
   * 
   * @param {string} name 
   * @param {Blob} image 
   */

  const createLocalAccount = async (name, image) => {
    const db = await dbRequest;
    const id = createId()

    const newAccount = {
      id,
      name,
      image,
      type: 'local',
    }

    await db.put('data', newAccount)
    await db.put("meta", { id: "current", value: id });

  }

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null | 'emailAreadyUsed' | 'technical']>}
   */

  const changeToOnlineAccount = async (id, email, password) => {
    try {
      const db = await dbRequest;
      const { id: netlifyId } = await auth.signup(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("data", { id, netlifyId, email, type: 'online' });

      await signIn(email, password);
      return [true, { id }];
    } catch (error) {
      const errorAsString = error.toString();
      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "emailAreadyUsed"];
      }
      return [false, "technical"];
    }
  };

  /**
   * @returns {Promise<null | User>}
   */
  const getCurrent = async () => {
    const db = await dbRequest;

    const current = await db.get("meta", "current");
    if (!current || !current.value) return null;

    const response = await db.get("data", current.value);
    return response;
  };

  /**
   * @returns {Promise<{ id: string}[]>}
   */

  const getUsers = async () => {
    const db = await dbRequest;
    return await db.getAll("data");
  };

  /**
   * @param {string} email
   * @returns {[boolean]}
   */
  const resetPassword = async (email) => {
    await auth.requestPasswordRecovery(email);
    return [true];
  };

  /**
   * @param {string} token
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signInWithToken = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.confirm(token);

      await db.put("meta", { id: "current", value: id });


      return [true, { id }];
    } catch (error) {
      return [false, "technical"];
    }
  };

  const signInWithRecovery = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.recoverToken(token);

      await db.put("meta", { id: "current", value: id });


      return [true, { id }];
    } catch (error) {
      return [false, "technical"];
    }
  };

  /**
   * @typedef {object} User
   * @property {string} id
   * @property {string} name
   * @property {blob || null} image
   * @property {string || null} email
   * @property {'local' || 'online'} type
   */


  /**
   * @returns {Promise<[boolean, null | 'technical']>}
   */
   const signOut = async () => {
    try {
      const db = await dbRequest;
      await db.put("meta", { id: "current", value: null });
      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };


  return {
    getCurrent,
    getUsers,
    signOut,
    changeToOnlineAccount,
    createLocalAccount,
    signInWithToken,
    signIn,
    resetPassword,
    signInWithRecovery,
  };
};

export const users = createUsersApi();
export default users;
