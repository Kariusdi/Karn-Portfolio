import AppAbout from "@/app/_components/AppAbout";
import AppSkills from "@/app/_components/AppSkills";
import AppExpereinces from "@/app/_components/AppExpereinces";
import AppQuote from "@/app/_components/AppQuote";
import { aboutMeBold, aboutMeQuote } from "@/shared/personalData";
import AppContact from "@/app/_components/AppContact";
import AppAccomplishments from "@/app/_components/AppAccomplishments";
import AppProjects from "./_components/AppProjects";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center overflow-hidden relative">
      <AppAbout />
      <div className="w-full flex flex-wrap justify-center items-center md:space-x-20 xs:space-y-20 p-10">
        <h1 className="xs:text-4xl md:text-5xl font-bold">About Me</h1>
        <AppQuote desc={aboutMeQuote} bold={aboutMeBold} />
      </div>
      <AppProjects />
      <AppSkills />
      <AppAccomplishments />
      <AppExpereinces />
      <div className="mt-20"></div>
      <AppContact />
    </section>
  );
}
