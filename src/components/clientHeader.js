import React from "react";
// css
import "../assets/style.css";
// Bootstrap imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//utils
import useDebounce from "../utils/utils";

const ClientHeader = ({
  header,
  buttonName,
  isClient,
  setClients = () => {},
  setError = () => {},
}) => {
  const [search, setSearch] = React.useState("");

  // DeBounce Function
  useDebounce(() => {
    if (search !== "") {
      getClients();
    }}, [search], 800 );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // can be optimized by centralizing this function
  const getClients = async () => {
    try {
      const client = await fetch(
        `http://localhost:5000/elastic/search?value=${search}`,
        {
          method: "POST", // Specify the HTTP method
        }
      );
      let data = await client.json();
      let clients = await data.map((perClient) => {
        return perClient._source;
      });
      setClients(clients);
      setError("");
    } catch (error) {
      console.error(error.message);
      setError("Unable to fetch or no clients"); // Handle Error
    }
  };

  return (
    <div className="clients-header-left">
      <div>
        <h1 id="client-header">{header}</h1>
      </div>
      <div className="clients-header-right">
        {isClient ? (
          <Form className="d-flex client-search">
            <Form.Control
              type="search"
              placeholder="Search Clients"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
          </Form>
        ) : null}
      </div>
    </div>
  );
};

export default ClientHeader;
