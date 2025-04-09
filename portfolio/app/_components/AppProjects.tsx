"use client";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import PYUI from "@/assets/PYUI/1.png";
import PYUI2 from "@/assets/PYUI/2.png";
import PYUI3 from "@/assets/PYUI/3.png";
import PYUI4 from "@/assets/PYUI/4.png";

const AppProjects = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState<string>("");

  useEffect(() => {
    if (isSelected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSelected]);

  useEffect(() => {
    const target = document.getElementById(selectedID);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedID, isSelected]);

  const clearFocus = useCallback(() => {
    setIsSelected(false);
    setSelectedID("");
  }, [setIsSelected, selectedID]);

  return (
    <>
      <section
        id="projects"
        className="flex flex-col flex-wrap justify-center items-center space-y-0 min-h-screen w-full xs:pt-24 relative"
      >
        <h1 className="xs:text-4xl md:text-5xl font-bold mt-2 text-center mb-10">
          What I've done
        </h1>
        <div className="flex flex-wrap w-full justify-around items-center md:space-x-14 space-y-14 md:space-y-0 p-2">
          <div className="w-fit flex flex-col justify-center items-center space-y-14 md:pt-28">
            <ProjectContainer
              selectedID={selectedID}
              img={PYUI}
              topic="Platform for LLM with RAG"
              setIsSelected={setIsSelected}
              setSelectedID={setSelectedID}
            />
          </div>
          <div className="w-fit flex flex-col justify-center items-center space-y-14">
            <ProjectContainer
              selectedID={selectedID}
              img={PYUI}
              topic="Platform for LLM with RAG2"
              setIsSelected={setIsSelected}
              setSelectedID={setSelectedID}
            />
          </div>
        </div>
      </section>
      <DetailsContainer
        selectedID={selectedID}
        isSelected={isSelected}
        clearFocus={clearFocus}
        projectName={"P'YUI GPT"}
        topic={"Platform for LLM with RAG"}
        desc1={`P’YUI-GPT is a web-based platform designed to support academic Q&A
        through a Large Language Model (LLM) integrated with Retrieval-Augmented
        Generation (RAG). It was developed for internal use within my university
        faculty to help students receive accurate, document-based answers. The
        platform features Role-Based Access Control (RBAC) to manage permissions
        across three user roles: User, Admin, and Viewer. Users can chat
        directly with the LLM, with chat history retrieval implemented using
        pagination.`}
        desc2={`Admins are able to upload documents, manage document versions, and
          maintain the knowledge base that feeds into the LLM. This project
          demonstrates the integration of modern AI technologies into a usable
          platform with practical access control and document management
          features tailored for educational environments.`}
        techStacks={["Next.js", "FastAPI", "MongoDB"]}
        imgs1={[PYUI3, PYUI4]}
        thumbnail={[PYUI2]}
        position="left"
      />
      <DetailsContainer
        selectedID={selectedID}
        isSelected={isSelected}
        clearFocus={clearFocus}
        projectName={"P'YUI GPT"}
        topic={"Platform for LLM with RAG2"}
        desc1={`P’YUI-GPT is a web-based platform designed to support academic Q&A
        through a Large Language Model (LLM) integrated with Retrieval-Augmented
        Generation (RAG). It was developed for internal use within my university
        faculty to help students receive accurate, document-based answers. The
        platform features Role-Based Access Control (RBAC) to manage permissions
        across three user roles: User, Admin, and Viewer. Users can chat
        directly with the LLM, with chat history retrieval implemented using
        pagination.`}
        techStacks={["Next.js", "FastAPI", "MongoDB"]}
        imgs1={[PYUI3, PYUI4]}
        thumbnail={[PYUI2]}
        position="right"
      />

      <div
        onClick={() => clearFocus()}
        className={`absolute top-0 h-full w-full bg-black z-30 transition-all duration-500 ${
          isSelected
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
};

export default AppProjects;

interface ProjectContainerProps {
  selectedID: string;
  img: StaticImageData;
  topic: string;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedID: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectContainer = ({
  selectedID,
  img,
  topic,
  setIsSelected,
  setSelectedID,
}: ProjectContainerProps) => {
  return (
    <div
      onClick={() => {
        setIsSelected(true);
        setSelectedID(topic);
      }}
      id={topic}
      className={`${
        selectedID === topic
          ? "z-40 scale-105 shadow-primary shadow-lg"
          : "z-0 scale-100 hover:-translate-y-1 hover:scale-105 hover:shadow-primary hover:shadow-lg"
      } relative rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer`}
    >
      <Image
        src={img}
        alt={topic}
        width={650}
        height={500}
        priority
        quality={100}
        placeholder="blur"
        className={`rounded-2xl`}
      />
      <div className="absolute top-2 left-2 py-1 px-3 rounded-xl bg-gradient-to-r from-orange-900 to-zinc-800 text-white font-bold">
        {topic}
      </div>
      <div className="absolute bottom-2 right-2 px-1 rounded-xl text-black text-xs font-bold bg-white">
        Click to see details
      </div>
    </div>
  );
};

interface DetailsContainerProps {
  selectedID: string;
  isSelected: boolean;
  clearFocus: () => void;
  projectName: string;
  topic: string;
  desc1: string;
  desc2?: string;
  techStacks: string[];
  imgs1?: StaticImageData[];
  thumbnail?: StaticImageData[];
  position: "left" | "right";
}

const DetailsContainer = ({
  selectedID,
  isSelected,
  clearFocus,
  projectName,
  topic,
  desc1,
  desc2,
  techStacks,
  imgs1,
  thumbnail,
  position,
}: DetailsContainerProps) => {
  return (
    <section
      className={`${
        selectedID === topic
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } ${
        position === "left" ? "right-0" : "left-0"
      } fixed z-50 -top-20 bg-secondary h-dvh xs:w-full lg:w-1/2 overflow-auto flex flex-col justify-evenly items-start transition-all duration-500 p-10 ${
        isSelected
          ? "translate-x-0"
          : `${position === "left" ? "translate-x-full" : "-translate-x-full"}`
      }`}
    >
      <button
        onClick={() => clearFocus()}
        className={`font-medium w-full cursor-pointer  ${
          position === "right" ? "text-start lg:text-end" : "text-start"
        }`}
      >
        {"< Back"}
      </button>
      <div className="mt-5">
        <div
          className={`w-full flex flex-wrap ${
            position === "right" && "flex-row-reverse lg:text-end"
          } justify-between items-start`}
        >
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-primary">{projectName}</h1>
            <h2 className="text-2xl font-bold">{topic}</h2>
          </div>
          <ul
            className={`flex flex-wrap ${
              position === "right"
                ? "justify-start"
                : "xs:justify-start lg:justify-end"
            } items-center xs:w-full lg:w-[40%] font-medium text-sm`}
          >
            {techStacks.map((ele) => (
              <li
                key={ele}
                className="border-2 border-black px-2 py-1 rounded-md mr-2 mt-5"
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5">{desc1}</p>

        <div className="flex flex-col mt-5 md:space-x-5">
          {thumbnail?.map((ele, idx) => (
            <div key={idx} className="w-full h-auto">
              <Image
                src={ele}
                alt={`${projectName}-${idx}`}
                width={0}
                height={0}
                quality={100}
                className="rounded-2xl w-full h-full"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-10">{desc2}</p>
        <div className="flex flex-wrap justify-between items-center">
          {imgs1?.map((ele, idx) => (
            <div key={idx} className="xs:w-full md:w-[47%] h-auto mt-10">
              <Image
                src={ele}
                alt={`${projectName}-${idx}`}
                width={0}
                height={0}
                quality={100}
                className="rounded-2xl w-full h-full"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
