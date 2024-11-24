"use client";

import { FC } from "react";

interface Props {
  name?: string;
  iconUrl?: string;
}

const SkillContainer: FC<Props> = ({ name, iconUrl }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center bg-white border-2 text-black font-bold rounded-3xl px-4 py-2">
      {iconUrl && (
        <img src={iconUrl} alt={name ?? "img"} className="h-auto w-11" />
      )}
      <p className="mt-2 font-bold">{name}</p>
    </div>
  );
};

export default SkillContainer;
