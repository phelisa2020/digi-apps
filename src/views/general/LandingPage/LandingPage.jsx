import React from "react";
import { Layout } from '../../../components/Layout'
import { useLandingPage } from "./LandingPage.useLandingPage"


export const LandingPage = () => {
  const { hasLocalUsers } = useLandingPage();

  return (
    <Layout
      inverse
      title="Digi App!"
      secondary={["Sign In",!hasLocalUsers ? "/auth/signin" : 'auth/select']}
      primary={["Create Account", "/create/name"]}
    />
     
  );
};

export default LandingPage;
