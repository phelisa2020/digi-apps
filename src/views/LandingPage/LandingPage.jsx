import React from "react";
import { Layout } from "../../components/Layout";

export const LandingPage = () => {
  return (
    <Layout
    //   inverse
      title="Digi App"
      secondary={["Sign In", "/auth/signin"]}
      primary={["Create Account", "/auth/newaccount"]}
    />


  );
};

export default LandingPage;
