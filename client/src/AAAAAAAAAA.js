import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import QrReader from "react-qr-reader";

export default function App() {
  const [generatedQRCode, setGeneratedQRCode] = useState("");
  const [scanResult, setScanResult] = useState("");
  const [input, setInput] = useState("");

  const generateQrCode = () => {
    QRCode.toDataURL(input)
      .then(response => setGeneratedQRCode(response))
      .catch(error => console.log(error));
  };

  const handleScan = result => {
    if (result) {
      setScanResult(result);
    }
  };
  const handleError = err => {
    console.log(err);
  };

  useEffect(() => {
    console.log(generatedQRCode);
  }, [generatedQRCode]);

  return (
    <>
      <div className="generate">
        <h1>QR CODE GENERATOR</h1>
        <input
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="Insert some text"
        />
        <button onClick={() => generateQrCode()}>Generate QR</button>
        <br />
        <br />
        <br />
        <a href={generatedQRCode} download>
          <img src={generatedQRCode} alt="QRCode" />
        </a>
      </div>
      <div className="decode">
        <h1>QR CODE DECODER</h1>
        <QrReader
          style={{ height: "15em", width: "15em" }}
          onScan={handleScan}
          onError={handleError}
          delay={300}
        />
        <h3>Result:</h3>
        <p>{scanResult}</p>
      </div>
    </>
  );
}
