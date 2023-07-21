import React from "react";
import Image from "next/image";
import { works } from "@/data/ourworks";

export default function Try() {
  return (
    <div>
      <div className="    pb-36  py-10 mx-auto  grid grid-cols-12  w-full lg:max-w-5xl xl:max-w-7xl    ">
        {/* images */}
        {/* {works.map((work) => (
          <div className=" grid justify-items-center  col-span-12 mx-2 md:mx-0 lg:col-span-6 xl:col-span-4 my-5  ">
            <div className="">
              <Link href="#">
                <Image
                  src={work.linkImg}
                  alt={`Image ${work.id}`}
                  height={480}
                  width={401}
                  className="duration-300 hover:scale-95 object-fill  "
                />
              </Link>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
