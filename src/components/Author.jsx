import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Author() {
  return (
    <div>
      <div>
        <a href="#">Makinde Abdulazeez</a>
        Google Keep Clone, A portfolio Project
      </div>
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
    </div>
  );
}

export default Author;
