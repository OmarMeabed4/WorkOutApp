import {BrowserRouter, Routes, Route} from "react-router-dom"

//pages imports
import Home from "./Pages/Home"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

//components imports
import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/Login"
              element={<Login/>}
            />
            <Route
              path="/Signup"
              element={<Signup/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
