import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Header() {
  return (
    <header className="w-full">
      <nav>
        <img src={bcms(bcmsHome, "nav-img-audira", "/images/logo.png")} alt="Audira" className="logo" data-bcms-field="nav-img-audira" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-img-audira")} />
        <div className="nav-links">
          <a href="/blog" className="nav-link" data-bcms-field="nav-a-journal" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-a-journal")}>{bcms(bcmsHome, "nav-a-journal", "Journal")}</a>
          <a href="/jobs" className="nav-link" data-bcms-field="nav-a-careers" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-a-careers")}>{bcms(bcmsHome, "nav-a-careers", "Careers")}</a>
        </div>
        <a href="#" className="btn radius" data-bcms-field="nav-a-buy-now" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-a-buy-now")}>{bcms(bcmsHome, "nav-a-buy-now", "Buy Now")}</a>
      </nav>
    </header>
  )
}
