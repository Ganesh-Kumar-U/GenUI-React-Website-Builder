import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
import Mainpage2 from "./components/Customizeui";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/mainpage2" element={<Mainpage2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
