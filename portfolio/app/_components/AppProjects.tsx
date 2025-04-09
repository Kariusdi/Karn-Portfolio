"use client";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import {
  projectContainersLeft,
  projectContainersRight,
  projectDetails,
} from "@/shared/personalData";
import Link from "next/link";
import BG from "@/assets/abstract-bg.png";

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
  }, [setIsSelected, setSelectedID]);

  return (
    <>
      <section
        id="projects"
        className="flex flex-col flex-wrap justify-center items-center min-h-screen w-full xs:pt-24 relative"
      >
        <Image
          src={BG}
          alt={"bg"}
          width={0}
          height={0}
          className="w-full h-full absolute z-0 opacity-30 animate-pulse"
          objectFit="cover"
          quality={100}
          priority
        />
        <h1 className="xs:text-4xl md:text-5xl font-bold mt-2 text-center mb-10">
          What I&apos;ve done
        </h1>
        <div className="flex flex-wrap w-full justify-around items-center p-2 space-y-14">
          <div className="w-fit flex flex-col justify-center items-center space-y-14">
            {projectContainersLeft.map((ele, idx) => (
              <ProjectContainer
                key={idx}
                selectedID={selectedID}
                thumbnail={ele.thumbnail}
                topic={ele.topic}
                setIsSelected={setIsSelected}
                setSelectedID={setSelectedID}
              />
            ))}
          </div>
          <div className="w-fit flex flex-col justify-center items-center space-y-14">
            {projectContainersRight.map((ele, idx) => (
              <ProjectContainer
                key={idx}
                selectedID={selectedID}
                thumbnail={ele.thumbnail}
                topic={ele.topic}
                setIsSelected={setIsSelected}
                setSelectedID={setSelectedID}
              />
            ))}
          </div>
        </div>
      </section>
      {projectDetails.map((ele, idx) => (
        <DetailsContainer
          key={idx}
          selectedID={selectedID}
          isSelected={isSelected}
          clearFocus={clearFocus}
          projectName={ele.projectName}
          topic={ele.topic}
          desc1={ele.desc1}
          desc2={ele.desc2}
          techStacks={ele.techStacks}
          imgs1={ele.imgs1}
          thumbnail={ele.thumbnail}
          position={ele.position}
          link={ele.link}
          linkDesc={ele.linkDesc}
        />
      ))}
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
  thumbnail: StaticImageData;
  topic: string;
  size?: string;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedID: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectContainer = ({
  selectedID,
  thumbnail,
  topic,
  size = "default",
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
          : `z-0 ${
              size === "small" ? "scale-90" : "scale-100"
            } hover:-translate-y-1 hover:scale-105 hover:shadow-primary hover:shadow-lg`
      } relative rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer`}
    >
      <Image
        src={thumbnail}
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
        {selectedID === topic ? "" : "Click to see details"}
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
  position: string;
  link?: string;
  linkDesc?: string;
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
  link,
  linkDesc,
}: DetailsContainerProps) => {
  return (
    <section
      className={`${
        selectedID === topic
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } ${
        position === "left" ? "right-0" : "left-0"
      } fixed z-50 -top-0 bg-secondary h-dvh xs:w-full lg:w-1/2 overflow-auto flex flex-col justify-evenly items-start transition-all duration-500 p-10 ${
        isSelected
          ? "translate-x-0"
          : `${position === "left" ? "translate-x-full" : "-translate-x-full"}`
      }`}
    >
      <button
        onClick={() => clearFocus()}
        className={`font-medium w-full cursor-pointer ${
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
            {link && (
              <div>
                <Link
                  href={link}
                  target="_blank"
                  className="border-2 border-black p-1 rounded-lg text-sm"
                >
                  {linkDesc ? linkDesc : link}
                </Link>
              </div>
            )}
          </div>
          <ul
            className={`flex flex-wrap ${
              position === "right"
                ? "justify-start"
                : "xs:justify-start lg:justify-end"
            } items-center xs:w-full font-medium text-sm`}
          >
            {techStacks.map((ele) => (
              <li
                key={ele}
                className="px-2 py-1 rounded-md mr-2 mt-5 text-secondary bg-black"
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5">{desc1}</p>
        <div className="flex flex-col mt-5 space-y-5">
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
                placeholder="blur"
              />
            </div>
          ))}
        </div>
        <p className="mt-10">{desc2}</p>
        <div className="flex flex-wrap justify-between items-center">
          {imgs1?.map((ele, idx) => (
            <div key={idx} className="xs:w-full md:w-[47%] h-[40%] mt-10">
              <Image
                src={ele}
                alt={`${projectName}-${idx}`}
                width={0}
                height={0}
                quality={100}
                className="rounded-2xl w-full h-full"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
