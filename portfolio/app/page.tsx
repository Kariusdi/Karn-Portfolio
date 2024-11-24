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
      <AppQuote desc={aboutMeQuote} bold={aboutMeBold} />
      <AppSkills />
      <AppAccomplishments />
      <AppExpereinces />
      <AppContact />
    </section>
  );
}
