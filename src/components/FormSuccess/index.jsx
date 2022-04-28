import React from "react";

import doneImage from "../../assets/doneSVG.svg";

import * as S from "./styles";

export const FormSuccess = () => {
  return (
    <S.Wrapper>
      <h2>Login efetuado com sucesso!</h2>
      <img src={doneImage} alt="" />
    </S.Wrapper>
  );
};
