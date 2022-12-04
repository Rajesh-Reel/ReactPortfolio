// import logo from "../../logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-contents">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/sports">Sports</Link></li>
        </ul>
      </nav>
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
