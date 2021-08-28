import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { users } from "../../api/users";
import { useMount } from "react-use"

export const useItemsList = () => {
  const history = useHistory();
  const [current, setCurrent] = useState("")
 
  useMount(async () => {
      const { id } = await users.getCurrent()
      console.log(id)

      users.getCurrent().then((response) =>{
          if (!response) return history.push('/')
          setCurrent(response)
      })
  })
  

//   useEffect(() => {
//     users.getCurrent().then((response) => {
//       if (!response) return history.push("/");
//       setCurrent(response);
//     });
//   });
  const signOut = async () => {
    users.signOut();
    return history.push('/')
  };

  return {
    current,
    signOut,
  };
};
