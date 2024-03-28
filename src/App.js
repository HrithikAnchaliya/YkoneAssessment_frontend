// Pages
import Clients from "./pages/Clients";
import PerClients from "./pages/perClient";
// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Route
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/client/:id" element={<PerClients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
