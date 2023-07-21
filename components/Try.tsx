// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { works } from "@/data/ourworks";
// import { useState } from "react";

// export default function Try() {
//   return (
//     <div>
//       <div className=" pt-20 mx-2 flex min-h-screen md:grid md:justify-items-center">
//         <div className=" grid grid-cols-12  ">
//           {works.map((work) => (
//             <div className=" relative  col-span-12 lg:col-span-6 lg:mx-10 2xl:col-span-4    hover:drop-shadow-xl   group     my-10  ">
//               <div className="  ">
//                 <Image
//                   src={work.linkImg}
//                   alt={`Image ${work.id}`}
//                   height={480}
//                   width={401}
//                   className=" object-cover "
//                 />
//               </div>
//               <div className=" absolute  flex justify-between bg-white  inset-x-0 bottom-0 rounded-b-lg    opacity-0 transition-opacity group-hover:opacity-100  ">
//                 <div className=" flex items-center">
//                   <div className="mx-5 ">
//                     <p className=" font-bold text-lg ">{work.version}</p>
//                     <p className=" text-base text-gray-400 ">{work.type}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <Link
//                     href="#"
//                     className=" bg-violet-400 p-6 text-white rounded-br-lg"
//                   >
//                     <svg
//                       className="w-5 h-5  "
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
