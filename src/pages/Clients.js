import React from "react";
// css
import "../assets/style.css";
// Bootstrap imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//components
import ClientCard from "../components/clientCard";
import ClientHeader from "../components/clientHeader";
import ToastMessages from "../components/toastMessages";

const Clients = () => {
  const [clients, setClients] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    try {
      const clients = await fetch("http://localhost:5000/clients");
      let data = await clients.json();
      setClients(data);
      setError("");
    } catch (error) {
      // Error handling
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <ClientHeader
        header="Clients"
        buttonName="Search Client"
        isClient={true}
        setClients={setClients}
        setError={setError}
      />
      <div className="clients-cards">
        <Row xs={1} md={4} className="g-4 m-4">
          {clients.map((client, index) => (
            <Col key={index}>
              <ClientCard client={client} />
            </Col>
          ))}
        </Row>
      </div>
      {error !== "" ? <ToastMessages message={error} /> : null}
    </div>
  );
};

export default Clients;
