"use client";
import { FC, useLayoutEffect } from "react";
import Tesa2024 from "@/assets/Tesa 2024/2.jpg";
import Tesa2023 from "@/assets/Tesa 2023/1.jpg";
import Ai from "@/assets/AI Hackathon/1.1.jpg";
import Rubber from "@/assets/YongYang/1.1.jpg";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AppAccomplishments: FC = () => {
  // useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {
  //         ScrollTrigger.create({
  //             trigger:
  //         })
  //     })

  //     return () => ctx.revert()
  // }, [])
  return (
    <section
      id="accomplishments"
      className="flex flex-col flex-wrap justify-center items-center space-y-0 min-h-screen xs:pt-24"
    >
      <h1 className="mb-10 xs:text-4xl md:text-5xl font-bold mt-2 text-center">
        Accomplishments
      </h1>
      <div className="flex flex-col justify-center items-center p-10 space-y-10">
        <Accomplishments
          style="left"
          img={Tesa2024}
          award="1st Runner Up and Top Score on Server Programming"
          awardIcon="🥈🥇"
          header="TESA Top Gun Rally 18th"
          subheader="Acoustic and AI-Based Predictive Maintenance with Edge Computing"
          desc={`" I worked on server programming section by implementing MQTT over
              WebSocket and RESTful APIs, leveraging Mosquitto, MongoDB,
              FastAPI, Next.js, and Docker. "`}
        />
        <hr className="w-full border-t-[0.5px] border-secondary" />
        <Accomplishments
          style="right"
          img={Ai}
          award="1st Runner Up"
          awardIcon="🥇"
          header="International AI Hackathon Saving The World with AI"
          subheader="arranged by KMITL and The University of Queensland"
          desc={`" I was responsible for Frontend Development of an LLMs Application focused on household waste management assistance based on user behaviour, and served as a pitch presenter. "`}
        />
        <hr className="w-full border-t-[0.5px] border-secondary" />
        <Accomplishments
          style="left"
          img={Tesa2023}
          award="5th Placed and Gold Level Score"
          awardIcon="👨🏽‍💻"
          header="TESA Top Gun Rally 17th"
          subheader="Monitoring and Management System of Flood and Drought Conditions"
          desc={`" I worked on server programming section by implementing MQTT and RESTful APIs, leveraging EMQX, MongoDB, FastAPI, Streamlit, and Docker. "`}
        />
        <hr className="w-full border-t-[0.5px] border-secondary" />
        <Accomplishments
          style="right"
          img={Rubber}
          award="1st Runner Up"
          awardIcon="🥇"
          header="Smart Natural Rubber Hackathon"
          subheader="by Rubber Authority of Thailand"
          desc={`" I developed a dashboard and controller application with Flutter for smart natural rubber greenhouse monitoring, while contributing to IoT equipment installation. "`}
        />
      </div>
    </section>
  );
};

export default AppAccomplishments;

interface AccomplishmentsProps {
  style: string;
  awardIcon?: string;
  award?: string;
  header?: string;
  subheader?: string;
  desc?: string;
  img?: StaticImageData;
}

const Accomplishments: FC<AccomplishmentsProps> = ({
  style = "left",
  awardIcon,
  award,
  header,
  subheader,
  desc,
  img,
}) => {
  return (
    <>
      {style === "left" ? (
        <div className="flex flex-wrap justify-center items-center xs:space-y-10 lg:space-y-0 md:space-x-10 xs:space-x-0 w-full p-10">
          <Image
            src={img ?? Tesa2024}
            alt="TESA2024"
            width={400}
            height={200}
            className="rounded-xl shadow-lg"
          />
          <div className="lg:w-[50%] md:w-full flex flex-col items-start space-y-5">
            <div className="inline-flex items-center border p-2 rounded-md space-x-2">
              <p className="text-4xl">{awardIcon}</p>
              <h1 className="text-3xl text-primary font-bold">{award}</h1>
            </div>
            <div>
              <h2 className="text-lg text-black mt-5 font-bold">{header}</h2>
              <h3 className="text-black">{subheader}</h3>
            </div>
            <p className="text-black mt-10">{desc}</p>
          </div>
        </div>
      ) : style === "right" ? (
        <div className="flex flex-wrap justify-center items-center xs:space-y-10 lg:space-y-0 md:space-x-10 xs:space-x-0 w-full p-10">
          <div className="lg:w-[50%] md:w-full flex flex-col items-end space-y-5">
            <div className="inline-flex items-center border p-2 rounded-md space-x-2">
              <p className="text-4xl">{awardIcon}</p>
              <h1 className="text-3xl text-primary font-bold">{award}</h1>
            </div>
            <div className="text-end">
              <h2 className="text-lg text-black mt-5 font-bold">{header}</h2>
              <h3 className="text-black">{subheader}</h3>
            </div>
            <p className="text-black mt-10 text-end">{desc}</p>
          </div>
          <Image
            src={img ?? Tesa2024}
            alt="TESA2024"
            width={400}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
