import React from "react";
import { works } from "@/data/ourworks";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Try() {
  const [search, setSearch] = useState("");

  const value = (type: any) => {
    if (type === "branding") {
      setSearch("branding");
    } else if (type === "ui-ux") {
      setSearch("ui-ux");
    } else if (type === "marketing") {
      setSearch("marketing");
    } else if (type === "all") {
      setSearch("");
    }
  };

  return (
    <div className="pt-32">
      <div className=" flex justify-center">
        <button className=" hover:text-red-700" onClick={() => value("all")}>
          all
        </button>

        <button
          className="  hover:text-red-700"
          onClick={() => value("branding")}
        >
          branding
        </button>

        <button className=" hover:text-red-700" onClick={() => value("ui-ux")}>
          ui/ux
        </button>

        <button
          className=" hover:text-red-700"
          onClick={() => value("marketing")}
        >
          marketing
        </button>
      </div>

      <div className=" pt-32 grid grid-cols-12">
        {works
          .filter((work) => {
            return search.toLowerCase() === ""
              ? work
              : work.type.toLowerCase().includes(search);
          })
          .map((work) => (
            <div className=" grid justify-items-center  col-span-12   ">
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
          ))}
      </div>
    </div>
  );
}
