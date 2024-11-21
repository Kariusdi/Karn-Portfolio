"use client";

import { FC } from "react";
import SkillContainer from "./SkillContainer";

const SkillsList: FC<{
  data: { name: string; level: string; iconUrl: string }[];
}> = ({ data }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,100fr))] gap-5 h-[400px]">
      {data?.map((skill, idx) => (
        <SkillContainer
          key={idx}
          iconUrl={skill.iconUrl}
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
};

export default SkillsList;
