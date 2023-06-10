import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import "./css/style.css";
import Home from "./pages/Home"
import Events from "./pages/Events"
import DetailEvents from "./pages/DetailEvents"
import DaftarEvents from "./pages/DaftarEvents"
import {Article} from "./pages/Article"
import {DetailArticle} from "./pages/DetailArticle"
import About from "./pages/About"
import {Contact} from "./pages/Contact"


function App() {

  console.log(import.meta.env.VITE_REGISTER_API);
  
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/events/:id" element={<DetailEvents />} />
          <Route path="/daftarevents/:id" element={<DaftarEvents />} />
          <Route path="/article" element={<Article />} />
          <Route path="/detailArticle/:id" element={<DetailArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello, React JS</h1> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
