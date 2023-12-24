import React from "react";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="hidden h-[90px] bg-[#4831d4] md:block"></div>

      <div className="bg-[#fff] mx-auto max-w-screen-xl flex flex-col items-center justify-center px-4 py-8 lg:px-6 lg:py-16">
        <div>
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
            alt=""
          />
        </div>
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-[#4831d4] lg:text-9xl dark:text-primary-500">
            404
          </h1>
          <p className="text-white mb-4 text-3xl font-bold tracking-tight md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link to="/"><Button>Go back home</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound404;
