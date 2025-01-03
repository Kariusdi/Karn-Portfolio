import React, { FC } from "react";
import Intern from "@/assets/intern.jpeg";
import Fulfill1 from "@/assets/Fulfills/1.png";
import Fulfill2 from "@/assets/Fulfills/2.png";
import Fulfill3 from "@/assets/Fulfills/3.png";
import Japan1 from "@/assets/Japan/1.8.jpg";
import Japan2 from "@/assets/Japan/1.2.jpg";
import Japan3 from "@/assets/Japan/1.6.jpg";
import Bondro1 from "@/assets/Bondro/1.jpg";
import Bondro2 from "@/assets/Bondro/2.png";
import Bondro3 from "@/assets/Bondro/3.jpg";
import Bondro4 from "@/assets/Bondro/4.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const AppExpereinces: FC = () => {
  return (
    <section
      id="experiences"
      className="flex flex-col flex-wrap justify-center items-center space-x-0 min-h-screen xs:pt-24 w-full xs:px-0 md:px-5"
    >
      <h1 className="mb-10 xs:text-4xl md:text-5xl font-bold mt-2 text-center">
        My Relevant Experiences
      </h1>
      <div className="flex justify-center items-start">
        <div className="w-full flex justify-center items-center flex-wrap space-y-32 mt-10">
          <Experiences
            img={[Intern]}
            duration={"Mar 2024 - May 2024"}
            header={"Frontend Engineer Intern"}
            subheader={"Logic Spark Co., Ltd. | Bangkok, Thailand"}
            desc={`I was in the frontend​ development team and worked with agile
          development concept. Mostly I was using Nextjs, Antd, MUI with
          TypeScript​ in this position.`}
          />
          <Experiences
            img={[Bondro4, Bondro1, Bondro3, Bondro2]}
            duration={"Sep 2024 - Oct 2024"}
            header={"Researcher with CDTI"}
            subheader={
              "Smart Plastics and Cans Sorting Box (Bondro) | CDTI GO GREEN - Sustainability Technology"
            }
            desc={`I was assigned to develop an automated sorting machine by using ESP32 as a microcontroller. 
              I developed an users application to manage the use of this machine, 
              It includes a user registration system using student IDs and a point accumulation system
              for users who utilize our machine. And also developed a back office application that handles 
              about current and history score monitoring for admins.
              All of this, I implemented with Next.js and Firebase.`}
            link="https://drive.google.com/file/d/1kaaTk-OqbaGHpGTOdtn1fhq2eZTqz7vh/view?usp=sharing"
            likeDesc="Watch our DEMO"
          />
          <Experiences
            img={[Fulfill2, Fulfill1, Fulfill3]}
            duration={"Aug 2024"}
            header={"Website Developer Freelance"}
            subheader={"FULFILL PROJECT LTD."}
            desc={`I designed, developed, and successfully deployed a comprehensive website for FulFill Project LTD., utilizing Vercel's robust hosting platform.`}
            link="https://www.fulfillprojects.com/th"
            likeDesc="https://www.fulfillprojects.com/th"
          />
          <Experiences
            img={[Japan2, Japan1, Japan3]}
            duration={"May 2023"}
            header={"International Student"}
            subheader={
              "Aichi High School of Technology and Engineering Advanced Course | Nagoya, Japan"
            }
            desc={`I represented my institution to present my team's software project. I actively participated in cultural exchange, sharing Thai traditions with others.`}
          />
        </div>
      </div>
    </section>
  );
};

export default AppExpereinces;

interface ExperiencesProps {
  img: StaticImageData[];
  duration: string;
  header: string;
  subheader: string;
  desc: string;
  link?: string;
  likeDesc?: string;
}

const Experiences: FC<ExperiencesProps> = ({ ...ExperiencesProps }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center md:space-x-5 xs:space-x-0 xs:space-y-5 md:space-y-0 flex-wrap">
        {ExperiencesProps.img.map((ele, idx) => (
          <div
            key={idx}
            className="w-[380px] h-[250px] rounded-xl shadow-lg transition-all duration-300 translate-y-0 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Image
              src={ele}
              alt="intern"
              className="w-full h-full object-cover rounded-xl"
              quality={100}
              width={0}
              height={0}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
      <div className="text-center p-2 mt-10 ">
        <p className="">{ExperiencesProps.duration}</p>
        <h1 className="text-3xl font-bold drop-shadow-lg mt-2">
          {ExperiencesProps.header}
        </h1>
        <h2 className="text-primary">{ExperiencesProps.subheader}</h2>
        <p className="mt-5">{ExperiencesProps.desc}</p>
        {ExperiencesProps.link && (
          <div className="mt-5">
            <Link
              href={ExperiencesProps.link}
              target="_blank"
              className="text-secondary bg-black p-2 rounded-lg"
            >
              {ExperiencesProps.likeDesc}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
