import "./App.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./components/LandingPage/Landing";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLanding, setIsLanding] = useState(true);
  const [darkmode, setDarkmode] = useState(true);

  const landing = () => {
    setIsLanding(false);

    setTimeout(() => {
      setShowNavbar(true);
    }, 5000);
  };

  const colorModes = () => {
    if (darkmode) {
      return "light";
    } else {
      return "dark";
    }
  };

  return (
    <section className={darkmode ? "mainSectionDark" : "mainSectionLight"}>
      {showNavbar ? (
        <Navbar
          isLanding={isLanding}
          colorModes={colorModes}
          darkmode={darkmode}
          setDarkmode={setDarkmode}
        />
      ) : (
        <Landing
          landing={landing}
          isLanding={isLanding}
          darkmode={darkmode}
          setIsLanding={setIsLanding}
        />
      )}

      <Routes>
        <Route path="/">
          <Route path="" element={<Home darkmode={darkmode} />} />
        </Route>
      </Routes>
    </section>
  );
};

export default App;
