import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 5em 30%;

  .option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;

    label {
      font-size: 1.5em;
      margin-bottom: 0.5em;
    }
  }
`;

export const ActionButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15em;
  width: 15em;

  background-color: #536dc9;
  border-left: 5px solid #a9b6e4;
  border-right: 5px solid #2a3765;
  border-radius: 5px;

  color: #fff;

  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2), inset 0 -5px 0 #2a3765,
    inset 0 5px 0 #a9b6e4;

  &:hover {
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2), inset 0 -5px 0 #a9b6e4,
      inset 0 5px 0 #2a3765;
    border-right: 5px solid #a9b6e4;
    border-left: 5px solid #2a3765;
  }

  span {
    color: #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5em;
`;
