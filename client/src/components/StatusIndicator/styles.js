import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  svg {
    color: #385ee8;
  }
`;

export const Option = styled.div`
  //margin: 0 1em;
  padding: 0 3em 0.1em 3em;
  border-bottom: ${props =>
    props.isDone ? "2px solid #385ee8" : "2px solid #c9c9c9"};
  color: ${props => (props.isDone ? "#385ee8" : "#c9c9c9")};
`;
