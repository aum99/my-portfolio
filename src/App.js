import Aos from "aos";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "aos/dist/aos.css";
import "./App.css";

import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import About from "./routes/about/about.route";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
