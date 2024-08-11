import { useNavigate } from "react-router-dom";
import "../index.css";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();
  const navigateToCounter = () => navigate("/counter");
  const navigateToDictionary = () => navigate("/dictionary");
  return (
    <div>
      <Header />
      <div className="body">
        <div className="hero">
          <h1>REACT DAY 4</h1>
          <h3>8 AUGUST 2024</h3>
        </div>
        <div className="section">
          <h2>COUNTER</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={navigateToCounter}>GO TO MINI PROJECT</button>
        </div>
        <div className="section">
          <h2>DICTIONARY</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={navigateToDictionary}>GO TO MINI PROJECT</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
