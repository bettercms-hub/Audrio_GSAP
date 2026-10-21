import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Section3({ rootProps }: { rootProps?: React.ComponentProps<'section'> }) {
  return (
    <section id="section3" data-bcms-section-label="Section3" {...rootProps}>
      <h2 className="heading" data-bcms-field="section3-h2-masterbeat" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section3-h2-masterbeat")}>{bcms(bcmsHome, "section3-h2-masterbeat", "Masterbeat")}</h2>
      <div className="content-wrapper">
        <video width="500" height="auto" autoPlay loop muted className="radius">
          <source src={bcms(bcmsHome, "section3-video-video", "/images/video.mp4")} type="video/mp4" data-bcms-props="section3-video-video|url|src" />
        </video>
        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "section3-p-crafted-for-the-modern", "Crafted for the modern audiophile, Audira headphones deliver\n            sound so rich, it pulses through your senses. From crisp highs\n            to deep, rolling bass—you don&apos;t just hear it, you feel it.") }} data-bcms-field="section3-p-crafted-for-the-modern" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section3-p-crafted-for-the-modern")}></p>
          <p dangerouslySetInnerHTML={{ __html: bcms(bcmsHome, "section3-p-whether-youre-in-focus", "Whether you&apos;re in focus mode or free flow, the precision-tuned\n            audio adapts to your pace. With Masterbeat, music becomes your\n            personal soundtrack—bold, immersive, unforgettable.") }} data-bcms-field="section3-p-whether-youre-in-focus" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section3-p-whether-youre-in-focus")}></p>
        </div>
      </div>
    </section>
  )
}
