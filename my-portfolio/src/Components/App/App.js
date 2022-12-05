// import logo from "../../logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import "./App.css";

function App() {
  return (
    <>
      {/* <nav className="navbar"> */}
      <header className="App-header">
        <div className="NavBar">
          <div className="NavContents"><Link to="/">Home</Link></div>
          <div className="NavContents"><Link to="/books">Portfolio</Link></div>
          <div className="NavContents"><Link to="/food">Food</Link></div>
          <div className="NavContents"><Link to="/sports">Sports</Link></div>
        </div>
      </header>
      {/* </nav> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/books" element={<Books />} />
        <Route path="/food" element={<Food />} />
        <Route path="/sports" element={<Sports />} /> */}
      </Routes>
    </>
  );
}

export default App;
