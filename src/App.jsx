import "./css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import DetailEvents from "./pages/DetailEvents";
import DaftarEvents from "./pages/DaftarEvents";

function App() {
  return (
    <>
      {/* Testing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/events/:id" element={<DetailEvents />} />
          <Route path="/daftarevents/:id" element={<DaftarEvents />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello, React JS</h1> */}
    </>
  );
}

export default App;
