import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Quiz from "./Components/Pages/Quiz/Quiz";
import Result from "./Components/Pages/Result/Result";

function App() {
    return (
        <BrowserRouter>
            <div className="app" style={{ backgroundImage: "url(./ques1.png" }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="quiz" element={<Quiz />}></Route>
                    <Route path="result" element={<Result />}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
