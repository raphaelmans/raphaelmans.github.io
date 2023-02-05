import { useStore } from "@nanostores/react";
import { animated, easings, useSpring } from "@react-spring/web";
import { drawerVisible } from "atoms/stores";
import React from "react";

type Props = {};

const NavigationMenu = (props: Props) => {
  const visible = useStore(drawerVisible);
  const btnAnimateStyle = useSpring({
    from: {
      opacity: 0,
      y: -24,
    },
    to: {
      opacity: 100,
      y: 0,
    },
    config: {
      duration: 700,
      easing: easings.easeInCubic,
    },
    delay: 300,
  });
  const onDrawerOpen = () => {
    drawerVisible.set(!visible);
  };
  return (
    <animated.div className="block sm:hidden" style={btnAnimateStyle}>
      <button
        className="block sm:hidden text-sky-400 hover:text-sky-600"
        onClick={onDrawerOpen}
      >
        {!visible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        )}
      </button>
    </animated.div>
  );
};

export default NavigationMenu;
