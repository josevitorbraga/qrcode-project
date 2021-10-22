import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";

import checkInImg from "../../assets/CheckIN.svg";
import checkOutImg from "../../assets/CheckOUT.svg";

export default function Home() {
  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <h1>Oque deseja fazer?</h1>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* ------------- CHECK IN --------------- */}
        <Link style={{ textDecoration: "none" }} to="/checkin">
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={checkInImg}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "text.primary",
                    fontSize: "h5.fontSize",
                  }}
                >
                  Check In
                </Box>
                <Box
                  component="p"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "text.secondary",
                    fontSize: 15,
                  }}
                >
                  Realizar a entrada de um novo cliente ao parque.
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        {/* ------------- CHECK OUT --------------- */}
        <Link style={{ textDecoration: "none" }} to="/checkout">
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={checkOutImg}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "text.primary",
                    fontSize: "h5.fontSize",
                  }}
                >
                  Check Out
                </Box>
                <Box
                  component="p"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    color: "text.secondary",
                    fontSize: 15,
                  }}
                >
                  Realize a saída de um cliente do parque.
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Container>
    </>
  );
}
