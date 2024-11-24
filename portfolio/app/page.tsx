import { FC } from "react";
import AppAbout from "./_components/AppAbout";
import AppSkills from "./_components/AppSkills";
import AppExpereinces from "./_components/AppExpereinces";
import AppQuote from "./_components/AppQuote";
import { aboutMeBold, aboutMeQuote } from "@/shared/personalData";
import AppContact from "./_components/AppContact";
import AppAccomplishments from "./_components/AppAccomplishments";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center space-y-20">
      <AppAbout />
      <div className="w-full flex flex-wrap justify-center items-center md:space-x-20 xs:space-y-20 p-10">
        <h1 className="xs:text-4xl md:text-5xl font-bold">About Me</h1>
        <AppQuote desc={aboutMeQuote} bold={aboutMeBold} />
      </div>
      <AppSkills />
      <AppAccomplishments />
      <AppExpereinces />
      <div className="mt-20"></div>
      <AppContact />
    </section>
  );
}
