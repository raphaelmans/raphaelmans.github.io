import { animated, easings, useSpring } from "@react-spring/web";
import React from "react";
import type PageLink from "types/page-link";
import { baseTransitionStyle } from "utils/transitions";

type Props = {
  pageLink: PageLink;
  duration: number;
};

const NavigationItem = ({ pageLink, duration }: Props) => {
  const animateStyle = useSpring({
    from: {
      opacity: 0,
      y: -24,
    },
    to: {
      opacity: 100,
      y: 0,
    },
    config: {
      duration: duration,
      easing: easings.easeInCubic,
    },
    delay: 200,
  });
  return (
    <animated.li style={animateStyle}>
      <a
        href={`${pageLink.link}` ?? "#"}
        className="text-slate-300 font-mono font-thin hover:text-sky-400"
      >
        {pageLink.title}
      </a>
    </animated.li>
  );
};

export default NavigationItem;
