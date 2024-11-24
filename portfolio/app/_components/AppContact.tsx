import React from "react";
import GitHub from "@/assets/github.png";
import Email from "@/assets/mail.png";
import Location from "@/assets/location.png";
import Phone from "@/assets/telephone.png";
import Image from "next/image";
import Link from "next/link";

const contactList = [
  { desc: "+66 955739706", icon: Phone, type: "tel" },
  { desc: "https://github.com/Kariusdi", icon: GitHub, type: "link" },
  { desc: "chonakan.chu@gmail.com", icon: Email, type: "none" },
  {
    desc: "Nonthaburi 11110, Thailand",
    icon: Location,
    type: "none",
  },
];
const AppContact = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col justify-center items-center h-fit w-full bg-black text-white text-end p-10"
    >
      <h1 className="text-2xl font-bold text-center">Chonakan Chumtap</h1>
      <ul className="xs:w-full md:w-1/2 h-fit mt-10">
        {contactList.map((ele, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center w-full mb-8"
          >
            <Image
              src={ele.icon}
              alt={ele.desc}
              width={20}
              height={20}
              quality={100}
              placeholder="blur"
            />
            <Link
              href={
                ele.type === "tel"
                  ? `tel:${ele.desc}`
                  : ele.type === "link"
                  ? ele.desc
                  : "#contact"
              }
              className={`${
                ele.desc === "https://github.com/Kariusdi" || ele.type === "tel"
                  ? "cursor-pointer"
                  : "cursor-default"
              }`}
              target={
                ele.type === "link" &&
                ele.desc === "https://github.com/Kariusdi"
                  ? "_blank"
                  : ""
              }
              rel={
                ele.type === "link" &&
                ele.desc === "https://github.com/Kariusdi"
                  ? "noopener noreferrer"
                  : ""
              }
            >
              {ele.desc}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default AppContact;
