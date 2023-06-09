import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.css";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {

  console.log(import.meta.env.VITE_REGISTER_API);
  
  return (
    <>
      {/* <h1>Hello, React JS</h1> */}
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
