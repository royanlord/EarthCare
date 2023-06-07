import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./css/style.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/event" element={<Event />} /> */}
          {/* <Route path="/article" element={<Article />} /> */}
          {/* <Route path="/detailArticle/:id" element={<DetailArticle />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello, React JS</h1> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
