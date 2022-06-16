import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  InputGroup,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { Messages } from "./Messages";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export const MessagePage = () => {
  const queryClient = new QueryClient();
  const { request } = useHttp();
  const d = new Date();
  const [form, setForm] = useState({
    title: "",
    user: "",
    date: d.toLocaleTimeString("en-US", { hour12: false }),
  });
  const [show, setShow] = useState(true);
  const [disable, setDisable] = useState(true);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };


  const addMessageHandler = async () => {
    try {
      const data = request("/chat/new", "POST", { ...form });
      setForm({
        title: "",
        user: form.user,
        date: d.toLocaleTimeString("en-US", { hour12: false }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDisabled = () => {
    if (form.user !== "") {
      setDisable(false);
    }
  };

  useEffect(() => {
    handleDisabled();
  }, [form.user, handleDisabled]);

  const hide = () => setShow(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-dark">
        <div className="text-light h1 text-center mb-5">ANONYMOUS CHAT</div>
        <Modal show={show} onHide={hide}>
          <Modal.Header>
            <Modal.Title>Enter username</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="">
              <Form.Control
                placeholder="Enter username"
                aria-label="title"
                name="user"
                aria-describedby="basic-addon2"
                value={form.user}
                onChange={changeHandler}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={hide} disabled={disable}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Container md={"10"}>
          <Row md="10" className="d-flex flex-column">
            <Messages form={form}></Messages>
          </Row>
          <Row className="d-flex flex-row position-fixed bottom-0 w-75 mb-1">
            <InputGroup className={"formCont"}>
              <Form.Control
                placeholder="Enter message"
                aria-label="title"
                name="title"
                aria-describedby="basic-addon2"
                value={form.title}
                onChange={changeHandler}
              />
              <Button
                variant="primary"
                className="mx"
                onClick={addMessageHandler}
              >
                Enter
              </Button>
            </InputGroup>
          </Row>
        </Container>
      </div>
    </QueryClientProvider>
  );
};
