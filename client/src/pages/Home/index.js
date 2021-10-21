import React from "react";

import { GrDocumentUser, GrQr } from "react-icons/gr";
import { Container, ActionButton, Header } from "./styles";

export default function Home() {
  return (
    <>
      <Header>
        <h1>Oque deseja fazer?</h1>
      </Header>
      <Container>
        <div className="option">
          <label htmlFor="">Check In</label>
          <ActionButton to="/checkin">
            <span>
              <GrDocumentUser size={80} />
            </span>
          </ActionButton>
        </div>
        <div className="option">
          <label htmlFor="">Check Out</label>

          <ActionButton to="/checkout">
            <span>
              <GrQr size={80} />
            </span>
          </ActionButton>
        </div>
      </Container>
    </>
  );
}
