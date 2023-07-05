import "./style.css";
import Navbar from "./components/Navbar_props";
import TextForm from "./components/textUtils_useState";
import About from "./components/about";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [light, setLight] = React.useState(false);
  function handleMode() {
    setLight((prevmode) => !prevmode);
  }

  return (
    <BrowserRouter>
    <main>
      <Navbar home="Home" num={123456789} handleMode={handleMode} lightMode={light} />
      <div className="container">
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                placeholder="Enter the text to analyze below     "
                lightMode={light}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About lightMode={light}/>}></Route>
        </Routes>
      </div>
      {/* <Navbar home="Home" num={9380158819}/>
      <div className="container">
        <img className="logo main" src="logo512.png" />
        <h2> Learn React.js </h2>
      </div> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
