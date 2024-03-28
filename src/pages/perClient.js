import React from "react";
import { useParams } from "react-router-dom";
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

let client = {
  title: "A2M INFRASTRUCTURE PRIVATE LIMITED",
  description:
    "A2M INFRASTRUCTURE PRIVATE LIMITED is a RAJASTHAN based PRIVATE ltd. Company Registered at dated 19-MAR-2024 on Ministry of Corporate Affairs(MCA), The Corporate Identification Number (CIN) of  A2M INFRASTRUCTURE PRIVATE LIMITED is U68200RJ2024PTC093391 and registration number is     U68200RJ2024PTC093391 It has been classified as COMPANY LIMITED BY SHARES  and is registered under Registrar of Companies ROC JAIPUR India. Authorized share capital of A2M INFRASTRUCTURE PRIVATE LIMITED is Rs. 100000 and its paid up capital is Rs.  100000. It aspire to serve in  NA activities across the India. Its Annual General Meeting (AGM) was lastly conducted on   and as per the records of Ministry of Corporate Affairs (MCA),   its balance sheet was last filed on . The registered Email address of A2M INFRASTRUCTURE PRIVATE LIMITED is bhawanisingh420454@gmail.com and its registered address is 29, RAJPUTANA MOHALLA GAROODWASI CHAKSU JAIPUR JAIPUR RJ 303901 IN    RAJASTHAN RAJASTHAN india 303901.The current status of A2M INFRASTRUCTURE PRIVATE LIMITED shows as an NOT AVAILABLE FOR EFILING.",
  activity: "NA",
  cin: "U68200RJ2024PTC093391",
  date: "2024-03-18T18:30:00.000Z",
  category: "COMPANY LIMITED BY SHARES",
  subCategory: "NON-GOVT COMPANY",
  class: "PRIVATE",
  roc: "ROC JAIPUR",
  status: "NOT AVAILABLE FOR EFILING",
  auth_capital: "100000",
  paid_capital: "100000",
  state: "RAJASTHAN",
  pin: "303901",
  address:
    "29, RAJPUTANA MOHALLA GAROODWASI CHAKSU JAIPUR JAIPUR RJ 303901 IN ",
  email: "bhawanisingh420454@gmail.com",
};

const PerClients = ({}) => {
  let { id } = useParams();

  const [client, setClient] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    getClient(id);
  }, []);

  const getClient = async (id) => {
    try {
      const client = await fetch(
        `http://localhost:5000/elastic/search?value=${id}`,
        {
          method: "POST", // Specify the HTTP method
        }
      );
      let data = await client.json();
      setClient(data[0]._source);
      setError("");
    } catch (error) {
      console.error(error.message);
      setError("Unable to fetch or no clients"); // Handle Error
    }
  };

  return (
    <div>
      <ClientHeader header={client.name} buttonName="Edit" isClient={false} />
      {/* Description */}
      <div className="perClient-data">
        <h2 style={{ fontSize: "3rem" }}>Description</h2>
        <p className="perClient-description">{client.description}</p>
      </div>
      {/* Description */}
      <div className="perClient-data">
        <h2 style={{ fontSize: "3rem" }}>Address</h2>
        <p className="perClient-description">{client.address}</p>
      </div>
      {/* Category */}
      <div className="perClient-data">
        <h2 style={{ fontSize: "3rem" }}>Category</h2>
        <p className="perClient-description">{client.category}</p>
      </div>
      {/* status */}
      <div className="perClient-data">
        <h2 style={{ fontSize: "3rem" }}>Status</h2>
        <p className="perClient-description">{client.status}</p>
      </div>
      {/* CIN */}
      <div className="perClient-data">
        <h2 style={{ fontSize: "3rem" }}>Cin</h2>
        <p className="perClient-description">{client.cin}</p>
      </div>
      {error !== "" ? <ToastMessages message={error} /> : null}
    </div>
  );
};

export default PerClients;
