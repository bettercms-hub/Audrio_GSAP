import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Footer() {
  return (
    <footer className="w-full">
      <img src={bcms(bcmsHome, "nav-img-audira", "/images/logo.png")} className="logo" alt="Audira" data-bcms-field="nav-img-audira" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-img-audira")} />
      <div className="social">
        <a href="#">
          <img src={bcms(bcmsHome, "footer-img-facebook", "/images/fb.png")} alt="Facebook" data-bcms-field="footer-img-facebook" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "footer-img-facebook")} />
        </a>
        <a href="#">
          <img src={bcms(bcmsHome, "footer-img-instagram", "/images/insta.png")} alt="Instagram" data-bcms-field="footer-img-instagram" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "footer-img-instagram")} />
        </a>
      </div>
    </footer>
  )
}
