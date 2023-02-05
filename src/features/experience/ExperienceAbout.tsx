import { a, easings, useSpring } from "@react-spring/web";
import React from "react";
import type WorkExperience from "types/work-experience";
import ExperienceDetails from "features/experience/ExperienceDetails";

type Props = {
  exp: WorkExperience;
};

const ExperienceAbout = ({ exp }: Props) => {
  const [animate] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 500,
        easing: easings.easeInCirc,
      },
      reset: true,
    }),
    [exp]
  );
  return (
    <a.div className="flex flex-col" style={animate}>
      <h3 className="text-xl">
        <span className=" text-slate-100">{exp.title}</span>
        &nbsp;<span className="">|</span>&nbsp;
        <span className=" text-sky-400">{exp.company}</span>
      </h3>
      <p className="text-xs font-mono mt-2">
        {exp.start} - {exp.end}
      </p>
      <ExperienceDetails experiences={exp.experiences} />
    </a.div>
  );
};

export default ExperienceAbout;
