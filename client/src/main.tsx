import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StoreProviderWrapper } from "./utils/StoreContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProviderWrapper>
    <App />
  </StoreProviderWrapper>
);
