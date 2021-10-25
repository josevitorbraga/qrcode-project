import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { usePark } from "../../context/parkContext";
import { useReactToPrint } from "react-to-print";

import { Box, Button } from "@material-ui/core";

export default function CheckInReceipt(props) {
  const childId = props.match.params.childId;

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { getChildById } = usePark();

  const [generatedQRCode, setGeneratedQRCode] = useState("");
  const [childFromStorage, setChildFromStorage] = useState({});

  const generateQrCode = () => {
    QRCode.toDataURL(childId)
      .then(response => setGeneratedQRCode(response))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    generateQrCode();

    setChildFromStorage(getChildById(childId));
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Check In realizado!</h1>
        <h4>
          Oriente o responsavel a apresentar o cupom para realizar o checkout.
        </h4>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "3em" }}
      >
        <Box
          ref={componentRef}
          className="receipt"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
            padding: "1rem",
            width: "15em",
          }}
        >
          <h2>Park Control</h2>
          <a href={generatedQRCode} download>
            <img src={generatedQRCode} alt="QRCode" />
          </a>
          <p style={{ fontSize: "0.6em" }}>{childFromStorage._id}</p>
          <h4>{childFromStorage.checkInTime}</h4>
          <p style={{ textAlign: "center" }}>
            Apresente este cupom na hora do checkout.
          </p>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => handlePrint()}>
          Imprimir
        </Button>
      </Box>
    </>
  );
}
