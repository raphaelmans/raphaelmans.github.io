import { easings } from "@react-spring/web";
import type { TransitionalElement } from "types/transitional-element";

export const baseTransitionStyle = (duration?: number, delay?: number) => ({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  config: {
    duration: duration ?? 250,
    easing: easings.easeInCubic,
  },
  delay: delay ?? 0,
});

const onElementLoadTransition = (te: TransitionalElement) => {
  const { element: elem, transitions } = te;

  transitions.forEach((t) => {
    elem.classList.remove(`${t.property}-${t.from}`);
  });

  transitions.forEach((t) => {
    elem.classList.add(`${t.property}-${t.to}`);
  });
};

const onElementsLoadTransition = (tes: TransitionalElement[]) => {
  tes.forEach((te) => {
    const { element: elem, transitions } = te;

    transitions.forEach((t) => {
      elem.classList.remove(`${t.property}-${t.from}`);
    });

    transitions.forEach((t) => {
      elem.classList.add(`${t.property}-${t.to}`);
    });
  });
};

function onElementVisible(
  elem: Element,
  te: TransitionalElement,
  attribute: string,
  callback: (te: TransitionalElement) => void
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && elem) {
          const hasAttributeTransition = elem.hasAttribute(attribute);
          if (hasAttributeTransition) {
            elem.removeAttribute(attribute);
            callback(te);
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(elem);
}

export { onElementLoadTransition, onElementsLoadTransition, onElementVisible };
