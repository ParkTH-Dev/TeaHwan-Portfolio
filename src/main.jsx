// main.jsx 또는 index.js
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Globalstyle } from "./styles/globalstyle.js";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter 임포트

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Globalstyle />
    <App />
  </BrowserRouter>
);
