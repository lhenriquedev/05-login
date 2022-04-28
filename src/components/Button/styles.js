import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;

  border: none;
  border-radius: 5px;
  background: ${(props) => (props.bgColor === "primary" ? "#04C35C" : "#1A202C")};
  color: ${(props) => (props.bgColor === "primary" ? "#fff" : "#fff")};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }

  img {
    margin-right: 1rem;
  }
`;
