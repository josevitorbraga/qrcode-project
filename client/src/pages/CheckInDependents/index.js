import React from "react";

import { Container, Stepper, Step, StepLabel } from "@material-ui/core";

const steps = ["Dados do responsável", "Adicionar dependentes", "Check In"];

export default function index() {
  return (
    <Container sx={{ marginTop: "2em" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}
