import imageOfMe from "../imageOfMe.jpg";
import imageOfMedi from "../imageOfMedi.png";
import imageOfToDo from "../imageOfToDo.png"
import "../Components/App/App.css";
import Cards from "../Components/Cards/Cards.js";
import Footer from "../Components/Footer/Footer";

function Home() {
    return(
    <div className="App">
      {/* <section className="deadSpace"></section> */}
      <main className="App-main">
        <br />
        <div className="ColumnsForIntro">
          <div className="ColumnLeft">
            <h1>Welcome, I am Rajesh,</h1>
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
              title="Medi-Check"
              body="Here lies the body of my div card where I explain my project and showcase my tech stack"
              imageUrl={imageOfMedi}
              // https://medi-check.netlify.app/
            />
            <Cards
              title="To Go List"
              body="Here lies the body of my div card where I explain my project and showcase my tech stack"
              imageUrl={imageOfToDo}
              // https://main--deluxe-begonia-5fc1b1.netlify.app/
            />
            {/* <Cards
              title="Project Three"
              body="Here lies the body of my div card where I explain my project and showcase my tech stack"
              imageUrl="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/project.png"
            /> */}
          </div>
          <br />
        </div>
      </main>
      <Footer/>
    </div>
    )
}

export default Home;