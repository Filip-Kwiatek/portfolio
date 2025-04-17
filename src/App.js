import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ResumeViewer from "./components/ResumeViewer/ResumeViewer";

function App() {
  return (
    <div className="App circle-effect">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumeViewer />} />
      </Routes>
    </div>
  );
}

export default App;