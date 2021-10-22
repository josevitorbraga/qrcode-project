import React from "react";

import {
  TextField,
  Container,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";
import { Form, Wraper } from "./styles";

import { RiParentFill, RiInformationLine } from "react-icons/ri";

const steps = ["Dados do responsável", "Adicionar dependentes", "Check In"];

export default function CheckIn() {
  return (
    <>
      <Container sx={{ marginTop: "2em" }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
      <Box
        component="p"
        display="flex"
        justifyContent="center"
        color="text.secondary"
        marginTop="3em"
        marginBottom="3em"
        fontStyle="italic"
        alignItems="center"
      >
        <RiInformationLine size={24} />
        Ao preencher o campo CPF, caso o responsável já tenha sido cadastrado,
        os campos subsequentes são completados automaticamente.
      </Box>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          component="div"
        >
          <Wraper>
            <h2>Dados do responsável</h2>
            <RiParentFill size={50} />
          </Wraper>
          <Form>
            <TextField label="CPF" size="small" />
            <TextField disabled label="Nome" size="small" />
            <TextField disabled label="Email" size="small" />
            <TextField disabled label="Telefone" size="small" />
            <TextField disabled label="Telefone 2" size="small" />
            <Button type="submit">Proximo</Button>
          </Form>
        </Box>
      </Container>
    </>
  );
}
