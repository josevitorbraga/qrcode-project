import { Container, Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";

const steps = ["Dados do responsável", "Adicionar dependentes", "Check In"];

export default function StatusIndicator({ currentStep }) {
  return (
    <Container sx={{ marginTop: "2em" }}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}
