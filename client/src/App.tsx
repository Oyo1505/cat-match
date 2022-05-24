import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Cats from "./pages/cats";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </div>
  );
}

export default App;
