import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { tokens } from "../../data/tokens";
import { Layout } from "../../components/Layout";
import { useNewAccount } from "./NewAccount.useNewAccount";
import { ALERT } from "./NewAccount.constants";

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s};
`;



export const NewAccount = () => {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    createAccount,
    alert,
  } = useNewAccount();
  const isResting = alert !== 'creating';

  return (
   
    <Layout
    form
      title="New Account"
      alert={alert ? ALERT[alert] : undefined}
      secondary={["Cancel", isResting && "/"]}
        primary={["Create Account", isResting && createAccount]}
    >


      <InputWrapper>
        <Input
          value={email}
          label="Email"
          accepts="email"
          onChange={isResting && setEmail}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          value={password}
          label="Password"
          accepts="password"
          onChange={isResting && setPassword}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          value={confirmPassword}
          label="Confirm Password"
          accepts="password"
          onChange={isResting && setConfirmPassword}
        />
      </InputWrapper>

    </Layout>
    
  );
};

export default NewAccount;
