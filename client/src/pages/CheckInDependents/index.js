import React, { useEffect, useState } from "react";
import { usePark } from "../../context/parkContext";

import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Modal,
  TextField,
  Divider,
} from "@material-ui/core";

import StatusIndicator from "../../components/StatusIndicator";

import { StyledForm, Option } from "./styles";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CloseIcon from "@material-ui/icons/Close";

import axios from "axios";

import parentImg from "../../assets/Parents.svg";
import childImg from "../../assets/Modal.svg";
import { toast } from "react-toastify";

export default function CheckInDependents(props) {
  const parentId = props.match.params.id;
  const { addToPark } = usePark();

  const [parent, setParent] = useState({});
  const [childrens, setChildrens] = useState([]);
  const [openModal, setopenModal] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [relationship, setRelationship] = useState("");

  const handleAddChild = e => {
    e.preventDefault();
    axios
      .post(`/api/child/${parentId}`, {
        name,
        age,
        relationship,
      })
      .then(res => {
        setopenModal(false);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChildToPark = child => {
    const now = new Date().toLocaleString("pt-BR");
    child.checkInTime = now;
    const response = addToPark(child);

    if (response) {
      props.history.push(`/checkin/${parent._id}/dependents/${child._id}`);
    } else {
      toast.error("Dependente já no pátio", {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    axios.get(`/api/parent/${parentId}`).then(res => {
      if (res.data === null) {
        props.history.push("/checkin");
      }
      setParent(res.data);
      setChildrens(res.data.childrens);
    });
  }, [parentId, props.history, openModal]);

  return (
    <>
      <Modal open={openModal}>
        <Box
          sx={{
            margin: "12em 30%",
            borderRadius: "1em",
            padding: "0 0 3em 0",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "end", padding: "1em 0" }}
          >
            <Button onClick={() => setopenModal(false)}>
              <CloseIcon />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="img" src={childImg} sx={{ height: "10em" }}></Box>
            <StyledForm
              onSubmit={handleAddChild}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                required
                onChange={e => setName(e.target.value)}
                label="Nome"
                size="small"
              />
              <TextField
                required
                onChange={e => setAge(e.target.value)}
                label="Idade"
                size="small"
              />
              <TextField
                required
                onChange={e => setRelationship(e.target.value)}
                label="Parentesco"
                size="small"
              />
              <Button
                variant="contained"
                sx={{ marginTop: "1.5em" }}
                type="submit"
              >
                Cadastrar
              </Button>
            </StyledForm>
          </Box>
        </Box>
      </Modal>
      <Container sx={{ marginTop: "2em" }}>
        <StatusIndicator currentStep={1} />
        <Box
          sx={{
            marginTop: "2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          <InfoOutlinedIcon sx={{ marginRight: "0.2em" }} />
          Na caixa da direita selecione ou adicione o dependente desejado.
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          marginTop: "2em",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ marginRight: "5em" }}>
          <CardMedia component="img" height={220} image={parentImg} />
          <CardContent>
            <h2>{parent.name}</h2>
            <h5>
              Email:
              <Box
                component="span"
                sx={{ color: "text.secondary", marginLeft: "0.3em" }}
              >
                {parent.email}
              </Box>
            </h5>
            <h5>
              Telefone:
              <Box
                component="span"
                sx={{ color: "text.secondary", marginLeft: "0.3em" }}
              >
                {parent.phone1}
              </Box>
            </h5>
            <h5>
              Telefone:
              <Box
                component="span"
                sx={{ color: "text.secondary", marginLeft: "0.3em" }}
              >
                {parent.phone2}
              </Box>
            </h5>
            <h5>
              Cpf:
              <Box
                component="span"
                sx={{ color: "text.secondary", marginLeft: "0.3em" }}
              >
                {parent.cpf}
              </Box>
            </h5>
            <h5>
              Endereço:
              <Box
                component="span"
                sx={{ color: "text.secondary", marginLeft: "0.3em" }}
              >
                {parent.address}
              </Box>
            </h5>
          </CardContent>
        </Card>
        <Box
          component="div"
          sx={{ paddingLeft: "5em", borderLeft: "1px solid #e6e6e6" }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#fff",
              boxShadow: "5px 5px 20px rgb(0,0,0,0.2)",
              height: "24em",
              padding: "2em",
            }}
          >
            {childrens.map(child => (
              <div key={child._id}>
                <Option
                  onClick={() => handleChildToPark(child)}
                  key={child._id}
                >
                  {child.name} - {child.relationship} - {child.age} anos
                </Option>
                <Divider />
              </div>
            ))}
            <Button
              onClick={() => setopenModal(true)}
              sx={{ padding: "1em", marginTop: "1em" }}
            >
              <AddCircleOutlineIcon /> Adicionar dependentes
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
