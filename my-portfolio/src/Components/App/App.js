// import logo from "../../logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Bootcamp from "../../pages/bootcamp";
import "./App.css";

function App() {
  return (
    <>
      {/* <nav className="navbar"> */}
      <header className="App-header">
        <div className="NavBar">
          <div className="NavContents"><Link to="/">Home</Link></div>
          <div className="NavContents"><Link to="/portfolio">Portfolio</Link></div>
          <div className="NavContents"><Link to="/bootcamp">Bootcamp</Link></div>
          {/* <div className="NavContents"><Link to="/sports">Sports</Link></div> */}
        </div>
      </header>
      {/* </nav> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/bootcamp" element={<Bootcamp />} />
        {/* <Route path="/sports" element={<Sports />} /> */}
      </Routes>
    </>
  );
}

export default App;
