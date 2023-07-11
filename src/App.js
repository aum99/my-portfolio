import { Route, Routes } from "react-router";
import "./App.css";

import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import About from "./routes/about/about.route";

function App() {
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
