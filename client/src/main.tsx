import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StoreProviderWrapper } from "./utils/StoreContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <StoreProviderWrapper>
      <App />
    </StoreProviderWrapper>
  </Router>
);
