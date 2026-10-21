import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsRows, bcmsStyle } from "../src/bcms-content";

export default function Section2() {
  return (
    <section id="section2" data-bcms-section-label="Section2">
      <div className="content-wrapper">
        <h2 className="heading" data-bcms-field="section2-h2-true-clarity" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-h2-true-clarity")}>{bcms(bcmsHome, "section2-h2-true-clarity", "True Clarity")}</h2>
        <p dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "section2-p-engineered-for-clarity-comfort", "Engineered for clarity, comfort, and immersive sound — Audira\n          redefines your listening experience with style and performance\n          in perfect harmony.") }} data-bcms-field="section2-p-engineered-for-clarity-comfort" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-p-engineered-for-clarity-comfort")}></p>
        <a href="#" className="btn radius" data-bcms-field="nav-a-buy-now" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-a-buy-now")}>{bcms(bcmsHome, "nav-a-buy-now", "Buy Now")}</a>
      </div>

      <div className="feature-wrapper">
        {bcmsRows(bcmsHome, "section2-group-crystal-clear-audio", [{"div-crystal-clear-audio":"Crystal-Clear Audio","div-hear-every-detail-with":"Hear every detail with balanced bass and studio-quality mids and highs."},{"div-crystal-clear-audio":"All-Day Comfort","div-hear-every-detail-with":"Lightweight build with plush ear cushions and ergonomic fit."},{"div-crystal-clear-audio":"40+ Hour Battery Life","div-hear-every-detail-with":"Long-lasting performance, wherever you go."}]).map((card, i) => (
          <div className="feature-box radius" key={i} data-bcms-key={card._key}>
            <div className="feature-name" data-bcms-field={`section2-group-crystal-clear-audio[${i}].div-crystal-clear-audio`} data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, `section2-group-crystal-clear-audio[${i}].div-crystal-clear-audio`)}>{bcms(card, "div-crystal-clear-audio", "")}</div>
            <div className="feature-detail" data-bcms-field={`section2-group-crystal-clear-audio[${i}].div-hear-every-detail-with`} data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, `section2-group-crystal-clear-audio[${i}].div-hear-every-detail-with`)}>{bcms(card, "div-hear-every-detail-with", "")}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
