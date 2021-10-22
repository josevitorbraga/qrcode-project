import styled from "styled-components";

export const Wraper = styled.div`
  margin-right: 5em;
  padding: 3em 3em;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid #e6e6e6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 2em;
  }
  & div + div {
    margin-top: 1rem;
  }
`;
