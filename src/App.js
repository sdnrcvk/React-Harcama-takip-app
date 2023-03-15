import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
