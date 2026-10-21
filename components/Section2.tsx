import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsRows, bcmsStyle } from "../src/bcms-content";

export default function Section2({ rootProps }: { rootProps?: React.ComponentProps<'section'> }) {
  // ponytail: the owner's three fixed boxes; rows added in the CMS past the third need a fourth box here
  const cards = bcmsRows<Record<string, string>>(bcmsHome, "section2-group-crystal-clear-audio", [])
  return (
    <section id="section2" data-bcms-section-label="Section2" {...rootProps}>
      <div className="content-wrapper">
        <h2 className="heading" data-bcms-field="section2-h2-true-clarity" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-h2-true-clarity")}>{bcms(bcmsHome, "section2-h2-true-clarity", "True Clarity")}</h2>
        <p dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "section2-p-engineered-for-clarity-comfort", "Engineered for clarity, comfort, and immersive sound — Audira\n          redefines your listening experience with style and performance\n          in perfect harmony.") }} data-bcms-field="section2-p-engineered-for-clarity-comfort" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-p-engineered-for-clarity-comfort")}></p>
        <a href="#" className="btn radius" data-bcms-field="nav-a-buy-now" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "nav-a-buy-now")}>{bcms(bcmsHome, "nav-a-buy-now", "Buy Now")}</a>
      </div>

      <div className="feature-wrapper">
        <div className="feature-box radius" data-bcms-key={cards[0]?._key}>
          <div className="feature-name" data-bcms-field="section2-group-crystal-clear-audio[0].div-crystal-clear-audio" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-group-crystal-clear-audio[0].div-crystal-clear-audio")}>
            {bcms(cards[0], "div-crystal-clear-audio", "Crystal-Clear Audio")}
          </div>
          <div className="feature-detail" data-bcms-field="section2-group-crystal-clear-audio[0].div-hear-every-detail-with" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-group-crystal-clear-audio[0].div-hear-every-detail-with")}>
            {bcms(cards[0], "div-hear-every-detail-with", "Hear every detail with balanced bass and studio-quality mids and highs.")}
          </div>
        </div>
        <div className="feature-box radius" data-bcms-key={cards[1]?._key}>
          <div className="feature-name" data-bcms-field="section2-group-crystal-clear-audio[1].div-crystal-clear-audio" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-group-crystal-clear-audio[1].div-crystal-clear-audio")}>
            {bcms(cards[1], "div-crystal-clear-audio", "All-Day Comfort")}
          </div>
          <div className="feature-detail" data-bcms-field="section2-group-crystal-clear-audio[1].div-hear-every-detail-with" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-group-crystal-clear-audio[1].div-hear-every-detail-with")}>
            {bcms(cards[1], "div-hear-every-detail-with", "Lightweight build with plush ear cushions and ergonomic fit.")}
          </div>
        </div>
        <div className="feature-box radius" data-bcms-key={cards[2]?._key}>
          <div className="feature-name" data-bcms-field="section2-group-crystal-clear-audio[2].div-crystal-clear-audio" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-group-crystal-clear-audio[2].div-crystal-clear-audio")}>
            {bcms(cards[2], "div-crystal-clear-audio", "40+ Hour Battery Life")}
          </div>
          <div className="feature-detail" data-bcms-field="section2-group-crystal-clear-audio[2].div-hear-every-detail-with" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section2-group-crystal-clear-audio[2].div-hear-every-detail-with")}>
            {bcms(cards[2], "div-hear-every-detail-with", "Long-lasting performance, wherever you go.")}
          </div>
        </div>
      </div>
    </section>
  )
}
