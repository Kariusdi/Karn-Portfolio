import { FC } from "react";
import AppAbout from "./_components/AppAbout";
import AppSkills from "./_components/AppSkills";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center space-y-20">
      <AppAbout />
      <AppSkills />
    </section>
  );
}
