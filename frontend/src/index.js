import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";

// Render the BrowserRouter and Routes components at the root level
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route  path="/home" element={<App />} />
      <Route  path="/" element={<App />} />
      {/* Define other routes here */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
