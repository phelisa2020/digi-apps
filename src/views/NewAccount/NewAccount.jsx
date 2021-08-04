import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { tokens } from "../../data/tokens";
import { Layout } from "../../components/Layout";
import { useNewAccount } from "./NewAccount.useNewAccount";
import { Alert } from "../../components/Alert";

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

  if (true) {
    <Layout
    title="New Account"
    secondary={["Cancel", "/"]}
    primary={["Create Account", createAccount, { disabled: true}]}
  >
      <Alert title="Checking details" nature="resolving"/>
  </Layout>
  }

  return (
    <Layout
      title="New Account"
      secondary={["Cancel", "/"]}
      primary={["Create Account", createAccount]}
    >
      <InputWrapper>
        <Input
          value={email}
          label="Email"
          accepts="email"
          onChange={console.log}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          value={password}
          label="Password"
          accepts="password"
          onChange={console.log}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          value={confirmPassword}
          label="Confirm Password"
          accepts="password"
          onChange={console.log}
        />
      </InputWrapper>
    </Layout>
  );
};

export default NewAccount;
