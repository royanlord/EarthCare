import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./css/style.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/" element={<Home />}></Route> */}
          {/* <Route path="/event" element={<Event />} /> */}
          {/* <Route path="/article" element={<Article />}></Route> */}
          {/* <Route path="/about" element={<About />}></Route> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello, React JS</h1> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
