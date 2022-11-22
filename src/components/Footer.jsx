import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Makinde Abdulazeez</p>
      <ul className="author-links">
        <li className="list">
          <a href="#">
            <LinkedInIcon />
          </a>
        </li>
        <li className="list">
          <a href="#">
            <TwitterIcon />
          </a>
        </li>
        <li className="list">
          <a href="#">
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
