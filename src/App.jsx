import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Navbar />
      <Outlet />
      <div style={{ alignSelf: "center", marginBottom: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
