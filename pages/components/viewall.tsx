import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "@/pages/data/projects";

export default function DisplayAll() {
  const settings = {
    dots: false,
    slidesToShow: 4,
    rows: 2,
  };
  return (
    <div>
      <div className="flex justify-around  mt-20   mb-20">
        <div className="">
          <span className=" font-OpenSans font-light text-xl  text-gray-500">
            PORTFOLIO
          </span>

          <h1 className=" text-5xl font-Poppins font-bold pt-7">
            Projects we love
          </h1>
        </div>
        <div className="flex  self-end  font-semibold ">
          <div className=" button-viewAll ml-20">
            <Link href="..">
              <button className=" text-red-500  font-OpenSans  font-semibold">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Slider {...settings} className="mb-20  ">
        {projects.map((project) => (
          <div key={project.id} className=" mx-10 pt-2 mb-10">
            <Link href="/">
              <Image
                src={project.linkImg}
                alt={`Image ${project.id}`}
                height={480}
                width={401}
                className="duration-300 hover:scale-95  "
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
