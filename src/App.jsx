import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.css";
import Events from "./pages/Events";
import DetailEvents from "./pages/DetailEvents";
import DaftarEvents from "./pages/DaftarEvents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/events/:id" element={<DetailEvents />} />
          <Route path="/daftarevents/:id" element={<DaftarEvents />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
