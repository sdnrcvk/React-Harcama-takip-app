import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import { Container } from "@mui/system";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {authIsReady, user}=useAuthContext();
  
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Navbar/>
        <Container>
          <Routes>
            <Route path="/" exact element={user ? <Home/> : <Login/>}></Route>
            <Route path="/login" element={!user ? <Login/> : <Home/>}></Route>
            <Route path="/signup" element={!user ? <Signup/> : <Home/>}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
