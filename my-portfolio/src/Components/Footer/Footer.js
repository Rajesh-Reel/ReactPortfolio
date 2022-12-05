// import css;

function Footer() {
    return(
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
    )
}

export default Footer;