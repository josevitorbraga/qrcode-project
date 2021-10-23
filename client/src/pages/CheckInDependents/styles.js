import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 1em;
  padding-left: 4em;
  border-left: 1px solid #e6e6e6;

  & div + div {
    margin-top: 10px;
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4em;

  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;
