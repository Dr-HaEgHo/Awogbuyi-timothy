import { BrowserRouter } from "react-router-dom";
import { AnimCursor, AnimatedRoutes, Navbar } from "./components";
import "./app.css";
import { stars, grid } from "./assets";

const App = () => {
  return (
    <div className="app">
      <div className="app-bg">
        <div className="mov-grad1" />
        <div className="mov-grad2" />
        <div className="mov-grad3" />
        <div className="darkoverlay" />
        <img src={grid} className="grid" />
      </div>
        <AnimCursor />
        <BrowserRouter>
          <Navbar />
          <AnimatedRoutes />
        </BrowserRouter>
    </div>
  );
};

export default App;
