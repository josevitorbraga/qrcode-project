import React from "react";

import { usePark } from "../../context/parkContext";

import { Container } from "@material-ui/core";
import ParkTable from "../ParkTable";

export default function ParkComponent() {
  const { park } = usePark();

  return (
    <Container sx={{ borderRight: "1px solid #e6e6e6" }}>
      <h1 style={{ marginTop: 0 }}>Pátio</h1>
      {park.length > 0 ? (
        <ParkTable rows={park} />
      ) : (
        <div>
          <p>Patio vazio</p>
        </div>
      )}
    </Container>
  );
}
