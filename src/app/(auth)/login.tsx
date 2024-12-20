import { AuthContext, AuthContextProps } from "@/src/context/AuthProvider";
import { loginApi } from "@/src/service/login";
import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
`;

const InputContainer = styled(View)`
  width: 100%;
  max-width: 400px;
  padding: 16px;
`;

const StyledTextInput = styled(TextInput)`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 16px;
`;

const SubmitButton = styled(TouchableOpacity)`
  background-color: #3b82f6;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`;

export default function Login() {
  const { login, loading, isAuthenticated, user } =
    useContext<AuthContextProps>(AuthContext);
  console.log(isAuthenticated);
  const router = useRouter();
  const [email, setEmail] = useState("edsonteles343@gmail.com");
  const [password, setPassword] = useState("w1971w");

  useEffect(() => {
    if (isAuthenticated && user) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated]);

  const handleSubmit = async () => {
    console.log(`login teste`);
    console.log("loading de login", loading);
    await login(email, password);
    console.log("loading de login2", loading);
  };

  return (
    <Container>
      <InputContainer>
        <StyledTextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <StyledTextInput
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <SubmitButton onPress={handleSubmit}>
          <ButtonText>Login</ButtonText>
        </SubmitButton>
      </InputContainer>
    </Container>
  );
}
