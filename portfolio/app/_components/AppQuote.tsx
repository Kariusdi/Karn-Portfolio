import { FC } from "react";
import Pin from "@/assets/pin.png";
import Image from "next/image";

interface AppQuoteProps {
  bold: string;
  desc: string;
}

const AppQuote: FC<AppQuoteProps> = ({ bold, desc }) => {
  return (
    <div className="relative max-w-[700px] bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-green-50 border-2 px-4 pt-8 pb-4 animate-tilt m-5 text-center space-y-4">
      <div className="absolute -top-1 right-[47%]">
        <Image
          src={Pin}
          alt="Chonakan Chumtap"
          width={35}
          height={35}
          quality={100}
          placeholder="blur"
        />
      </div>
      <span className="font-bold text-lg">{bold}</span>
      <p>{desc}</p>
    </div>
  );
};

export default AppQuote;
