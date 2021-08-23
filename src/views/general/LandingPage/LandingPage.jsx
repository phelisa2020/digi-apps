import React from "react";
import { Layout } from '../../../components/Layout'
import { useLandingPage } from "./LandingPage.useLandingPage"


export const LandingPage = () => {
  const { hasLocalUsers } = useLandingPage();

  return (
    <Layout
      inverse
      title="Digi App!"
      secondary={["Sign In", "/auth/signin"]}
      primary={["Create Account", "/auth/register"]}
    />
     
  );
};

export default LandingPage;
