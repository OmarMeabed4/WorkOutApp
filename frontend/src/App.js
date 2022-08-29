import {BrowserRouter, Routes, Route} from "react-router-dom"

//pages imports
import Home from "./Pages/Home"

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
