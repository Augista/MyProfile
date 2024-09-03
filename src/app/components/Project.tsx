import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "CharingCubWeb",
    description:
      "website that contains sales of services",
    image: "/charingcub.png",
    github: "https://github.com/Augista/CubCARE-Web",
    link: "https://charing-cub-web.vercel.app/",
  },
  {
    name: "Schematics 2024",
    description:
      "Big event of Departement Informatics Sepuluh Nopember Institute of Technology",
    image: "/sch.png",
    github: "https://schematics-its.com/",
    link: "https://schematics-its.com/",
  },
  {
    name: "Mabacup ITS 2024",
    description: "Competition for new students Sepuluh Nopember Institute of Technology",
    image: "/mabacup.png",
    github: "https://github.com/Augista/simple-Dictionary",
    link: "https://mabacup-its.com/",
  },
  

]

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-4xl font-bold text-center">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="shadow-xl rounded-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default Projects
