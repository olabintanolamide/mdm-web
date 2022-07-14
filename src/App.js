import "./App.css";
import { Routes, Route } from "react-router-dom"
import RouterWrapper from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<RouterWrapper />} />
    </Routes>
  )
}

export default App;
