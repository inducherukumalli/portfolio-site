import { useState, useEffect, useRef, createContext, useContext } from "react";
import svgPaths from "./svg-v68fn0yc73";
import imgProjectCard from "figma:asset/eecd53d4c7e30b558274726be0ca4e9a5028f173.png";
import imgProjectCard1 from "figma:asset/1bdc70e7c75407d99d0c2cbbbd3c1acb288500bc.png";
import imgContainer from "figma:asset/4b8e9ecccfdd862903ec0a59b5e7dd473e9f0e82.png";

type ProjectTab = "work" | "personal";
type SectionTab = "work" | "about" | "process" | "contact";

const PROJECT_TAB_DEFAULT: ProjectTab = "work";
const SECTION_TAB_DEFAULT: SectionTab = "work";
const SECTION_IDS: SectionTab[] = ["work", "about", "process", "contact"];
const DESIGN_WIDTH = 1341;
const HEADER_OFFSET = 88;

const ProjectTabContext = createContext<{ activeProjectTab: ProjectTab; setActiveProjectTab: (t: ProjectTab) => void }>({
  activeProjectTab: PROJECT_TAB_DEFAULT,
  setActiveProjectTab: () => {},
});

const SectionTabContext = createContext<{ activeSection: SectionTab; setActiveSection: (t: SectionTab) => void }>({
  activeSection: SECTION_TAB_DEFAULT,
  setActiveSection: () => {},
});

function scrollTo(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

function Container() {
  return <div className="absolute h-[700px] left-0 opacity-4 top-0 w-[1341px]" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 0%)" }} data-name="Container" />;
}

function Container1() {
  return <div className="absolute left-[708.05px] rounded-[16777200px] size-[700px] top-[-164.2px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 700 700\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -49.497 -49.497 0 350 350)\\'><stop stop-color=\\'rgba(245,158,11,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Container" />;
}

function Container2() {
  return <div className="absolute left-[-134.09px] rounded-[16777200px] size-[600px] top-[713.6px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 600 600\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -42.426 -42.426 0 300 300)\\'><stop stop-color=\\'rgba(13,148,136,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Container" />;
}

function Text() {
  return <div className="bg-[#0d9488] opacity-51 rounded-[16777200px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] tracking-[1.2px] uppercase whitespace-nowrap">Available for work</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] h-[34px] items-center left-[1075.8px] px-[17px] py-[9px] rounded-[16777200px] top-[96px] w-[201.203px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[112.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f59e0b] text-[12px] tracking-[3px] uppercase whitespace-nowrap">UX Designer</p>
      </div>
    </div>
  );
}

