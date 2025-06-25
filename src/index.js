import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import 'material-icons/iconfont/material-icons.css';

const root = createRoot(document.getElementById("root"));
/* strict mode 는 개발 상황에서만 작동 */
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);