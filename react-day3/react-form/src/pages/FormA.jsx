import Header from "../components/Header";
import { useState } from "react";

function FormA() {
  // email state
  const [email, setEmail] = useState("");

  return (
    <div>
      <Header />
      <h1>Form A</h1>
    </div>
  );
}

export default FormA;