function Text3() {
  return <div className="bg-[rgba(245,158,11,0.4)] h-px shrink-0 w-[32px]" data-name="Text" />;
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[126px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] tracking-[1.2px] uppercase whitespace-nowrap">Based in Bengaluru</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[16px] items-center left-0 top-0 w-[1232px]" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container7() {
  return <div className="blur-[64px] h-[778px] w-[682px]" style={{ backgroundImage: "linear-gradient(228.762deg, rgba(255, 107, 107, 0.1) 0%, rgba(0, 0, 0, 0) 100%)" }} data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[93.609px] left-[319px] top-[254px] w-[576px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[31.2px] left-[288px] text-[19.2px] text-[rgba(255,255,255,0.55)] text-center top-0 w-[576px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I design enterprise and clinical software where the cost of a confusing interaction is never just a UX metric. State, logic, and consequence — made visible.
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[362.063px] left-0 top-[64px] w-[1232px]" data-name="Heading 1">
      <div className="-translate-x-1/2 absolute font-['Crimson_Pro:SemiBold',sans-serif] font-semibold leading-[0] left-[597.5px] text-[0px] text-center text-white top-[-1px] w-[1195px]">
        <p className="mb-0 text-[96px]">
          <span className="leading-[120.69px]">{`Designing `}</span>
          <span className="leading-[120.69px] text-[#f59e0b]">systems</span>
          <span className="leading-[120.69px]">{` of`}</span>
        </p>
        <p className="leading-[120.69px] text-[96px]">behaviour.</p>
      </div>
      <div className="absolute flex h-[682px] items-center justify-center left-[509px] top-[-77px] w-[778px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Container7 />
        </div>
      </div>
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[130.18px] size-[16px] top-[17px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 3.33333V12.6667" id="Vector" stroke="var(--stroke-0, #0A2540)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc0e6f00} id="Vector_2" stroke="var(--stroke-0, #0A2540)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f59e0b] h-[50px] left-0 rounded-[16777200px] top-0 w-[174.18px] cursor-pointer hover:bg-[#e8940a] transition-colors" data-name="Button" onClick={() => scrollTo("work")}>
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] left-[73.5px] text-[#0a2540] text-[14px] text-center top-[14.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        View My Work
      </p>
      <Icon />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[50px] items-center left-[190.18px] px-[29px] py-[15px] rounded-[16777200px] top-0 w-[119.094px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors" data-name="Button" onClick={() => scrollTo("about")}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        About Me
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[50px] left-[454px] top-[506px] w-[1232px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container10() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[8px] rounded-[16777200px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start justify-center left-[578px] pb-px pt-[7px] px-[9px] rounded-[16777200px] top-[604px] w-[20px] cursor-pointer animate-bounce" data-name="Container" onClick={() => scrollTo("skills")}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Container10 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[838.672px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Heading />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[800px] items-start left-[30px] pt-[128px] px-[24px] top-0 w-[1280px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[334px] px-[13px] py-[7px] rounded-[16777200px] top-[563px] w-[141.953px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,218,0.52)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(209,213,218,0.52)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enterprise SaaS
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[491px] px-[13px] py-[7px] rounded-[16777200px] top-[563px] w-[102.891px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,218,0.52)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(209,213,218,0.52)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI/ML UX
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[609px] px-[13px] py-[7px] rounded-[16777200px] top-[563px] w-[117px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,218,0.52)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(209,213,218,0.52)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        B2B Products
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[741px] px-[13px] py-[7px] rounded-[16777200px] top-[563px] w-[125.414px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,218,0.52)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(209,213,218,0.52)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Design Systems
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[881px] px-[13px] py-[7px] rounded-[16777200px] top-[563px] w-[125.414px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,218,0.52)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(209,213,218,0.52)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI Interfaces
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[334px] top-[563px]">
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function HeroSection() {
  return (
    <div id="hero" className="bg-[#0a2540] h-[788px] overflow-clip relative shrink-0 w-full" data-name="HeroSection">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Group1 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[1232px]" data-name="Text">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#f59e0b] text-[12px] tracking-[2.4px] uppercase">{`Skills & Expertise`}</p>
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#f59e0b] h-[2px] left-0 top-[32px] w-[48px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="absolute h-[72px] left-0 top-[66px] w-[1232px]" data-name="Heading 2">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[72px] left-0 text-[#0a2540] text-[48px] top-0 whitespace-nowrap">-At a glance</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[138px] relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Container13 />
      <Heading1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[24.5px] top-[29px] w-[344.664px]" data-name="Heading 4">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a2540] text-[32px] top-0 whitespace-nowrap">4yrs</p>
    </div>
  );
}

function Text11() {
  return <div className="absolute h-[16px] left-[140.5px] top-[154px] w-[3.914px]" data-name="Text" />;
}

function Container15() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[207.5px] left-0 rounded-[12px] top-0 w-[394.664px]" data-name="Container">
      <Heading3 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-[24.5px] text-[#475569] text-[14px] top-[71px] w-[345px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Designing enterprise SaaS end-to-end — complex workflows, multi-tenant systems, large user bases
      </p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[29.5px] not-italic text-[#94a3b8] text-[12px] top-[168px] tracking-[1.2px] uppercase whitespace-nowrap">B2B</p>
      <Text11 />
      <ul className="absolute block font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] left-[78.5px] not-italic text-[#94a3b8] text-[12px] top-[168px] whitespace-nowrap">
        <li className="list-disc ms-[18px]">
          <span className="leading-[16px]">Role-based</span>
        </li>
      </ul>
      <ul className="absolute block font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[0] left-[190.5px] text-[#f59e0b] text-[12px] top-[168px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="list-disc ms-[18px]">
          <span className="leading-[16px]">High stakes UX</span>
        </li>
      </ul>
      <div className="absolute h-0 left-[24.5px] top-[156px] w-[353px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
            <line id="Line 1" stroke="var(--stroke-0, #E2E8F0)" x2="353" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-1 h-[208px] ml-0 mt-0 relative row-1 w-[394px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-[24.5px] top-[29px] w-[344.664px]" data-name="Heading 4">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a2540] text-[32px] top-0 whitespace-nowrap">AI-native</p>
    </div>
  );
}

function Text12() {
  return <div className="absolute h-[16px] left-[140.5px] top-[146px] w-[3.914px]" data-name="Text" />;
}

function Group2() {
  return (
    <div className="absolute contents left-[24.5px] text-[12px] top-[168px] whitespace-nowrap">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[25.5px] not-italic text-[#94a3b8] top-[169px] tracking-[1.2px]">Agentic flows</p>
      <ul className="absolute block font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] left-[142.5px] not-italic text-[#94a3b8] top-[169px]">
        <li className="list-disc ms-[18px]">
          <span className="leading-[16px]">Error States</span>
        </li>
      </ul>
      <ul className="absolute block font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[0] left-[252.5px] text-[#0d9488] top-[169px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="list-disc ms-[18px]">
          <span className="leading-[16px]">Confidence UI</span>
        </li>
      </ul>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[207.5px] left-0 rounded-[12px] top-0 w-[394.664px]" data-name="Container">
      <Heading4 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-[24.5px] text-[#475569] text-[14px] top-[71px] w-[345px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shipped embedded AI features from discovery to post-launch — not just screens, but the trust laye · error states · confidence UI
      </p>
      <Text12 />
      <Group2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="col-1 h-[208px] ml-[435px] mt-0 relative row-1 w-[394px]" data-name="Container">
      <Container17 />
      <div className="absolute h-0 left-[25.5px] top-[157px] w-[353px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
            <line id="Line 1" stroke="var(--stroke-0, #E2E8F0)" x2="353" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[24.5px] top-[29px] w-[344.664px]" data-name="Heading 4">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a2540] text-[32px] top-0 whitespace-nowrap">Systems</p>
    </div>
  );
}

function Text13() {
  return <div className="absolute h-[16px] left-[170.5px] top-[162px] w-[3.914px]" data-name="Text" />;
}

function Container19() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[207.5px] left-0 rounded-[12px] top-0 w-[394.664px]" data-name="Container">
      <Heading5 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-[24.5px] text-[#475569] text-[14px] top-[71px] w-[345px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Built design systems and component libraries adopted across orgs at scale
      </p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[24.5px] not-italic text-[#94a3b8] text-[12px] top-[168px] tracking-[1.2px] whitespace-nowrap">Tokens</p>
      <Text13 />
      <ul className="absolute block font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] left-[94.5px] not-italic text-[#94a3b8] text-[12px] top-[168px] whitespace-nowrap">
        <li className="list-disc ms-[18px]">
          <span className="leading-[16px]">Patterns</span>
        </li>
      </ul>
      <ul className="absolute block font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[0] left-[186.5px] text-[#132741] text-[12px] top-[168px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="list-disc ms-[18px]">
          <span className="leading-[16px]">{`Cross-team adoption `}</span>
        </li>
      </ul>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-1 h-[208px] ml-[870px] mt-0 relative row-1 w-[394px]" data-name="Container">
      <Container19 />
      <div className="absolute h-0 left-[25.5px] top-[157px] w-[353px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
            <line id="Line 1" stroke="var(--stroke-0, #E2E8F0)" x2="353" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container14 />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[771.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[24px] relative size-full">
        <Container12 />
        <Group />
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div id="skills" className="bg-[#f8fafc] h-[602px] relative shrink-0 w-full" data-name="SkillsSection">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[30.5px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[1232px]" data-name="Text">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#f59e0b] text-[12px] tracking-[2.4px] uppercase">Selected Work</p>
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-[#f59e0b] h-[2px] left-0 top-[32px] w-[48px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[336.234px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[72px] left-0 text-[#0a2540] text-[48px] top-0 whitespace-nowrap">Projects that matter</p>
      </div>
    </div>
  );
}

function Container24() {
  const { activeProjectTab, setActiveProjectTab } = useContext(ProjectTabContext);
  return (
    <div className="bg-[#f1f5f9] h-[44px] relative rounded-[16777200px] shrink-0 w-[214.711px] flex items-center p-[4px] cursor-pointer" data-name="Container">
      <div
        className={`h-[36px] rounded-[16777200px] flex items-center justify-center px-[16px] z-10 transition-colors ${activeProjectTab === "work" ? "bg-[#0a2540]" : ""}`}
        onClick={() => setActiveProjectTab("work")}
      >
        <p className={`font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center whitespace-nowrap ${activeProjectTab === "work" ? "text-white" : "text-[#64748b]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          Work
        </p>
      </div>
      <div
        className={`h-[36px] rounded-[16777200px] flex items-center justify-center px-[16px] z-10 transition-colors ${activeProjectTab === "personal" ? "bg-[#0a2540]" : ""}`}
        onClick={() => setActiveProjectTab("personal")}
      >
        <p className={`font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center whitespace-nowrap ${activeProjectTab === "personal" ? "text-white" : "text-[#64748b]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          Personal Projects
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-end justify-between left-0 top-[66px] w-[1232px]" data-name="Container">
      <Heading2 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[138px] relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-gradient-to-b from-[rgba(10,37,64,0.1)] h-[240px] left-0 opacity-60 to-[rgba(10,37,64,0.55)] top-0 w-[544px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2b283480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.pbc77700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">NDA</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[6px] h-[24px] items-center left-[468px] px-[12px] py-[4px] rounded-[16777200px] top-[9px] w-[63.602px]" data-name="Container">
      <Icon1 />
      <Text16 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[183.602px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[12px] not-italic text-[12px] text-white top-[5.5px] tracking-[1.2px] uppercase whitespace-nowrap">Enterprise UX · SAP</p>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="h-[240px] overflow-clip relative shrink-0 w-full" data-name="ProjectCard">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[165.37%] left-[-0.05%] max-w-none top-[-10.02%] w-full" src={imgProjectCard} />
      </div>
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[296.031px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a2540] text-[19.2px] top-[-0.5px] whitespace-nowrap">Introducing Edit to a Read-Only World</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start justify-between left-[28px] pr-[37.969px] top-[28px] w-[334px]" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[113.75px] left-[28px] top-[64px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-1px] w-[486px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Designed the end-to-end editing experience for SAP Project Scheduling — a capability that did not previously exist. Introduced selection-driven editing, intentional friction patterns, and a hierarchy-anchored split-screen model.
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#94a3b8] text-[12px] top-0 tracking-[1.2px] uppercase w-[100px]">Lead UX Designer</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a2540] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">2025-26</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[32px] relative shrink-0 w-[164.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text17 />
        <Text18 />
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[40px] relative rounded-[16777200px] shrink-0 w-[169.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#f59e0b] text-[12px] top-[4px] w-[150px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Shipped · 3 → 0 edit-scope errors
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[57px] items-center justify-between left-[28px] pt-[17px] top-[150px] w-[464px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container31 />
      <Text20 />
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="h-[255px] relative shrink-0 w-full" data-name="ProjectCard">
      <Container29 />
      <Paragraph1 />
      <Container30 />
    </div>
  );
}

function Article() {
  return (
    <div className="absolute bg-white h-[540px] left-[0.5px] rounded-[16px] top-[-0.5px] w-[546px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ProjectCard />
        <ProjectCard1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-gradient-to-b from-[rgba(10,37,64,0.1)] h-[240px] left-0 opacity-60 to-[rgba(10,37,64,0.55)] top-0 w-[544px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2b283480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.pbc77700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">NDA</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[6px] h-[24px] items-center left-[471px] px-[12px] py-[4px] rounded-[16777200px] top-[9px] w-[63.602px]" data-name="Container">
      <Icon2 />
      <Text21 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[267.602px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[12px] not-italic text-[12px] text-white top-[5.5px] tracking-[1.2px] uppercase whitespace-nowrap">Healthcare SaaS · AI-embedded</p>
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="h-[240px] overflow-clip relative shrink-0 w-full" data-name="ProjectCard">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProjectCard1} />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex h-[33px] items-start justify-between left-[28px] top-[28px] w-[472px]" data-name="Container">
      <p className="font-['Crimson_Pro:Medium',sans-serif] font-medium h-[48px] leading-[24px] relative shrink-0 text-[#0a2540] text-[19.2px] w-[472px]">Redesigning a Radiology Platform from theGround Up</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[32px] relative shrink-0 w-[78.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#94a3b8] text-[12px] top-0 tracking-[1.2px] uppercase w-[79px]">UX Designer</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a2540] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">2025</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text22 />
        <Text23 />
        <Text24 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[40px] relative rounded-[16777200px] shrink-0 w-[190.477px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] left-[10px] text-[#0d9488] text-[12px] top-[4px] w-[171px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          6 months · 5 user roles redesigned
        </p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex h-[57px] items-center justify-between left-0 pt-[17px] top-[79px] w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container37 />
      <Text25 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[113.75px] left-[28px] top-[88px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-24px] w-[486px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        End-to-end revamp of a clinical reporting and workflow platform. Designed for five user roles — radiologists, QA reviewers, ops staff, hospital admins, and dev teams — through a single coherent architecture anchored on the study.
      </p>
      <Container36 />
    </div>
  );
}

function ProjectCard3() {
  return (
    <div className="h-[306.75px] relative shrink-0 w-full" data-name="ProjectCard">
      <Container35 />
      <Paragraph2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2b283480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.pbc77700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">NDA</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[6px] h-[24px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0 w-[63.602px]" data-name="Container">
      <Icon3 />
      <Text26 />
    </div>
  );
}

function Article1() {
  return (
    <div className="absolute bg-white h-[540px] left-[581.5px] rounded-[16px] top-[-0.5px] w-[546px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ProjectCard2 />
        <ProjectCard3 />
        <Container38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PersonalProjectCard() {
  return (
    <div className="absolute bg-white h-[540px] left-[0.5px] rounded-[16px] top-[-0.5px] w-[546px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="h-[240px] overflow-clip relative shrink-0 w-full">
          <img src="https://images.unsplash.com/photo-1678330197184-125080fa5eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbnN0YWdyYW0lMjAzRCUyMHRleHQlMjBsb2dvJTIwc2lnbnxlbnwxfHx8fDE3NzY0MTA3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Reimagining Instagram Saves" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[16px]">
            <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic text-white text-[11px] tracking-[1.2px] uppercase">UX Case Study · Social</p>
            <div className="bg-white rounded-[6px] px-[8px] py-[4px] flex items-center gap-[6px]">
              <svg width="14" height="14" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg"><g><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" fill="#0a2540"/><path d="M911.56 296.36c0 154.06-65.89 278.87-147.17 278.87s-147.17-124.81-147.17-278.87S683.11 17.49 764.39 17.49s147.17 124.8 147.17 278.87" fill="#0a2540"/><path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" fill="#0a2540"/></g></svg>
              <span className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[11px] text-[#0a2540]" style={{ fontVariationSettings: "'wdth' 100" }}>Medium</span>
            </div>
          </div>
        </div>
        <div className="pt-[28px] px-[28px] flex flex-col gap-[12px] w-full">
          <p className="font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[24px] text-[#0a2540] text-[19.2px]">Reimagining Instagram Saves</p>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] text-[#475569] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            From passive archives 📦 to active inspiration hubs 🌱 — a deep-dive into why your saved posts disappear into a black hole and how a rethink of the Saves feature could turn Instagram into a genuine creative tool.
          </p>
        </div>
        <div className="absolute bottom-[28px] left-[28px] right-[28px] flex flex-col gap-[12px]">
          <div className="flex items-center gap-[16px] pt-[17px] border-t border-[#f1f5f9]">
            <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">UX Writing & Research · 2024</p>
            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] text-[#0d9488] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Published on Medium
            </p>
          </div>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[6px] cursor-pointer hover:opacity-70 transition-opacity">
            <span className="text-[13px]">📖</span>
            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] text-[#475569] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Read on Medium ↗
            </p>
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PersonalProjectCard2() {
  return (
    <div className="absolute bg-white h-[540px] left-[581.5px] rounded-[16px] top-[-0.5px] w-[546px]" data-name="Article">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="h-[240px] overflow-clip relative shrink-0 w-full">
          <img src="https://images.unsplash.com/photo-1677296860174-5369253e7896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwZnJpZGdlJTIwZm9vZCUyMGxlZnRvdmVycyUyMGluc2lkZXxlbnwxfHx8fDE3NzY0MTA3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Fridge Feature UX Case Study" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[16px]">
            <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic text-white text-[11px] tracking-[1.2px] uppercase">UX Case Study · Product</p>
            <div className="bg-white rounded-[6px] px-[8px] py-[4px] flex items-center gap-[6px]">
              <svg width="14" height="14" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg"><g><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" fill="#0a2540"/><path d="M911.56 296.36c0 154.06-65.89 278.87-147.17 278.87s-147.17-124.81-147.17-278.87S683.11 17.49 764.39 17.49s147.17 124.8 147.17 278.87" fill="#0a2540"/><path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" fill="#0a2540"/></g></svg>
              <span className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[11px] text-[#0a2540]" style={{ fontVariationSettings: "'wdth' 100" }}>Medium</span>
            </div>
          </div>
        </div>
        <div className="pt-[28px] px-[28px] flex flex-col gap-[12px] w-full">
          <p className="font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[24px] text-[#0a2540] text-[19.2px]">Can a Unique Fridge Feature Transform How You Manage Leftovers?</p>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] text-[#475569] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ever find yourself digging through a cluttered fridge, struggling to locate leftovers, or forgetting to finish off that delicious curry? This case study explores a speculative fridge UX feature designed to solve the everyday chaos of leftover management.
          </p>
        </div>
        <div className="absolute bottom-[28px] left-[28px] right-[28px] flex flex-col gap-[12px]">
          <div className="flex items-center gap-[16px] pt-[17px] border-t border-[#f1f5f9]">
            <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">UX Research & Concept · 2024</p>
            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] text-[#f59e0b] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Published on Medium
            </p>
          </div>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[6px] cursor-pointer hover:opacity-70 transition-opacity">
            <span className="text-[13px]">📖</span>
            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] text-[#475569] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Read on Medium ↗
            </p>
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container25() {
  const { activeProjectTab } = useContext(ProjectTabContext);
  return (
    <div className="h-[592px] relative shrink-0 w-full" data-name="Container">
      {activeProjectTab === "work" ? (
        <>
          <Article />
          <Article1 />
        </>
      ) : (
        <>
          <PersonalProjectCard />
          <PersonalProjectCard2 />
        </>
      )}
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[734.75px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[24px] relative size-full">
        <Container21 />
        <Container25 />
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <div id="work" className="bg-white h-[855px] relative shrink-0 w-full" data-name="WorkSection">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[30.5px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[1232px]" data-name="Text">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#f59e0b] text-[12px] tracking-[2.4px] uppercase">About Me</p>
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[#f59e0b] h-[2px] left-0 top-[32px] w-[48px]" data-name="Container" />;
}

function Container40() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Container">
      <Text27 />
      <Container41 />
    </div>
  );
}

function Container45() {
  return <div className="absolute bg-[#f59e0b] h-[4px] left-0 top-[456px] w-[368px]" data-name="Container" />;
}

function Container44() {
  return (
    <div className="h-[460px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgContainer} />
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col h-[608px] items-start left-0 top-0 w-[368px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[60px] relative text-[#0a2540] text-[48px] w-full">{`I design complex systems for people who don't have time for them to be confusing.`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[29.25px] relative text-[#475569] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`I'm a UX designer with five years of experience working at the intersection of enterprise software, clinical tools, and systems that carry real stakes. My background spans healthcare SaaS, financial services, and large-scale SAP product design.`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[29.25px] relative text-[#475569] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`I spend a lot of time thinking about state — what the user is looking at, what they don't know yet, and what happens when they take an action they didn't fully intend. Most design problems I've worked on aren't about missing features. They're about missing clarity.`}</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[29.25px] relative text-[#475569] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        I studied Industrial product design — My background is in industrial product design — which taught me to design with constraints, not around them. I brought that systems-first thinking into digital products, and it shaped how I approach enterprise UX: as an interconnected system with real human costs when it fails, not a collection of screens.
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Crimson_Pro:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a2540] text-[40px] top-[-0.5px] whitespace-nowrap">3+</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Years designing</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-0 top-[32px] w-[250.664px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Crimson_Pro:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a2540] text-[40px] top-[-0.5px] whitespace-nowrap">3</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Industries</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[274.66px] top-[32px] w-[250.664px]" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Crimson_Pro:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a2540] text-[40px] top-[-0.5px] whitespace-nowrap">4+</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Products shipped</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[549.33px] top-[32px] w-[250.672px]" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container47() {
  return (
    <div className="border-[#e2e8f0] border-b border-solid border-t h-[126px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[30px] left-0 text-[#0a2540] text-[20px] top-[-0.5px] whitespace-nowrap">What I believe about design</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 p-[2px] rounded-[16777200px] size-[24px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-2 border-[#f59e0b] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">1</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Crimson_Pro:Regular',sans-serif] font-normal leading-[24px] relative text-[#0a2540] text-[16px]">Behaviour over beauty</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative text-[#475569] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`An interaction that looks stunning but confuses people isn't good design. I start with what the user is trying to do and work backwards to the visual.`}</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[756px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Container53 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 p-[2px] rounded-[16777200px] size-[24px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-2 border-[#f59e0b] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">2</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Crimson_Pro:Regular',sans-serif] font-normal leading-[24px] relative text-[#0a2540] text-[16px]">Honesty about constraints</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative text-[#475569] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Half-built features that behave unpredictably are worse than missing ones. I name the constraints, document the compromises, and make the case for what didn't ship.`}</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[756px]" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <Container55 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 p-[2px] rounded-[16777200px] size-[24px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-2 border-[#f59e0b] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">3</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Crimson_Pro:Regular',sans-serif] font-normal leading-[24px] relative text-[#0a2540] text-[16px]">Design rationale, not just output</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative text-[#475569] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Every artefact I deliver includes the thinking behind it — annotated flows, state diagrams, and written rationale. Designers hand off reasoning, not just pixels.
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[756px]" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Container57 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container52 />
      <Container54 />
      <Container56 />
    </div>
  );
}

function Container42() {
  return (
    <div className="min-h-[970.5px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[432px] top-0 w-[800px]">
        <Heading7 />
        <Container46 />
        <Container47 />
        <Container51 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="min-h-[1068.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[24px] relative size-full">
        <Container40 />
        <Container42 />
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about" className="bg-[#f8fafc] min-h-[1245px] relative shrink-0 w-full" data-name="AboutSection">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[30.5px] relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-0 w-[1232px]" data-name="Text">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#f59e0b] text-[12px] tracking-[2.4px] uppercase">My Process</p>
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[#f59e0b] h-[2px] left-[24px] top-[32px] w-[48px]" data-name="Container" />;
}

function Heading9() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[72px] left-0 text-[#0a2540] text-[48px] top-0 whitespace-nowrap">How I work through a problem</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[153px] items-start left-[24px] pr-[560px] top-[66px] w-[1232px]" data-name="Container">
      <Heading9 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[65px] leading-[32.5px] relative shrink-0 text-[#475569] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Six phases. Each one ends with something specific — not a feeling of progress, but an artefact that proves the thinking is done.
      </p>
    </div>
  );
}

function Container63() {
  return <div className="bg-[#0d9488] h-[3px] shrink-0 w-full" data-name="Container" />;
}

function Text32() {
  return (
    <div className="h-[40px] relative shrink-0 w-[43.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#0a2540] text-[36px] top-[-0.5px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#0d9488] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[28px] top-[28px] w-[336.664px]" data-name="Container">
      <Text32 />
      <Container66 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[88px] w-[336.664px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#0d9488] text-[12px] tracking-[1.2px] uppercase">Discover</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[27.594px] left-[28px] top-[112px] w-[336.664px]" data-name="Heading 3">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[27.6px] left-0 text-[#0a2540] text-[18.4px] top-[-0.5px] whitespace-nowrap">Understand the system, not just the user</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[90px] left-[28.5px] top-[151.5px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-1px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Stakeholder interviews, workflow shadowing, and system audits. For AI projects: mapping where the model intersects the user, what they already distrust, and what they're unknowingly delegating.`}</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Outputs</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[0.5px] px-[11px] py-[5px] rounded-[16777200px] top-[-0.5px] w-[175px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Intent Mapping + Trust audit
      </p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[154.5px] px-[11px] py-[5px] rounded-[16777200px] top-[33.5px] w-[92.133px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        System audit
      </p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[189.5px] px-[11px] py-[5px] rounded-[16777200px] top-[-0.5px] w-[97.914px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Journey maps
      </p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[143.805px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stakeholder alignment
      </p>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text33 />
      <Text34 />
      <Text35 />
      <Text36 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[109px] items-start left-[28.5px] pt-[21px] top-[261.5px] w-[336.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph20 />
      <Container68 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[399px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Paragraph18 />
      <Heading10 />
      <Paragraph19 />
      <Container67 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-white h-[403px] left-[0.5px] rounded-[16px] top-[-0.5px] w-[394px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container63 />
        <Container64 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container70() {
  return <div className="bg-[#f59e0b] h-[3px] shrink-0 w-full" data-name="Container" />;
}

function Text37() {
  return (
    <div className="h-[40px] relative shrink-0 w-[43.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#0a2540] text-[36px] top-[-0.5px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_534)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_534">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#f59e0b] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[28px] top-[28px] w-[336.664px]" data-name="Container">
      <Text37 />
      <Container73 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[88px] w-[336.664px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#f59e0b] text-[12px] tracking-[1.2px] uppercase">Define</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[27.594px] left-[28px] top-[112px] w-[336.664px]" data-name="Heading 3">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[27.6px] left-0 text-[#0a2540] text-[18.4px] top-[-0.5px] whitespace-nowrap">Frame the problem with constraints visible</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[113.75px] left-[28px] top-[151.59px] w-[336.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-1px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Problem framing alongside — not after — technical and business constraints. Success metrics defined upfront: what does adoption look like, and what happens when the AI is wrong?
      </p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Outputs</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-0 w-[125.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Problem statement
      </p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[133.56px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[115.172px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Constraint matrix
      </p>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[114.344px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Design principles
      </p>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[122.34px] px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[106.758px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Success criteria
      </p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Text39 />
      <Text40 />
      <Text41 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[109px] items-start left-[28px] pt-[21px] top-[289.34px] w-[336.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph23 />
      <Container75 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[426.344px] relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Paragraph21 />
      <Heading11 />
      <Paragraph22 />
      <Container74 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-white h-[431.344px] left-[418.66px] rounded-[16px] top-0 w-[394.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container70 />
        <Container71 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container77() {
  return <div className="bg-[#dc2626] h-[3px] shrink-0 w-full" data-name="Container" />;
}

function Text42() {
  return (
    <div className="h-[40px] relative shrink-0 w-[43.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#0a2540] text-[36px] top-[-0.5px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pdf995c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 15H12.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 18.3333H11.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#dc2626] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[28px] top-[28px] w-[336.664px]" data-name="Container">
      <Text42 />
      <Container80 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[88px] w-[336.664px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#dc2626] text-[12px] tracking-[1.2px] uppercase">Ideate</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[27.594px] left-[28px] top-[112px] w-[336.664px]" data-name="Heading 3">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[27.6px] left-0 text-[#0a2540] text-[18.4px] top-[-0.5px] whitespace-nowrap">Explore before committing</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[113.75px] left-[28px] top-[151.59px] w-[336.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-1px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`I work in low-fidelity until the interaction logic is right. Sketches, flow maps, and state diagrams come before any screen design. This phase ends when I can explain every decision in a sentence — if I can't, the thinking isn't done.`}</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Outputs</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-0 w-[71.133px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sketches
      </p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[79.13px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[100.469px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Flow diagrams
      </p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[187.6px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[82.867px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        State maps
      </p>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[136.625px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Comparative analysis
      </p>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text43 />
      <Text44 />
      <Text45 />
      <Text46 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[109px] items-start left-[28px] pt-[21px] top-[289.34px] w-[336.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph26 />
      <Container82 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[426.344px] relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Paragraph24 />
      <Heading12 />
      <Paragraph25 />
      <Container81 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-white h-[431.344px] left-[837.33px] rounded-[16px] top-0 w-[394.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container77 />
        <Container78 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container84() {
  return <div className="bg-[#0a2540] h-[3px] shrink-0 w-full" data-name="Container" />;
}

function Text47() {
  return (
    <div className="h-[40px] relative shrink-0 w-[43.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#0a2540] text-[36px] top-[-0.5px] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p34233600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p38033800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2043ad00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2e387b20} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#0a2540] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[28px] top-[28px] w-[336.664px]" data-name="Container">
      <Text47 />
      <Container87 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[88px] w-[336.664px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#0a2540] text-[12px] tracking-[1.2px] uppercase">Design</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[27.594px] left-[28px] top-[112px] w-[336.664px]" data-name="Heading 3">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[27.6px] left-0 text-[#0a2540] text-[18.4px] top-[-0.5px] whitespace-nowrap">Patterns that survive the edge cases</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[113.75px] left-[28px] top-[151.59px] w-[336.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-1px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Screens are the output, not the work. Every component choice, spacing decision, and interaction pattern has a reason attached. I annotate as I go — because a designer who can't explain a decision shouldn't have made it.`}</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Outputs</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-0 w-[84.188px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wireframes
      </p>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[92.19px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[96.969px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hi-fi mockups
      </p>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[197.16px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[80.695px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Prototypes
      </p>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[112.484px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Annotated specs
      </p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text48 />
      <Text49 />
      <Text50 />
      <Text51 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[109px] items-start left-[28px] pt-[21px] top-[289.34px] w-[336.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph29 />
      <Container89 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[426.344px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Paragraph27 />
      <Heading13 />
      <Paragraph28 />
      <Container88 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute bg-white h-[431.344px] left-0 rounded-[16px] top-[455.34px] w-[394.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container84 />
        <Container85 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container91() {
  return <div className="bg-[#0d9488] h-[3px] shrink-0 w-full" data-name="Container" />;
}

function Text52() {
  return (
    <div className="h-[40px] relative shrink-0 w-[43.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#0a2540] text-[36px] top-[-0.5px] whitespace-nowrap">05</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24daac00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5.3775 12.5H14.6225" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.08333 1.66667H12.9167" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#0d9488] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[28px] top-[28px] w-[336.664px]" data-name="Container">
      <Text52 />
      <Container94 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[88px] w-[336.664px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#0d9488] text-[12px] tracking-[1.2px] uppercase">Test</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[27.594px] left-[28px] top-[112px] w-[336.664px]" data-name="Heading 3">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[27.6px] left-0 text-[#0a2540] text-[18.4px] top-[-0.5px] whitespace-nowrap">Validate with real users</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[113.75px] left-[28px] top-[151.59px] w-[336.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-1px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Testing isn't the end of the process — it's information. I design sessions around specific hypotheses, not general usability. A session that confirms the design works is less valuable than one that shows exactly where it doesn't.`}</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Outputs</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-0 w-[118.078px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Usability sessions
      </p>
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[126.08px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[92.844px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Task analysis
      </p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[119.539px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Error rate tracking
      </p>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[127.54px] px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[88.219px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Iteration log
      </p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text53 />
      <Text54 />
      <Text55 />
      <Text56 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[109px] items-start left-[28px] pt-[21px] top-[289.34px] w-[336.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph32 />
      <Container96 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[426.344px] relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Paragraph30 />
      <Heading14 />
      <Paragraph31 />
      <Container95 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-white h-[431.344px] left-[418.66px] rounded-[16px] top-[455.34px] w-[394.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container91 />
        <Container92 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container98() {
  return <div className="bg-[#f59e0b] h-[3px] shrink-0 w-full" data-name="Container" />;
}

function Text57() {
  return (
    <div className="h-[40px] relative shrink-0 w-[43.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#0a2540] text-[36px] top-[-0.5px] whitespace-nowrap">06</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32186a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3158cb00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pbb8dfc0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p30d40500} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#f59e0b] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[28px] top-[28px] w-[336.664px]" data-name="Container">
      <Text57 />
      <Container101 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[88px] w-[336.664px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#f59e0b] text-[12px] tracking-[1.2px] uppercase">Deliver</p>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[27.594px] left-[28px] top-[112px] w-[336.664px]" data-name="Heading 3">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[27.6px] left-0 text-[#0a2540] text-[18.4px] top-[-0.5px] whitespace-nowrap">Hand off the thinking, not just the pixels</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[113.75px] left-[28px] top-[151.59px] w-[336.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#475569] text-[14px] top-[-1px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        A design handoff is only done when a developer can build it without guessing. I deliver interaction flows, state documentation, edge case coverage, and a written brief for every screen. Then I stay in the room through build.
      </p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">Outputs</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-0 w-[99.203px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Handoff specs
      </p>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[107.2px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[104.789px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Edge case docs
      </p>
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-[219.99px] px-[11px] py-[5px] rounded-[16777200px] top-0 w-[106.086px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dev QA support
      </p>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start left-0 px-[11px] py-[5px] rounded-[16777200px] top-[34px] w-[124.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Post-launch review
      </p>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Text58 />
      <Text59 />
      <Text60 />
      <Text61 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[109px] items-start left-[28px] pt-[21px] top-[289.34px] w-[336.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph35 />
      <Container103 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[426.344px] relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <Paragraph33 />
      <Heading15 />
      <Paragraph34 />
      <Container102 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-white h-[431.344px] left-[837.33px] rounded-[16px] top-[455.34px] w-[394.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container98 />
        <Container99 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[886.688px] left-[24px] top-[299px] w-[1232px]" data-name="Container">
      <Container62 />
      <Container69 />
      <Container76 />
      <Container83 />
      <Container90 />
      <Container97 />
    </div>
  );
}

function Quote() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Quote">
      <p className="-translate-x-1/2 absolute font-['Crimson_Pro:Regular',sans-serif] font-normal leading-[45px] left-[576.13px] text-[36px] text-center text-white top-[-0.5px] whitespace-nowrap">{`"Map before you redesign. Feedback loops need to be designed too."`}</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-[575.59px] not-italic text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[-0.5px] tracking-[1.4px] uppercase whitespace-nowrap">Two principles I keep coming back to</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-[#0a2540] content-stretch flex flex-col gap-[16px] h-[161px] items-start left-[24px] pt-[40px] px-[40px] rounded-[16px] top-[1249.69px] w-[1232px]" data-name="Container">
      <Quote />
      <Paragraph36 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[1410.688px] relative shrink-0 w-full" data-name="Container">
      <Text31 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container104 />
    </div>
  );
}

function ProcessSection() {
  return (
    <div id="process" className="bg-white h-[1613px] relative shrink-0 w-full" data-name="ProcessSection">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[30.5px] relative size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Container105() {
  return <div className="absolute h-[1166.75px] left-0 opacity-4 top-0 w-[1341px]" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 0%)" }} data-name="Container" />;
}

function Container106() {
  return <div className="absolute left-[841px] rounded-[16777200px] size-[500px] top-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 500 500\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -35.355 -35.355 0 250 250)\\'><stop stop-color=\\'rgba(245,158,11,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Container" />;
}

function Text62() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-0 w-[1232px]" data-name="Text">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#f59e0b] text-[12px] tracking-[2.4px] uppercase">Contact Me</p>
    </div>
  );
}

function Container108() {
  return <div className="absolute bg-[#f59e0b] h-[2px] left-[24px] top-[32px] w-[48px]" data-name="Container" />;
}

function Heading16() {
  return (
    <div className="absolute h-[80px] left-[24px] top-[66px] w-[1232px]" data-name="Heading 2">
      <p className="absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[80px] left-0 text-[64px] text-white top-[-1px] whitespace-nowrap">{`Let's work together.`}</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[97.5px] left-[24px] top-[170px] w-[576px]" data-name="Paragraph">
      <div className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[20px] text-[rgba(255,255,255,0.55)] top-0 w-[576px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32.5px] mb-0">{`Whether you have a complex system that needs untangling, a product that's outgrown its original design, or an enterprise tool that still feels like 2012 — I'd like to hear about it.`}</p>
        <p className="leading-[32.5px] mb-0">​</p>
        <p className="leading-[32.5px]">{`I'm looking for teams working on enterprise AI products where design has a real seat at the table — not a layer applied at the end. Full-time preferred, open to contract.`}</p>
      </div>
    </div>
  );
}

function Text63() {
  return <div className="bg-[#0d9488] opacity-70 rounded-[16777200px] shrink-0 size-[10px]" data-name="Text" />;
}

function Text64() {
  return (
    <div className="h-[16px] relative shrink-0 w-[159.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d9488] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Currently available</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Text63 />
      <Text64 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[14px] text-[rgba(255,255,255,0.7)] top-[-1px] w-[426px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Roles I’m Targeting : AI product designer , UI/UX Designer , Product Designer
      </p>
    </div>
  );
}

function Container111() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[121px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container112 />
        <Paragraph38 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15">
            <path d={svgPaths.p2b3c0500} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 6.66345">
            <path d={svgPaths.p38f0cf80} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.35)] tracking-[1.2px] uppercase">Email</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph39 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          indu.cherukumalli555@gmail.com
        </p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[38px] relative shrink-0 w-[172.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text65 />
        <Container115 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[21px] py-[17px] relative size-full">
          <Container114 />
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.5">
            <path d={svgPaths.p21836480} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11.6667">
            <path d={svgPaths.p1a426680} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[8.33%] right-3/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.35)] tracking-[1.2px] uppercase">LinkedIn</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <a className="absolute block font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.7)] top-[-0.5px] whitespace-nowrap" href="https://www.linkedin.com/in/indu-cherukumalli-54022a172" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[20px] underline">www.linkedin.com/in/indu-cherukumalli-54022a172</p>
      </a>
    </div>
  );
}

function Container117() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph40 />
        <Paragraph41 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[38px] relative shrink-0 w-[121.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text66 />
        <Container117 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[21px] py-[17px] relative size-full">
          <Container116 />
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
        <circle cx="5" cy="10" r="3" fill="#F59E0B" />
        <ellipse cx="10.5" cy="10" rx="2.5" ry="5" fill="#F59E0B" fillOpacity="0.85" />
        <ellipse cx="15.75" cy="10" rx="1.75" ry="4" fill="#F59E0B" fillOpacity="0.6" />
      </svg>
    </div>
  );
}

function Text67() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.35)] tracking-[1.2px] uppercase whitespace-nowrap">Medium</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <a className="absolute block font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.7)] top-[-0.5px] whitespace-nowrap" href="https://medium.com/@Indumathi_cherukumalli" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[20px] underline">{`https://medium.com/@Indumathi_cherukumalli`}</p>
      </a>
    </div>
  );
}

function Container119() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph42 />
        <Paragraph43 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[38px] relative shrink-0 w-[128.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text67 />
        <Container119 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[21px] py-[17px] relative size-full">
          <Container118 />
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[248px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[434.25px] items-start left-0 top-0 w-[476px]" data-name="Container">
      <Container111 />
      <Container113 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[434.25px] left-[24.5px] top-[421.81px] w-[1232px]" data-name="Container">
      <Container110 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[16px] relative shrink-0 w-[176.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)] tracking-[1.2px] uppercase whitespace-nowrap">© 2026 · UX Portfolio</p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[260.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)] tracking-[1.2px] uppercase whitespace-nowrap">{`Designed & built with intention`}</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex h-[49px] items-center justify-between left-[24.5px] pt-[33px] top-[886.81px] w-[1232px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[910.75px] left-[30.5px] top-[80px] w-[1280px]" data-name="Container">
      <Text62 />
      <Container108 />
      <Heading16 />
      <Paragraph37 />
      <Container109 />
      <Container120 />
    </div>
  );
}

function ContactSection() {
  return (
    <div id="contact" className="bg-[#0a2540] h-[1166.75px] overflow-clip relative shrink-0 w-full" data-name="ContactSection">
      <Container105 />
      <Container106 />
      <Container107 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="App">
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[788px] items-start left-0 top-0 w-[1341px]" data-name="Body">
      <App />
    </div>
  );
}

function Text68() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Crimson_Pro:Medium',sans-serif] font-medium leading-[20px] left-[36px] text-[14px] text-center text-white top-0 tracking-[0.35px] whitespace-nowrap">Indumathi cherukumalli</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[116.344px] cursor-pointer" data-name="Button" onClick={() => scrollTo("hero")}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text68 />
      </div>
    </div>
  );
}

function Text69() {
  return <div className="absolute bg-[#f59e0b] h-px left-0 top-[23px] w-[33.602px]" data-name="Text" />;
}

function Button4() {
  const { activeSection, setActiveSection } = useContext(SectionTabContext);
  return (
    <div
      className="absolute h-[20px] left-0 top-[7px] w-[33.602px] cursor-pointer"
      data-name="Button"
      onClick={() => {
        setActiveSection("work");
        scrollTo("work");
      }}
    >
      <p
        className={`-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] left-[17px] text-[14px] text-center top-[-0.5px] whitespace-nowrap transition-colors ${activeSection === "work" ? "text-[#f59e0b]" : "text-[rgba(255,255,255,0.6)] hover:text-white"}`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Work
      </p>
      {activeSection === "work" ? <Text69 /> : null}
    </div>
  );
}

function Button5() {
  const { activeSection, setActiveSection } = useContext(SectionTabContext);
  return (
    <div
      className="absolute h-[20px] left-[65.6px] top-[7px] w-[38.617px] cursor-pointer"
      data-name="Button"
      onClick={() => {
        setActiveSection("about");
        scrollTo("about");
      }}
    >
      <p
        className={`-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] left-[19.5px] text-[14px] text-center top-[-0.5px] whitespace-nowrap transition-colors ${activeSection === "about" ? "text-[#f59e0b]" : "text-[rgba(255,255,255,0.6)] hover:text-white"}`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        About
      </p>
      {activeSection === "about" ? <Text69 /> : null}
    </div>
  );
}

function Button6() {
  const { activeSection, setActiveSection } = useContext(SectionTabContext);
  return (
    <div
      className="absolute h-[20px] left-[136.22px] top-[7px] w-[50.359px] cursor-pointer"
      data-name="Button"
      onClick={() => {
        setActiveSection("process");
        scrollTo("process");
      }}
    >
      <p
        className={`-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] left-[25.5px] text-[14px] text-center top-[-0.5px] whitespace-nowrap transition-colors ${activeSection === "process" ? "text-[#f59e0b]" : "text-[rgba(255,255,255,0.6)] hover:text-white"}`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Process
      </p>
      {activeSection === "process" ? <Text69 /> : null}
    </div>
  );
}

function Button7() {
  const { activeSection, setActiveSection } = useContext(SectionTabContext);
  return (
    <div
      className="absolute h-[20px] left-[218.58px] top-[7px] w-[49.883px] cursor-pointer"
      data-name="Button"
      onClick={() => {
        setActiveSection("contact");
        scrollTo("contact");
      }}
    >
      <p
        className={`-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] font-medium leading-[20px] left-[25px] text-[14px] text-center top-[-0.5px] whitespace-nowrap transition-colors ${activeSection === "contact" ? "text-[#f59e0b]" : "text-[rgba(255,255,255,0.6)] hover:text-white"}`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Contact
      </p>
      {activeSection === "contact" ? <Text69 /> : null}
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[34px] relative shrink-0 w-[281px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="fixed content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] sm:px-[24px] md:px-[54.5px] top-[3px] w-full z-40 bg-[#0a2540]/80 backdrop-blur-md" data-name="Container">
      <Button3 />
      <Navigation />
    </div>
  );
}

function Container122() {
  return <div className="bg-[#f59e0b] h-[3px] shrink-0 w-full" data-name="Container" />;
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 h-[3px] w-full z-50" data-name="ScrollProgressBar">
      <div className="bg-[#f59e0b] h-full transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default function RadiologyPlatformRedesign() {
  const appRef = useRef<HTMLDivElement>(null);
  const [activeProjectTab, setActiveProjectTab] = useState<ProjectTab>(PROJECT_TAB_DEFAULT);
  const [activeSection, setActiveSection] = useState<SectionTab>(SECTION_TAB_DEFAULT);
  const [pageScale, setPageScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      let currentSection = SECTION_TAB_DEFAULT;

      for (const sectionId of SECTION_IDS) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= HEADER_OFFSET + 40) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const fittedScale = (viewportWidth - 2) / DESIGN_WIDTH;
      setPageScale(Math.min(Math.max(fittedScale, 0.88), 1.16));
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const node = appRef.current;
    if (!node) return;

    const updateScaledHeight = () => {
      setScaledHeight(node.scrollHeight * pageScale);
    };

    updateScaledHeight();

    const resizeObserver = new ResizeObserver(updateScaledHeight);
    resizeObserver.observe(node);
    window.addEventListener("resize", updateScaledHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScaledHeight);
    };
  }, [pageScale]);

  return (
    <ProjectTabContext.Provider value={{ activeProjectTab, setActiveProjectTab }}>
      <SectionTabContext.Provider value={{ activeSection, setActiveSection }}>
        <div className="bg-white relative w-full overflow-x-hidden" data-name="Radiology Platform Redesign">
          <ScrollProgressBar />
          <Container121 />
          <div
            className="mx-auto w-full overflow-x-hidden"
            style={scaledHeight ? { height: `${scaledHeight}px` } : undefined}
          >
            <div
              ref={appRef}
              className="mx-auto origin-top"
              style={{
                width: `${DESIGN_WIDTH}px`,
                transform: `scale(${pageScale})`,
                transformOrigin: "top center",
              }}
            >
              <App />
            </div>
          </div>
        </div>
      </SectionTabContext.Provider>
    </ProjectTabContext.Provider>
  );
}
