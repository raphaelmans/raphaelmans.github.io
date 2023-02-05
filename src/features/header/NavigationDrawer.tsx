import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { drawerVisible } from "atoms/stores";
import { createPortal } from "react-dom";
import { pageLinks, RESUME_LINK } from "utils/constants";

type Props = {};

const NavigationDrawer = (props: Props) => {
  const visible = useStore(drawerVisible);

  useEffect(() => {
    if (document.body && visible) {
      document.body.classList.add("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [visible]);

  const onSelectDrawerLink = (href: string) => {
    drawerVisible.set(false);
    location.href = href;
  };
  return typeof window === "object" && visible
    ? createPortal(
        <>
          <div
            className="absolute flex sm:hidden cursor-pointer backdrop-blur-sm top-0 h-full w-full bg-slate-600/10 z-0"
            id="navigation-drawer-backdrop"
          ></div>
          <nav
            className="absolute flex sm:hidden flex-col h-full w-9/12 top-0 right-0 justify-center items-center bg-slate-900 z-2 drop-shadow-lg"
            id="navigation-drawer"
          >
            <ul className="text-center font-mono" id="page-links">
              {pageLinks.map((page, i) => (
                <li
                  className={`${
                    i !== pageLinks.length - 1 ? "mb-4" : "mb-12"
                  } hover:text-sky-400 cursor-pointer`}
                  key={`drawer-key-${page.title}`}
                  onClick={() => onSelectDrawerLink(page.link)}
                >
                  {page.title}
                </li>
              ))}
            </ul>

            <a
              href={RESUME_LINK}
              target="_blank"
              className="w-max h-min border border-sky-400 px-8 py-2 hover:border-sky-600 hover:border-2 text-sky-400 hover:bg-sky-400/10 rounded"
            >
              Resume
            </a>
          </nav>
        </>,
        document.body
      )
    : null;
};

export default NavigationDrawer;
