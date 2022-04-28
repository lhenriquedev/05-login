import React from "react";

import * as S from "./styles";

export const Button = ({ text, bgColor, imagePath }) => {
  return (
    <S.Button imagepath={imagePath} bgColor={bgColor}>
      {imagePath && <img src={imagePath} alt="" />}
      {text}
    </S.Button>
  );
};
