import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.css";
import { Article } from "./pages/Article";
import { DetailArticle } from "./pages/DetailArticle";

function App() {
  return (
    <>
      {/* <h1>Hello, React JS</h1> */}
      {/* <Article /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/detailArticle/:id" element={<DetailArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
