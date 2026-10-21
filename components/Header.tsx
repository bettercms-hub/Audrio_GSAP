import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Header() {
  return (
    <header className="w-full">
      <nav>
        <img src={bcms(bcmsHome, "nav-img-audira", "/images/logo.png")} alt="Audira" className="logo" data-bcms-field="nav-img-audira" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-img-audira")} />
        <a href="#" className="btn radius" data-bcms-field="nav-a-buy-now" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-a-buy-now")}>{bcms(bcmsHome, "nav-a-buy-now", "Buy Now")}</a>
      </nav>
    </header>
  )
}
