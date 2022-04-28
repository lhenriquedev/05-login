import React from "react";

import useForm from "../../hooks/useForm";
import validate from "../../hooks/validateInfo";

import { Wrapper } from "./styles";

import { Button } from "../Button";

import googleImage from "../../assets/google-image.svg";

export const FormSignin = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <p>Bem vindo de volta</p>
        <h2>Faça login na sua conta</h2>

        <div>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              placeholder="Digite seu email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div>
          <label>
            <span>Senha</span>
            <input
              type="password"
              placeholder="Digite sua senha"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <span className="form-error">{errors.password}</span>}
        </div>

        <div className="input-radio">
          <label>
            <input type="radio" />
            <span>Lembre de mim</span>
          </label>
          <a href="">Esqueceu sua senha?</a>
        </div>
        <Button text="Entrar" bgColor="primary" />
        <Button imagePath={googleImage} text="Ou faça login com o Google" bgColor="secondary" />
      </form>
    </Wrapper>
  );
};
