import React, { useState } from "react";

import leftSideImage from "../../assets/login-image.svg";

import { FormSignin } from "../../components/FormSignin";
import { FormSuccess } from "../../components/FormSuccess";
import { LeftSide, RightSide, Wrapper } from "./styles";

export const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <Wrapper>
      <LeftSide>
        <img src={leftSideImage} />
      </LeftSide>
      <RightSide>
        {!isSubmitted ? <FormSignin submitForm={submitForm} /> : <FormSuccess />}
      </RightSide>
    </Wrapper>
  );
};
