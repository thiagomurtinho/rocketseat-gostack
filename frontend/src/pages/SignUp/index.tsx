import React from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Background, Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber Logo" />

      <form action="#">
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="forgot">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
