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
import ParkComponent from "../../components/ParkComponent";

export default function Home() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#03081a",
          color: "#f8f8f8",
          borderRadius: "0 0 50% 50%",
          margin: 0,
          maxWidth: "100%",
          minWidth: "100%",
        }}
      >
        <h1>Home page</h1>
      </Container>

      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "4rem",
        }}
      >
        <ParkComponent />

        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ marginTop: 0 }}>Ações</h1>
          <Container disableGutters sx={{ display: "flex" }}>
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
            <Link
              style={{ textDecoration: "none", marginLeft: "1em" }}
              to="/checkout"
            >
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
        </Container>
      </Container>
    </>
  );
}
