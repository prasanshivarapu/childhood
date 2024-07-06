import logo from "./logo.svg";
import "./App.css";
import Example from "./components/home";
import Chat from "./components/chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Example />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
