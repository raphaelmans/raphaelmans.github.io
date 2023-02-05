import React from "react";
import { animated, easings, useScroll, useSpring } from "@react-spring/web";
import type PageLink from "types/page-link";
import { pageLinks as siteLinks, RESUME_LINK } from "utils/constants";
import { baseTransitionStyle } from "utils/transitions";
import NavigationItem from "./NavigationItem";
import NavigationMenu from "./NavigationMenu";

type Props = {};

type CustomPageLink = {
  pageLink: PageLink;
  duration: number;
};

const durations = [200, 300, 500, 700];
const pageLinks: CustomPageLink[] = siteLinks.map((link, i) => ({
  pageLink: {
    ...link,
  },
  duration: durations[i] ?? 100,
}));

const animateStyle = baseTransitionStyle(700, 200);

const SCROLL_TRESHOLD = 0.01;
const NavigationBar = (props: Props) => {
  const [headerAnimateStyle, headerAPI] = useSpring(() =>
    baseTransitionStyle(500, 200)
  );
  const logoAnimateStyle = useSpring(animateStyle);

  const btnAnimateStyle = useSpring({
    from: {
      ...animateStyle.from,
      y: -24,
    },
    to: {
      ...animateStyle.to,
      y: 0,
    },
    config: {
      duration: 700,
      easing: easings.easeInCubic,
    },
    delay: 300,
  });

  const { scrollYProgress } = useScroll({
    onChange: (result) => {
      const {
        value: { scrollYProgress },
      } = result;
      if (scrollYProgress > SCROLL_TRESHOLD) {
        headerAPI.start({
          opacity: 0,
        });
      } else {
        headerAPI.start({
          opacity: 100,
        });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <animated.header
      className={`fixed top-0 bg-transparent w-full h-16 z-10`}
      style={{
        ...headerAnimateStyle,
        visibility: scrollYProgress.to((p) =>
          p > SCROLL_TRESHOLD && !scrollYProgress.isAnimating
            ? "hidden"
            : "visible"
        ),
      }}
    >
      <nav className="flex flex-row justify-between items-center py-2 px-4 sm:py-4 sm:px-8 h-full">
        <animated.h1
          className="tracking-[0.25rem] font-bold text-sky-400 hover:text-sky-600 hover:font-extrabold cursor-pointer"
          style={logoAnimateStyle}
          id="logo"
        >
          RM
        </animated.h1>
        <ul className="hidden sm:flex gap-8 items-center">
          {pageLinks.map((link) => (
            <NavigationItem {...link} key={`nav-link-${link.pageLink.title}`} />
          ))}
          <animated.a
            style={btnAnimateStyle}
            className="border border-sky-400 px-4 py-1 hover:border-sky-600 hover:border-2 text-sky-400 hover:bg-sky-400/10 rounded"
            id="resume-btn"
            target="_blank"
            href={RESUME_LINK}
          >
            Resume
          </animated.a>
        </ul>

        <NavigationMenu />
      </nav>
    </animated.header>
  );
};

export default NavigationBar;
