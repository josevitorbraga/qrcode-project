import { Container, Box, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { toast } from "react-toastify";

import { usePark } from "../../context/parkContext";

export default function CheckOut(props) {
  const { getChildById } = usePark();

  const [input, setInput] = useState("");

  const handleForm = e => {
    e.preventDefault();
    const child = getChildById(input);
    if (!child) {
      toast.warn("Criança não encontrada, scaneie ou digite novamente", {
        position: "bottom-right",
      });
      setInput("");
      return;
    }
    props.history.push(`/checkout/${input}`);
  };

  const handleScan = result => {
    const child = getChildById(result);
    if (!child) {
      toast.warn("Criança não encontrada, scaneie ou digite novamente", {
        position: "bottom-right",
      });
      setInput("");
      return;
    }
    props.history.push(`/checkout/${result}`);
  };
  const handleError = err => {
    console.log(err);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        borderRadius="0 0 50% 50%"
        backgroundColor="#03081a"
        color="#f8f8f8"
      >
        <h1>Checkout</h1>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1em",
        }}
      >
        <h1>QR Code Checkout</h1>
        <QrReader
          style={{ height: "15em", width: "15em" }}
          onScan={handleScan}
          onError={handleError}
          delay={300}
        />
        <Box
          component="p"
          textAlign="center"
          color="text.secondary"
          margin="2em 0"
        >
          "Aponte o ticket de check out para a câmera.
          <br />
          ou
          <br />
          Se preferir digite o código localizado abaixo do qr code.""
        </Box>
        <form
          onSubmit={handleForm}
          style={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Código ticket"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Container>
    </>
  );
}
