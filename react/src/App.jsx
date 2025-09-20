import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import GoodPractices from "./pages/GoodPractices";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/tasks">Tareas</Link> |{" "}
        <Link to="/good-practices">Buenas practicas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/good-practices" element={<GoodPractices />} />
      </Routes>
    </div>
  );
}

export default App;
