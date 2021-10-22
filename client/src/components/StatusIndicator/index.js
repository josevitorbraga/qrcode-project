import React from "react";

import { Container, Option } from "./styles";

import { AiOutlineDoubleRight } from "react-icons/ai";

export default function StatusIndicator(props) {
  return (
    <Container>
      <Option isDone>Dados do resposável</Option>
      <AiOutlineDoubleRight size={30} />
      <Option isDone={props.secondPhase}>Dados da criança</Option>
    </Container>
  );
}
