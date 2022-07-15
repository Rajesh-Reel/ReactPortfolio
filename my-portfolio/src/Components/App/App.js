// import logo from "../../logo.svg";
import imageOfMe from "../../imageOfMe.jpg";
import "./App.css";
import Cards from "../Cards/Cards.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="NavBar">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="NavContents">Rajesh Reel</div>
          <div className="NavContents">Navbar</div>
          <div className="NavContents">DarkModeButton</div>
        </div>
      </header>
      <section className="deadSpace"></section>
      <main className="App-main">
        <br />
        <div className="ColumnsForIntro">
          <div className="ColumnLeft">
            <h1>Hi, I am Rajesh,</h1>
            <p>I used to push pills and now I git push</p>
            <p>Having worked in the pharmaceutical industry I am...</p>
          </div>
          <div className="ColumnRight">
            <img src={imageOfMe} className="imageOfMe" alt="myself" />
          </div>
        </div>
        <div>
          <h2>Projects</h2>
          <br />
          <div className="CardDivs">
            <Cards
              title="Project One"
              body="Here lies the body of my div card where I explain my project and showcase my tech stack"
              imageUrl="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/project.png"
            />
            <Cards
              title="Project Two"
              body="Here lies the body of my div card where I explain my project and showcase my tech stack"
              imageUrl="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/project.png"
            />
            <Cards
              title="Project Three"
              body="Here lies the body of my div card where I explain my project and showcase my tech stack"
              imageUrl="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/project.png"
            />
          </div>
          <p>Link to Projects page route</p>
          <br />
        </div>
      </main>
      <footer className="App-footer">
        <ul class="bottomofsiteSocials">
          {/* <li>
            <a
              href="//www.youtube.com/users/Motorscouk"
              target="_blank"
              rel="nofollow noopener norefferer"
              className="icon"
            >
              <img
                src="https://cdn.motors.co.uk/v3/live/C06539B2E3A52BD0159CBB44F04619B8A790EF30/ux/icons/youtube.svg"
                alt="You Tube"
              />
            </a>
          </li> */}

          <a
            href="//twitter.com/reel_codes"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="icon"
          >
            <img
              src="https://cdn.motors.co.uk/v3/live/C06539B2E3A52BD0159CBB44F04619B8A790EF30/ux/icons/twitter-grey.svg"
              alt="Twitter"
              className="TwitterLogo"
            />
          </a>

          <a
            href="//github.com/rajesh-reel"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="icon"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="GithubLogo"
            />
          </a>

          <a
            href="//www.linkedin.com/in/rajesh-reel/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="icon"
          >
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
              alt="LinkedIn"
              className="LinkedInLogo"
            />
          </a>
        </ul>
        <p>Legal jargon here</p>
        <p>© 2022 Rajesh Reel</p>
        <p>All rights copyright trademark blah</p>
        <p>SiteMap TODO</p>
        <br />
      </footer>
    </div>
  );
}

export default App;
