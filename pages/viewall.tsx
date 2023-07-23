import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { projects } from "@/data/projects";
export default function viewall() {
  return (
    <div>
      <Head>
        <title>Projects we love</title>
        <link rel="icon" href="/logo-web.png" />
      </Head>
      <div className="flex justify-start mx-10  pt-40  mb-20">
        <div className="">
          <p className=" font-OpenSans font-light text-xl  text-gray-500">
            PORTFOLIO
          </p>

          <h1 className=" text-5xl font-Poppins font-bold pt-7">
            Projects we love
          </h1>
        </div>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4">
        {projects.map((project: any) => (
          <div
            key={project.id}
            className="  mx-10 pt-2 mb-10  "
            aria-hidden="true"
          >
            <Link href="/" aria-label="projects">
              <Image
                src={project.linkImg}
                alt={`Image ${project.id}`}
                height={480}
                width={401}
                className="duration-300 hover:scale-95   "
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
