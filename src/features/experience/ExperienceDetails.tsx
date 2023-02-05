import React from "react";
type Props = {
  experiences: string[];
};

export default function ExperienceDetails({ experiences }: Props) {
  return (
    <ul className="mt-2 flex flex-col gap-1">
      {experiences.map((exp, i) => (
        <li
          className="relative before:content-['▹'] before:absolute before:left-0 pl-10 before:leading-[2] before:text-sky-400 before:text-[0.75rem]"
          key={`work-contribution-${i}`}
        >
          {exp}
        </li>
      ))}
    </ul>
  );
}
