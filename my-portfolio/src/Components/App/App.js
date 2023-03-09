// import logo from "../../logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import Bootcamp from "../../pages/bootcamp";
import "./App.css";

function App() {
  return (
    <>
      {/* <nav className="navbar"> */}
      <header className="App-header">
        <div className="NavBar">
          <div><Link className="NavContents" to="/">Home</Link></div>
          <div><Link className="NavContents" to="/portfolio">Portfolio</Link></div>
          <div><Link className="NavContents" to="/bootcamp">Bootcamp</Link></div>
        </div>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
      </Routes>
    </>
  );
}

export default App;
