"use client";
import { FC, useState } from "react";
import SkillsList from "./SkillsList";
import {
  TechStackSkills,
  SoftSkillsStack,
  OtherSkillsStack,
} from "@/shared/personalData";
import Image from "next/image";
import Code from "@/assets/code.jpeg";

const skillTopics = [
  { name: "Dev Tools", id: "#tech-stack" },
  { name: "Soft Skills", id: "#soft-skills" },
  { name: "Others", id: "#others" },
];

const AppSkills: FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("Dev Tools");

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-wrap justify-center items-center w-full xs:pt-24"
    >
      <div className="flex flex-col justify-center items-center xs:w-full md:w-1/2 xs:p-5">
        <h1 className="mb-10 xs:text-4xl md:text-5xl font-bold mt-2 text-center">
          What I could do
        </h1>
        <ul className="flex flex-wrap justify-center items-center bg-black xs:rounded-3xl md:rounded-full p-2">
          {skillTopics.map((skill, idx) => (
            <div key={idx} className="">
              <li
                onClick={() => setSelectedTopic(skill.name)}
                className={`transition-all duration-500 cursor-pointer px-4 py-3 w-40 text-center ${
                  selectedTopic === skill.name
                    ? "bg-white text-black rounded-full font-bold"
                    : "text-white"
                }`}
              >
                {skill.name}
              </li>
            </div>
          ))}
        </ul>
        <div className="shadow-lg p-5 rounded-2xl overflow-auto w-full mt-2">
          {selectedTopic === "Dev Tools" ? (
            <SkillsList data={TechStackSkills} />
          ) : selectedTopic === "Soft Skills" ? (
            <SkillsList data={SoftSkillsStack} />
          ) : (
            <SkillsList data={OtherSkillsStack} />
          )}
        </div>
      </div>
      <div className="xs:m-5 md:m-0">
        <Image
          src={Code}
          alt="Chonakan Chumtap"
          width={450}
          height={450}
          quality={100}
          className="rounded-3xl"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default AppSkills;
