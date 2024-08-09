import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "../pages/Counter";
import Dictionary from "../pages/Dictionary";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;