import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Section1() {
  return (
    <section id="section1" data-bcms-section-label="Section1">
      <h1 className="heading" data-bcms-field="section1-h1-modern-harmony" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section1-h1-modern-harmony")}>{bcms(bcmsHome, "section1-h1-modern-harmony", "Modern Harmony")}</h1>
    </section>
  )
}
