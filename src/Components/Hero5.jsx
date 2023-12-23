import React from "react";
import Button from "./Button/Button";
import { Input } from "@nextui-org/react";

const Hero5 = () => {
  return (
    <div className=" bg-[#f9f9f9] px-10 md:flex md:flex-col items-center md:px-20 py-20 font-sfui">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#4831d4]">
        Send me a message!
      </h1>
      <p className="text-sm md:text-lg">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <div className="flex flex-col items-start md:items-center gap-5 pt-10 pe-10 md:pe-0 md:w-[40vw]">
        <Input
          type="text"
          variant="underlined"
          label="Your Name"
          placeholder="Enter your name"
        />
        <Input
          type="email"
          variant="underlined"
          label="Email"
          placeholder="Enter your email address"
        />
        <Input
          type="text"
          variant="underlined"
          label="Your Message"
          placeholder="Hi, I think we need website for our Company X. How soon can you hop on to discuss this?"
        />
        <Button>SHOOT</Button>
      </div>
    </div>
  );
};

export default Hero5;
