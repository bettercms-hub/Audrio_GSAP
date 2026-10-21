import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Section4({ rootProps }: { rootProps?: React.ComponentProps<'section'> }) {
  return (
    <section id="section4" data-bcms-section-label="Section4" {...rootProps}>
      <img 
        src={bcms(bcmsHome, "section4-img-audira-lifestyle", "/images/img1.jpeg")} 
        alt="Audira lifestyle" 
        className="img1 radius" data-bcms-field="section4-img-audira-lifestyle" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section4-img-audira-lifestyle")} 
      />
      <img 
        src={bcms(bcmsHome, "section4-img-audira-lifestyle-2", "/images/img2.jpeg")} 
        alt="Audira lifestyle" 
        className="img2 radius" data-bcms-field="section4-img-audira-lifestyle-2" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section4-img-audira-lifestyle-2")} 
      />
      <img 
        src={bcms(bcmsHome, "section4-img-audira-lifestyle-3", "/images/img3.jpeg")} 
        alt="Audira lifestyle" 
        className="img3 radius" data-bcms-field="section4-img-audira-lifestyle-3" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section4-img-audira-lifestyle-3")} 
      />
    </section>
  )
}
