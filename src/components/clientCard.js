import React from "react";
import { useNavigate } from "react-router-dom";
// css
import "../assets/style.css";
// Bootstrap imports
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ClientCard = ({ client }) => {
  let navigate = useNavigate();

  const routeChange = (id) => {
    if (id) { // Error handling
      let path = `/client/${id}`;
      navigate(path);
    }
  };

  return (
    <Card
      bg="secondary"
      text="white"
      style={{ width: "18rem" }}
      className="mb-2"
      onClick={() => routeChange(client.id)}
    >
      <Card.Header>Client Card</Card.Header>
      <Card.Body>
        <Card.Title>{client.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{client?.category}</ListGroup.Item>
        <ListGroup.Item>{client?.class}</ListGroup.Item>
        <ListGroup.Item>{client?.cin}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ClientCard;
