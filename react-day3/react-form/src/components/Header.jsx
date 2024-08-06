import { useNavigate } from "react-router-dom";

const headerStyle = {
  backgroundColor: "gray",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function Header() {
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  function navigateToFormA() {
    navigate("/form-a");
  }
  function navigateToFormB() {
    navigate("/form-b");
  }
  function navigateToFormC() {
    navigate("/form-c");
  }
  function navigateToFormD() {
    navigate("/form-d");
  }
  return (
    <header style={headerStyle}>
      <h1>React Form</h1>
      <button onClick={navigateToHome} style={{ margin: "10px" }}>
        Back to Home
      </button>
      <button onClick={navigateToFormA} style={{ margin: "10px" }}>
        Form A
      </button>
      <button onClick={navigateToFormB} style={{ margin: "10px" }}>
        Form B
      </button>
      <button onClick={navigateToFormC} style={{ margin: "10px" }}>
        Form C
      </button>
      <button onClick={navigateToFormD} style={{ margin: "10px" }}>
        Form D
      </button>
    </header>
  );
}

export default Header;
