"use client";
import { FC } from "react";
import Image from "next/image";
import Pic from "@/assets/pro.png";
import Link from "next/link";
const topics = [
  "Full-stack Development",
  "Cloud Computing",
  "Machine Learning",
  "Data Engineering",
];

const AppAbout: FC = () => {
  return (
    <section
      id="about"
      className="flex flex-wrap justify-evenly items-center space-x-3 min-h-screen xs:pt-24"
    >
      <Image
        src={Pic}
        alt="Chonakan Chumtap"
        width={500}
        height={500}
        quality={100}
      />
      <div className="flex flex-col justify-center p-4 xs:text-center md:text-left flex-wrap">
        <div className="flex flex-col flex-wrap justify-center md:items-start xs:items-center">
          <p className="text-2xl font-bold">🌍🌟 Hello world, I am</p>
          <h1 className="text-5xl font-bold mt-2">Chonakan Chumtap</h1>

          <div
            id="role"
            className="flex flex-row flex-wrap mb-10 mt-5 xs:justify-center xs:items-center md:items-start md:justify-start"
          >
            <span className="text-header mt-1 md:mr-2 text-3xl font-semibold">
              I fancy{" "}
            </span>
            <ul id="second-text" className="text-3xl mt-[2px]">
              {topics?.map((topic, idx) => (
                <li key={idx}>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>Thank you very much for visiting my Portfolio</p>
          <button className="mt-10 bg-black px-3 py-3 rounded-xl text-white transition-all duration-300 hover:bg-primary">
            <Link href={"#contact"}>Contact Me</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppAbout;
