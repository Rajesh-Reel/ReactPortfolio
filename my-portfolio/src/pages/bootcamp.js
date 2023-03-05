import "../Components/App/App.css";
import Footer from "../Components/Footer/Footer";

function Bootcamp() {
    return(
        <div>
            <div className="bootcamp-content">
                <h1>School of Code Bootcamp 12</h1>
                <p>I have very recently completed an intense 16 week long coding boot camp with the School of Code (cohort 12) and learned so many technologies and skills that I will happily take into my career going forwards. My current tech stack is the PERN (PostgreSQL, Express, React, Node.js) stack although I am happy to learn new languages as and when needed.</p>
                <br/>
                <p>With no experience coding prior to the boot camp I was drawn to the tech industry as not only can you build projects from the ground up but you can do so in a stable career</p>
                <br/>
                <p>My previous career was in pharmacy and the reason for the career change was the lack of progression, so when a space was available at School of Code - for free - I jumped at the chance. I look forward to succeding in my new career</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Bootcamp;