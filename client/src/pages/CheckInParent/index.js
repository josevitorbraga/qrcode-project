import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import {
  TextField,
  Container,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Form, Wraper } from "./styles";

import { RiParentFill, RiInformationLine } from "react-icons/ri";
import StatusIndicator from "../../components/StatusIndicator";

export default function CheckIn(props) {
  const [parentId, setParentId] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [address, setAddress] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getParent = cpf => {
    if (cpf.length === 11) {
      setCpf(cpf);
      axios
        .get(`/api/parent/cpf/${cpf}`)
        .then(res => {
          if (res.data === null) {
            console.log(res.data);
            toast.warn("Responsável não encontrado, faça o cadastro", {
              position: "bottom-right",
              autoClose: 3000,
            });
            setIsDisabled(false);
          } else {
            console.log(res.data);

            setIsDisabled(false);
            setParentId(res.data._id);
            setName(res.data.name);
            setEmail(res.data.email);
            setPhone1(res.data.phone1);
            setPhone2(res.data.phone2);
            setAddress(res.data.address);
          }
        })
        .catch(err => console.log(err));
    } else {
      setIsDisabled(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (parentId === "") {
      setIsLoading(true);
      axios
        .post("/api/parent", {
          cpf,
          name,
          email,
          phone1,
          phone2,
          address,
        })
        .then(res => {
          props.history.push(`/checkin/${res.data._id}/dependents`);
        })
        .catch(err => toast.warn(err));
    } else {
      setIsLoading(true);
      axios
        .put(`/api/parent/${parentId}`, {
          cpf,
          name,
          email,
          phone1,
          phone2,
          address,
        })
        .then(res => {
          props.history.push(`/checkin/${parentId}/dependents`);
          console.log(res);
        });
    }
  };

  return (
    <>
      <StatusIndicator currentStep={0} />
      <Box
        component="p"
        display="flex"
        justifyContent="center"
        color="text.secondary"
        marginTop="3em"
        marginBottom="3em"
        fontStyle="italic"
        alignItems="center"
      >
        <RiInformationLine size={24} />
        Ao preencher o campo CPF, caso o responsável já tenha sido cadastrado,
        os campos subsequentes são completados automaticamente.
      </Box>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          component="div"
        >
          <Wraper>
            <h2>Dados do responsável</h2>
            <RiParentFill size={50} />
          </Wraper>
          <Form onSubmit={handleSubmit}>
            <TextField
              required
              inputProps={{ maxLength: 11 }}
              label="CPF"
              size="small"
              onChange={e => getParent(e.target.value)}
            />
            <TextField
              required
              disabled={isDisabled}
              onChange={e => setName(e.target.value)}
              value={name}
              label="Nome"
              size="small"
            />
            <TextField
              required
              disabled={isDisabled}
              onChange={e => setEmail(e.target.value)}
              value={email}
              label="Email"
              size="small"
            />
            <TextField
              required
              disabled={isDisabled}
              onChange={e => setPhone1(e.target.value)}
              value={phone1}
              label="Telefone"
              size="small"
            />
            <TextField
              required
              disabled={isDisabled}
              onChange={e => setPhone2(e.target.value)}
              value={phone2}
              label="Telefone 2"
              size="small"
            />
            <TextField
              required
              multiline
              rows={4}
              disabled={isDisabled}
              onChange={e => setAddress(e.target.value)}
              value={address}
              label="Endereço"
              size="small"
            />
            {isLoading ? (
              <Box display="flex" justifyContent="center" marginTop="1em">
                <CircularProgress />
              </Box>
            ) : (
              <Button type="submit">Proximo</Button>
            )}
          </Form>
        </Box>
      </Container>
    </>
  );
}
