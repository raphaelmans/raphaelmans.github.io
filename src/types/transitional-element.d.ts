export type TransitionProperty = "opacity" | "translate-y" | "translate-x" | "-translate-y" | "-translate-x";
export type TransitionalElement = {
  element: Element;
  transitions: {
    property: TransitionProperty;
    from: number;
    to: number;
  }[];
};