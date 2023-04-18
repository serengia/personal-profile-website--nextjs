import React from "react";
import Contact from "./Contact";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container row">
        <Contact />
        <div className="social-links">
          <a href="https://github.com/serengia">
            <img src="./img/github.svg" type="image/svg+xml"></img>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/james-serengia">
            <img src="./img/linkedin.svg" type="image/svg+xml"></img>
          </a>
          <a target="_blank" href="https://twitter.com/JamesSerengia">
            <img src="./img/twitter.svg" type="image/svg+xml"></img>
          </a>
          <a target="_blank" href="https://medium.com/@jamesserengia">
            <img src="./img/medium.svg" type="image/svg+xml"></img>
          </a>

          <a href="https://wellfound.com/u/james-serengia">
            <img src="./img/angellist.svg" type="image/svg+xml"></img>
          </a>
        </div>
        <a className="footer-email" href="mailto:info@jamesserengia.com">
          info@jamesserengia.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
