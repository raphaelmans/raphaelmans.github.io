import React, { useState } from "react";
import { workExperiences } from "utils/constants";
import type WorkExperience from "types/work-experience";
import type { Company } from "types/company";
import ExperienceTabButton from "features/experience/ExperienceTabButton";
import ExperienceAbout from "features/experience/ExperienceAbout";

const WorkExperienceContent = () => {
  const [workExp, setWorkExp] = useState<WorkExperience>(workExperiences[0]);

  const onSelectWorkExperience = (companyName: Company) => {
    const foundExp = workExperiences.find((exp) => {
      return exp.company === companyName;
    });
    if (foundExp) {
      setWorkExp(foundExp);
      location.href = "#experience"
    }
  };

  const isSelected = (exp: WorkExperience) => {
    return exp.company === workExp.company;
  };

  return (
    <div className="flex">
      <ul className="flex flex-col  mr-6">
        {workExperiences.map((exp) => (
          <li
            key={exp.company}
            className={`px-3 py-1 border-l-2 ${
              isSelected(exp)
                ? "border-sky-400  bg-sky-100/5"
                : "border-sky-50/25"
            }

              `}
          >
            <ExperienceTabButton
              value={exp.company}
              onCompanySelect={() => onSelectWorkExperience(exp.company)}
              selected={exp.company === workExp.company}
            />
          </li>
        ))}
      </ul>

      <ExperienceAbout exp={workExp} />
    </div>
  );
};

export default WorkExperienceContent;
