import { FC } from "react";

const AppAccomplishments: FC = () => {
  return (
    <section
      id="accomplishments"
      className="flex flex-col flex-wrap justify-center items-center space-x-3 min-h-screen xs:pt-24"
    >
      <h1 className="mb-10 xs:text-2xl md:text-5xl font-bold mt-2 text-center">
        Accomplishments
      </h1>
    </section>
  );
};

export default AppAccomplishments;
