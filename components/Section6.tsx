import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Section6() {
  return (
    <section id="section6" className="w-full" data-bcms-section-label="Section6">
      <img 
        src={bcms(bcmsHome, "section6-img-audira-lifestyle", "/images/img4.jpg")} 
        className="radius" 
        alt="Audira lifestyle" data-bcms-field="section6-img-audira-lifestyle" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section6-img-audira-lifestyle")} 
      />
      <div className="content-wrapper" data-bcms-field="section6-body-pure-escapestep-into-a" data-bcms-kind="document">
        <h2 className="heading">Pure Escape</h2>
        <p>
          Step into a world where every note feels alive. Audira
          headphones are engineered to create a sound experience that
          surrounds you—deep, rich, and breathtaking.
        </p>
        <p>
          Whether you&apos;re working, relaxing, or moving, our design blends
          comfort and clarity for every lifestyle. You don&apos;t just listen —
          you feel the moment.
        </p>
      </div>
    </section>
  )
}
