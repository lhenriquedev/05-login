import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftSide = styled.div`
  flex: 1;
  background-color: #f7fafc;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  background-color: #fff;
`;
