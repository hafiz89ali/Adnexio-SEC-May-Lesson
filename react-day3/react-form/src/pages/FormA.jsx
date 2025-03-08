import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function FormA() {
  // email state
  const [email, setEmail] = useState("");

  return (
    <div>
      <Header />
      <body>
        <div className="main-container">
          <h1>Form A</h1>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default FormA;
