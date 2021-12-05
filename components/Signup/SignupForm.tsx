import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigation";

const Container = styled.View`
  margin-top: 80px;
`;

type StyledInputWrapProps = {
  isValid: boolean;
};

const InputWrap = styled.View<StyledInputWrapProps>`
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme, isValid }) =>
    isValid ? theme.colors.common.white : "red"};
  margin-bottom: 10px;
  padding: 12px;
`;

const StyledInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.common.white};
`;

type SignupButtonProps = {
  active: boolean;
};

const SignupButton = styled.Pressable<SignupButtonProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.primary.light};
  align-items: center;
  justify-content: center;
  min-height: 42px;
  border-radius: 4px;
  margin-top: 30px;
`;

const SignupText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-weight: 600;
  font-size: 16px;
`;

const SignupWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

const LoginText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
`;

const LoginClickableText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.main};
`;

const SignupFormSchema = Yup.object().shape({
  email: Yup.string().email().required("An email is required"),
  username: Yup.string()
    .required()
    .min(2, "Your username must be at least 2 characters"),
  password: Yup.string()
    .required()
    .min(8, "Your password must be at least 8 characters"),
});

const SignupForm = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    StackParamList,
    "SignupScreen"
  >;
}) => {
  return (
    <Container>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignupFormSchema}
        validateOnMount
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
        }) => (
          <>
            <InputWrap
              isValid={
                values.email.length < 1 ||
                Validator.validate(values.email)
              }
            >
              <StyledInput
                placeholderTextColor="gray"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </InputWrap>
            <InputWrap
              isValid={
                1 > values.username.length ||
                values.username.length >= 2
              }
            >
              <StyledInput
                placeholderTextColor="gray"
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </InputWrap>
            <InputWrap
              isValid={
                1 > values.password.length ||
                values.password.length >= 8
              }
            >
              <StyledInput
                placeholderTextColor="gray"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </InputWrap>
            <SignupButton
              onPress={handleSubmit}
              active={isValid}
              disabled={!isValid}
            >
              <SignupText>Sign up</SignupText>
            </SignupButton>
            <SignupWrap>
              <LoginText>Already have an account?</LoginText>
              <TouchableOpacity
                onPress={() => navigation.push("LoginScreen")}
              >
                <LoginClickableText> Log in</LoginClickableText>
              </TouchableOpacity>
            </SignupWrap>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default SignupForm;
