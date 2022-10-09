import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.js";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="index-container">
      <App />
    </div>
  </StrictMode>
);
