import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
function Header() {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <header>
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="Logo" />
        <h3>MAY 2024</h3>
      </div>
      <div>
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
