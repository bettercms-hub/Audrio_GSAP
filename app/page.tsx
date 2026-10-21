import { sectionsFor } from "@bettercms-ai/next";
import { BcmsSections, BcmsSection } from "@bettercms-ai/next/sections";
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Page from "./page.client";

// The page itself is a client component: its sections are drawn here, on the server, in the order BetterCMS lists them.
export default function PageWithSections() {
  const sections = sectionsFor("home");
  return (
    <Page
      main={
        <BcmsSections {...sections}>
          <BcmsSection bind="section1">{(root) => <Section1 rootProps={root} />}</BcmsSection>
          <BcmsSection bind="section2">{(root) => <Section2 rootProps={root} />}</BcmsSection>
          <BcmsSection bind="section3">{(root) => <Section3 rootProps={root} />}</BcmsSection>
          <BcmsSection bind="section4">{(root) => <Section4 rootProps={root} />}</BcmsSection>
          <BcmsSection bind="section5">{(root) => <Section5 rootProps={root} />}</BcmsSection>
        </BcmsSections>
      }
      // ponytail: Section6 sits outside #main, so it is its own list; sections added in the editor render in the #main list only
      tail={
        <BcmsSections {...sections} blocks={sections.blocks?.filter((b) => b.type === "component" && (b.props?.bind || b.props?.source))}>
          <BcmsSection bind="section6">{(root) => <Section6 rootProps={root} />}</BcmsSection>
        </BcmsSections>
      }
    />
  );
}
