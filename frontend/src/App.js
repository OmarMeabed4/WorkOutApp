import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useAuthContext } from "./Hooks/useAuthContext";

//pages imports
import Home from "./Pages/Home"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

//components imports
import NavBar from "./Components/NavBar"

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user? <Home/> : <Navigate to={"/Login"}/>}
            />
            <Route
              path="/Login"
              element={!user? <Login/> : <Navigate to={"/"}/>}
            />
            <Route
              path="/Signup"
              element={!user? <Signup/> : <Navigate to={"/"}/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
