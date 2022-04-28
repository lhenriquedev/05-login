import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;

  height: 100%;

  form {
    width: 350px;

    display: grid;
    grid-template-columns: 1fr;

    p {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.875rem;
      margin-bottom: 2.25rem;
    }

    div {
      & + div {
        margin-top: 0.75rem;
      }

      span:not(:last-child) {
        color: #1a202c;
        margin-bottom: 0.5rem;
      }

      label {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        input {
          padding: 1rem;
          border: 1px solid #e8e8e8;
          border-radius: 5px;
        }
      }

      .form-error {
        color: red;
      }
    }

    .input-radio {
      margin: 1.5rem 0;
      display: flex;
      justify-content: space-between;

      label {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.5rem;

        input {
          width: 15px;
          height: 15px;
        }

        span {
          font-size: 0.875rem;
        }
      }
      a {
        font-size: 0.875rem;
        color: #2b6cb0;
      }
    }

    button + button {
      margin-top: 1rem;
    }
  }
`;
