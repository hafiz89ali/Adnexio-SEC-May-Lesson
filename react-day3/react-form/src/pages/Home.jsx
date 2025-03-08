import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <div>
      <Header />
      <body>
        <div className="main-title">
          <h2>Form Handling</h2>
          <p>Learn React Form Handling</p>
        </div>
        <div className="card-container">
          <div className="card-row">
            <Card
              title="Form Handling Method 1"
              description="Individual State for Each Input. Each input manages each form field with its own 'useState' hook."
              buttonText="Form A"
              onClick={() => navigateTo("/form-a")}
            />
            <Card
              title="Form Handling Method 2"
              description="Group State as an Object. Store all form fields in a single state object."
              buttonText="Form B"
              onClick={() => navigateTo("/form-b")}
            />
          </div>
          <div className="card-row">
            <Card
              title="Form Handling Method 3"
              description="Using the <form> Element. Handle form submission via the native form behaviour."
              buttonText="Form C"
              onClick={() => navigateTo("/form-c")}
            />
            <Card
              title="Form Handling Method 4"
              description="React Hook Form. Efficient form management with built-in validation."
              buttonText="Form D"
              onClick={() => navigateTo("/form-d")}
            />
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Home;
