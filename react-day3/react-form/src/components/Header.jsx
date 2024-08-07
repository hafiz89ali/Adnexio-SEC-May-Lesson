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

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <header style={headerStyle}>
      <div>
        <h1>React Form</h1>
        <button onClick={() => navigateTo("/")} style={{ margin: "10px" }}>
          Home
        </button>
        <button
          onClick={() => navigateTo("/form-a")}
          style={{ margin: "10px" }}
        >
          Form A
        </button>
        <button
          onClick={() => navigateTo("/form-b")}
          style={{ margin: "10px" }}
        >
          Form B
        </button>
        <button
          onClick={() => navigateTo("/form-c")}
          style={{ margin: "10px" }}
        >
          Form C
        </button>
        <button
          onClick={() => navigateTo("/form-d")}
          style={{ margin: "10px" }}
        >
          Form D
        </button>
      </div>
    </header>
  );
}

export default Header;
