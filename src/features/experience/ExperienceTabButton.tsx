import React from "react";

type Props = {
  value: string;
  selected?: boolean;
  onCompanySelect: VoidFunction;
};

const ExperienceTabButton = ({ value, onCompanySelect, selected }: Props) => {
  return (
    <button
      className={`text-left font-mono text-xs ${selected ? "text-sky-400" : ""}`}
      onClick={() => onCompanySelect()}
    >
      {value}
    </button>
  );
};

export default ExperienceTabButton;
