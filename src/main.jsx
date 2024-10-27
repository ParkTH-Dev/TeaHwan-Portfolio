import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Globalstyle } from "./styles/globalstyle.js";

createRoot(document.getElementById("root")).render(
  <>
    <Globalstyle />
    <App />
  </>
);
