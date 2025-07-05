import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

export const heroData = {
  title: "Your business deserves systems that work — and last",
  description1: `We help small, owner-led businesses modernise quietly — with tools that make your life easier, not more complicated. Clean systems, calm ops, and space to think again.`,
  description2: `We’re not here to sell software. We’re here to build digital foundations you can trust — designed for where you are now, and where you're heading next.`,
  image: "/img/boat-navigation.jpg", // string path for <Image src="/..." />
  ctaLink: "mailto:hello@charted.consulting",
  ctaText: "Start a conversation",
};

const benefitOne = {
  title: "Built with care, designed to last",
  desc: "Charted is more than consultancy — we’re embedded operators. We care about your legacy, your team, and your day-to-day reality. We don’t just advise, we help you implement — for real.",
  image: "/img/bakery.jpg", // string path
  bullets: [
    {
      title: "Operator-level support",
      desc: "We’ve modernised booking flows, payroll, SOPs, and CRMs — from the inside out. Everything we build is shaped around how your business actually runs.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Clear thinking, steady hands",
      desc: "We help cut through operational chaos and rebuild clarity — one automation, one template, one better habit at a time.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Long-term trust over short-term wins",
      desc: "We’re here to reduce your stress, not just your backlog. Our work builds capacity — for you, your team, and the version of the business you want next.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Systems that scale with you — and don’t get in your way",
  desc: "We build calm, customisable systems that you own. No lock-in, no complexity for the sake of it — just smarter ways to work that save time and reduce founder-dependency.",
  image: "/img/lighthouse-hit-by-waves.jpg", // string path
  bullets: [
    {
      title: "Cutting through complexity",
      desc: "From scheduling to CRM and dashboards, we simplify workflows so teams stop wasting time and start working with clarity.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Designed for continuity",
      desc: "We document the hard-to-train knowledge. We prepare for handoffs. We build with succession in mind — whether that’s to staff, family, or future buyers.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Tech that serves the business",
      desc: "Automation is great. Templates are helpful. But only if they actually serve *you*. We use tech to amplify what already works — not overwrite it.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
