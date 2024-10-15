"use client";
import React from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center dark:text-white text-slate-900 justify-center py-16 my-10 text-center animate-fadeIn animation-delay-2 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt="Profile Picture"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">Hi, I&#39;m Augista!</h1>
          <p className="mt-4 mb-6 text-lg md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Surabaya, Indonesia.  
          </p>
          <p className="mt-2 mb-6 text-lg dark:text-gray-300 text-black">
            Email: augistapradana11@gmail.com
          </p>
          <a
            href="https://drive.google.com/file/d/1nZLjXnuxNCFwrybc0YthGRypnweQfo0o/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold bg-teal-600 rounded shadow text-neutral-100 hover:bg-teal-700"
            >
            Curriculum Vitae
        </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
