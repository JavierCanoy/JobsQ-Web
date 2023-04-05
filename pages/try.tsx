import Image from "next/image";
import pic from "../public/pic.png";
import avatar from "../public/avatar.png";
import team from "../public/team.png";
import group from "../public/group.png";
import browser from "../public/browser.svg";
import monitor from "../public/homePageOne/monitor.svg";
import graphicDesign from "../public/graphicDesign.svg";
import mateagain from "../public/mateagain.png";
import mateme from "../public/mateme.png";
import mother from "../public/mother.png";
import close from "../public/close.png";
import bag from "../public/bag.png";
import landing from "../public/homePageOne/browser.svg";

export default function Try() {
  return (
    <>
      <div>
        <button className="bg-gradient-to-r from-[#FF8FE2] to-[#6362D7] h-73 w-68 rounded-br-lg hover:bg-red-500 hover:text-white hover:border-red-600">
          <svg
            className="w-5 h-5 mx-5 text-white "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button className="bg-gradient-to-t from-[#6362D7] to-[#FF8FE2] h-73 w-68 rounded-br-lg text-white hover:bg-white hover:text-purple-600 hover:border-purple-600">
          <svg
            className="w-5 h-5 mx-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <button className="bg-gradient-to-t from-[#6362D7] to-[#FF8FE2] h-73  rounded-br-lg text-white   hover:bg-white hover:text-[#6362D7] ">
          <svg
            className="w-5 h-5 mx-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <button className="text-xl font-semibold bg-transparent text-white hover:bg-white hover:text-red-500 px-10 border-2 border-white rounded-full hover:border-red-500">
          SUBMIT
        </button>
      </div>
      <button className="text-xl font-semibold bg-transparent text-white hover:bg-white hover:text-red-500 px-10 border-2 border-white rounded-full hover:border-red-500">
        SUBMIT
      </button>
      <div>
        <button className="flex text-lg uppercase items-center text-white bg-gradient-to-t from-[#F35A43] to-[#C1272D] hover:from-white hover:to-white hover:text-red-600 border-2 p-4 border-red-500 hover:border-red-500 rounded-full">
          <p className="px-10">KNOW MORE</p>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div class=" relative">
        <p className=" px-60">Relative paresssssssssnt</p>
        <div class="absolute bottom-0 left-0 ...">
          <p>Absolute child</p>
        </div>
      </div>

      {/* <div className=" flex justify-start  ">
        <div className="  ">
          <Image className=" " src={mate} alt="Myimage" />
        </div>
        <div className="grid content-center px-20  ">
          <div className=" ">
            <h2 className="text-5xl font-bold">
              Design solutions <br /> to improve products
            </h2>
            <p className=" text-xl py-10 ">
              We help our clients make realize their most Important <br />
              business goals. We help our clients make realize their
              <br />
              most Important business goals. business goals. We help <br />
              our clients make realize their most Important business.
            </p>

            <button className="flex  items-center   font-semibold  gap-10 border bg-red-500  text-white  rounded-full p-2 px-4">
              <span className="pl-4">Know more</span>
              <svg
                className="w-5 h-5  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-20 flex justify-end">
        <div className="grid content-center ">
          <div className=" px-10">
            <h2 className="text-5xl font-bold">
              Develop powerful <br /> apps for your business
            </h2>
            <p className=" text-xl py-10 ">
              We help our clients make realize their most Important <br />
              business goals. We help our clients make realize their
              <br />
              most Important business goals. business goals. We help <br />
              our clients make realize their most Important business.
            </p>
            <button className="flex  items-center   font-semibold  gap-10 border-2 border-red-500   text-red-500  rounded-full p-2 px-4">
              <span className="pl-4">Know more</span>
              <svg
                className="w-5 h-5  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="  ">
            {/* <Image className=" " src={mate2} alt="Myimage" /> */}
      {/* <Image
              className="  "
              src={mate2}
              alt="Myimage"
              height={730}
              width={800}
            />
          </div>
        </div> */}
      {/* <div className=" flex justify-end gap-32  items-center  ">
        <div className="ml-10">
          <p className="text-xl uppercase pl-10">Our Goal</p>
          <h1 className="text-7xl font-bold pl-10">
            Better products <br /> for your users
          </h1>
          <p className=" pt-7 text-xl pl-10">
            We help our clients realize their most important business goals.
          </p>
          <div className=" pt-10  content-center  grid justify-items-start px-6">
            <div className="grid grid-cols-2 ">
              <button
                type="button"
                className="place-self-center  text-white  bg-red-700  focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                GET IN TOUCH
              </button>
              <div>
                <div className=" flex ">
                  <strong className=" px-2 self-center"> WATCH VIDEO</strong>
                  <button
                    type="button"
                    className=" text-white  bg-red-700    rounded-full text-sm px-2 py-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="  "
            src={group}
            alt="Myimage"
            height={1080}
            width={788}
          />
        </div>
      </div> */}
      {/* get-in-touch */}
      {/* <div className=" flex justify-center gap-40 pt-20 pb-40 bg-red-500">
        <div className=" text-left text-white">
          <h1 className="text-xl font-thin ">GET IN TOUCH</h1>
          <p className="text-5xl font-bold pt-10">
            Let’s start with <br /> your dream <br />
            project
          </p>
          <p className="text-2xl pt-10">
            We help our clients make realize their most
          </p>
          <span className="text-2xl font-bold">+1 123 456 7890</span>
        </div>
        <div className="grid content-center ">
          <form action="">
            <div className="">
              <input
                className="pb-4  text-base leading-tight focus:outline-none border-b-2   w-full bg-red-500 text-white"
                type="text"
                aria-label="Email"
                placeholder="Email "
              />
              <input
                className="py-4 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full bg-red-500 text-white"
                type="text"
                aria-label="Full name"
                placeholder="Full name"
              />
              <input
                className="py-20  text-base leading-tight focus:outline-none border-b-2 w-full pt-14 bg-red-500  text-white"
                type="text"
                aria-label="MEssage"
                placeholder="Message"
              />
              <div className="pt-14 w-36 ">
                <button className=" text-2xl text-white bg-transparent hover:bg-white text-black-700 font-semibold hover:text-red-500 py-2 px-8 border-2 border-white hover:border-transparent rounded-full">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      {/* end-get-in-touch */}
      {/* start-Portfolio */}
      {/* <div>
        <div className=" text-center py-40 ">
          <span className="text-xl ">PORTFOLIO</span>
          <p className="text-5xl font-bold pt-10">
            People don’t buy what you do, <br /> they buy why you do it.
          </p>
        </div>
        <div className="">
          <div className=" flex justify-center gap-20 text-2xl pb-10  ">
            <button className=" hover:text-red-700 ">All</button>
            <button className="hover:text-red-700 ">Branding</button>
            <button className="hover:text-red-700 ">UX/UI</button>
            <button className=" hover:text-red-700 ">Marketing </button>
          </div>
          <Image
            className=" mx-40 "
            src={close}
            alt="Myimage"
            height={39}
            width={39}
          />
          <div className="pt-96 float-left ">
            <button className=" flex items-center text-white  hover:text-red-700 text-xl bg-red-500  py-4 rounded-r-full  gap-4 ">
              <span className="text-base ">KNOW MORE</span>
              <div className="px-8">
                <svg
                  className="w-5 h-5  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>

          <div className=" grid grid-cols-3 justify-items-center pb-20 mx-80 px-6 pt-10 ">
            <div className="  h-439 w-370 border-2 rounded-lg drop-shadow-lg">
              <div>
                <Image className=" " src={bag} alt="Myimage" />
                <div className=" px-6 pt-2">
                  <p className="text-lg font-bold">Firefox Org</p>
                  <span className=" text-base ">Branding</span>
                </div>
              </div>
            </div>

            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* end-Portfolio */}
      {/* <div className=" flex justify-between pt-40 pb-10">
        <div className="">
          <Image
            src={mapMini}
            alt="Myimage"
            className="object-none object-left-center  h-screen 
              "
            height={902}
            width={900}
          />
        </div>
        <div className=" ">
          <div className=" flex justify-center">
            <form>
              <p className=" text-2xl text-center text-gray-500 pt-28">
                look forward to hearing from you,
              </p>
              <div className="grid justify-items-center ">
                <input
                  className="py-4  text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-20 "
                  type="text"
                  aria-label="Email"
                  placeholder="Email "
                />
                <input
                  className="py-4 text-base  leading-tight focus:outline-none border-b-2 w-7/12 pt-20 "
                  type="text"
                  aria-label="Email"
                  placeholder="Website Link"
                />
                <input
                  className="py-28  text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-20 "
                  type="text"
                  aria-label="Email"
                  placeholder="Message"
                />
              </div>

              <div className="pl-40 pt-20 w-36">
                <button className=" text-2xl bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 border-4 border-red-500 hover:border-transparent rounded-full">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      {/* read-what-team */}
      {/* <div>
        <div className="flex justify-center pb-20 pt-10">
          <h1 className="text-5xl font-bold text-center">
            Read what our team has <br /> published on the internet
          </h1>
        </div>

        <div className=" flex justify-center pt-10 gap-8 pb-10">
          <div className=" w-370 h-395  border  rounded-md shadow-lg">
            <Image
              className=" "
              src={mother}
              alt="Myimage"
              height={266}
              width={370}
            />
            <div className="flex justify-center ">
              <div>
                <h2 className=" text-left pt-4 text-xl font-bold">
                  Good newspaper Is a Nation <br /> talking to itself.
                </h2>
                <p className="text-sm pt-4  ">
                  27 feb, 2023{" "}
                  <span className=" text-red-500">by John Doe</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" w-370 h-395  border  rounded-md shadow-lg">
            <Image
              className=" "
              src={mother}
              alt="Myimage"
              height={266}
              width={370}
            />
            <div className="flex justify-center ">
              <div>
                <h2 className=" text-left pt-4 text-xl font-bold">
                  Good newspaper Is a Nation <br /> talking to itself.
                </h2>
                <p className="text-sm pt-4  ">
                  27 feb, 2023{" "}
                  <span className=" text-red-500">by John Doe</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" w-370 h-395  border  rounded-md shadow-lg">
            <Image
              className=" "
              src={mother}
              alt="Myimage"
              height={266}
              width={370}
            />
            <div className="flex justify-center ">
              <div>
                <h2 className=" text-left pt-4 text-xl font-bold">
                  Good newspaper Is a Nation <br /> talking to itself.
                </h2>
                <p className="text-sm pt-4  ">
                  27 feb, 2023{" "}
                  <span className=" text-red-500">by John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* projects-we-love */}
      {/* <div className="flex justify-around ">
        <div className="">
          <span className=" text-xl  text-gray-500"> PORTFOLIO</span>
          <h1 className=" text-5xl font-bold pt-8">Projects we love</h1>
        </div>
        <div className="flex  self-end text-lg font-semibold">
          <button className="pr-20  text-red-500">PREV</button>
          <button className="px-2  text-gray-300">NEXT</button>
          <button className="pl-20 text-red-500">View all</button>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-16 pt-28 ">
          <div>
            <Image
              className=" "
              src={pro}
              alt="Myimage"
              height={128}
              width={401}
            />
          </div>
          <div>
            <Image
              className=" "
              src={pro}
              alt="Myimage"
              height={128}
              width={401}
            />
          </div>

          <div>
            <Image
              className=" "
              src={pro}
              alt="Myimage"
              height={128}
              width={401}
            />
          </div>

          <div>
            <Image
              className=" "
              src={pro}
              alt="Myimage"
              height={128}
              width={401}
            />
          </div>
        </div>
      </div> */}
      {/*end- projects-we-love */}
      {/* <div className=" flex justify-start  ">
        <div className="  ">
          <Image className=" " src={mate} alt="Myimage" />
        </div>
        <div className="grid content-center px-20  ">
          <div className=" ">
            <h2 className="text-5xl font-bold">
              Design solutions <br /> to improve products
            </h2>
            <p className=" text-xl py-10 ">
              We help our clients make realize their most Important <br />
              business goals. We help our clients make realize their
              <br />
              most Important business goals. business goals. We help <br />
              our clients make realize their most Important business.
            </p>

            <button className="flex  items-center   font-semibold  gap-10 border bg-red-500  text-white  rounded-full p-2 px-4">
              <span className="pl-4">Know more</span>
              <svg
                className="w-5 h-5  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-20 flex justify-end">
        <div className="grid content-center ">
          <div className=" px-10">
            <h2 className="text-5xl font-bold">
              Develop powerful <br /> apps for your business
            </h2>
            <p className=" text-xl py-10 ">
              We help our clients make realize their most Important <br />
              business goals. We help our clients make realize their
              <br />
              most Important business goals. business goals. We help <br />
              our clients make realize their most Important business.
            </p>
            <button className="flex  items-center   font-semibold  gap-10 border-2 border-red-500   text-red-500  rounded-full p-2 px-4">
              <span className="pl-4">Know more</span>
              <svg
                className="w-5 h-5  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="  ">
            <Image className=" " src={mate2} alt="Myimage" />
          </div>
        </div>
      </div>
      <div className="bg-red-500 flex justify-center gap-32 p-28 text-white">
        <div className=" grid justify-items-center  ">
          <div className="pt-4">
            <span className="text-2xl font-light">
              WE HELP WITH <br />
            </span>
            <p className="text-5xl font-bold pb-10 pt-2">
              Building <br /> better
              <br /> solutions
            </p>
            <button className="flex text-lg uppercase  items-center  bg-transparent text-white hover:bg-blue-500 text-black-700  hover:text-white   border-2 p-2  border-white hover:border-transparent rounded-full">
              <p className="px-6"> Our Services </p>
              <svg
                className="w-5 h-5  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-6">
          <div>
            <div
              className="  p-6 rounded-lg pb-10"
              style={{
                background:
                  "linear-gradient(233deg, transparent, #C1272D 0%, #F35A43 100%)",
              }}
            >
              <Image src={monitor} alt="Myimage" className=" pb-2" />
              <h3 className="font-bold text-xl">Design</h3>
              <p className=" text-base pt-2">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
            </div>
          </div>
          <div className="">
            <div
              className="  p-6 rounded-lg pb-10"
              style={{
                background:
                  "linear-gradient(233deg, transparent, #C1272D 0%, #F35A43 100%)",
              }}
            >
              <Image src={monitor} alt="Myimage" className=" pb-2" />
              <h3 className="font-bold text-xl">Development</h3>
              <p className=" text-base pt-2">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
            </div>
          </div>
          <div className=" ">
            <div
              className="  p-6 rounded-lg   "
              style={{
                background:
                  "linear-gradient(233deg, transparent, #C1272D 0%, #F35A43 100%)",
              }}
            >
              <h3 className="font-bold text-xl">Project management</h3>
              <p className=" text-base ">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
              <button className="flex  items-center  pt-12  font-semibold  gap-10">
                Know more
                <svg
                  className="w-5 h-5  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div
              className="  p-6 rounded-lg pb-10"
              style={{
                background:
                  "linear-gradient(233deg, transparent, #C1272D 0%, #F35A43 100%)",
              }}
            >
              <Image src={monitor} alt="Myimage" className=" pb-2" />
              <h3 className=" font-bold text-xl">Testing & QA</h3>
              <p className=" text-base pt-2">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className=" flex justify-center gap-24">
        <div className="self-center ">
          <p className="text-xl uppercase text-gra">Our Goal</p>
          <h1 className="text-7xl font-bold">
            Better products <br /> for your users
          </h1>
          <p className=" pt-8 text-xl text-gray-400">
            We help our clients realize their most important <br /> business
            goals.
          </p>
          <div className=" pt-10  content-center  grid justify-items-start ">
            <div className="flex justify-start gap-28  ">
              <button
                type="button"
                className="place-self-center text-base  text-white  bg-red-700  focus:outline-none focus:ring-4  font-medium rounded-full  px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                GET IN TOUCH
              </button>
              <div>
                <div className=" flex ">
                  <strong className=" px-2 self-center text-base">
                    {" "}
                    WATCH VIDEO
                  </strong>
                  <button
                    type="button"
                    className=" text-white  bg-red-700    rounded-full text-sm px-2 py-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <a href="#" className="flex items-center ">
            <Image src={group} alt="Myimage" />
          </a>
        </div>
      </div> */}
      {/* <div className=" flex justify-center gap-20 my-56  ">
        <div className=" ">
          <p className="text-xl uppercase">Our Goal</p>
          <h1 className="text-7xl font-bold">
            Better products <br /> for your users
          </h1>
          <p className=" pt-7 text-xl">Our Goal</p>
          We help our clients realize their most important business goals.
          <div className=" pt-10  content-center  grid justify-items-start">
            <div className="grid grid-cols-2 ">
              <button
                type="button"
                className="place-self-center  text-white  bg-red-700  focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                GET IN TOUCH
              </button>
              <div>
                <div className=" flex ">
                  <strong className=" px-2 self-center"> WATCH VIDEO</strong>
                  <button
                    type="button"
                    className=" text-white  bg-red-700    rounded-full text-sm px-2 py-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="flex items-center ">
            <Image src={group} alt="Myimage" />
          </a>
        </div>
      </div> */}

      {/* need-too-fix */}
      {/* What clients value most */}
      {/* <div
        className="main p-24"
        style={{
          background:
            "linear-gradient(233deg, transparent, #C1272D 0%, #F35A43 100%)",
        }}
      >
        <h1 className=" text-center text-5xl font-bold text-white pb-6">
          What clients value most <br /> about us
        </h1>
        <p className=" text-center text-xl text-white tracking-wide">
          Find a team of digital solutions you can rely on. Every day, we build
          trust through communication,
          <br /> transparency, and results.
        </p>
        <div
          className=" flex   gap-10 justify-center text-white pt-20 "
          style={{
            background:
              "linear-gradient(233deg, transparent, #C1272D 0%, #F35A43 100%)",
          }}
        >
          <div className="bg-gradient-to-br from-red-600 to-pink-300 p-4 rounded-lg">
            <h1 className=" font-bold text-2xl">Transparency</h1>
            <p className=" text-base pt-4 pb-10">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
            <button className=" text-base font-semibold">
              Know more
              <svg
                width="18"
                height="7"
                viewBox="0 0 18 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5704 2.58734L14.8227 0.510459C14.6708 0.333165 14.3922 0.307837 14.1896 0.459804C14.0123 0.61177 13.9869 0.890376 14.1389 1.093L15.7852 3.04324H1.75361C1.50033 3.04324 1.29771 3.24586 1.29771 3.49914C1.29771 3.75241 1.50033 3.95504 1.75361 3.95504H15.7852L14.1389 5.90528C13.9869 6.08257 14.0123 6.36118 14.1896 6.53847C14.2655 6.61445 14.3668 6.63978 14.4682 6.63978C14.5948 6.63978 14.7214 6.58913 14.7974 6.48782L16.545 4.41094C17.0009 3.85373 17.0009 3.09389 16.5704 2.58734Z"
                  fill="#FFFFFF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.1896 0.459804C14.3922 0.307837 14.6708 0.333165 14.8227 0.510459L16.5704 2.58734C17.0009 3.09389 17.0009 3.85373 16.545 4.41094L14.7974 6.48782C14.7214 6.58913 14.5948 6.63978 14.4682 6.63978C14.3668 6.63978 14.2655 6.61445 14.1896 6.53847C14.0123 6.36118 13.9869 6.08257 14.1389 5.90528L15.7852 3.95504H1.75361C1.50033 3.95504 1.29771 3.75241 1.29771 3.49914C1.29771 3.24586 1.50033 3.04324 1.75361 3.04324H15.7852L14.1389 1.093C13.9869 0.890376 14.0123 0.61177 14.1896 0.459804ZM15.0097 2.68302H1.75362C1.3014 2.68302 0.9375 3.04692 0.9375 3.49914C0.9375 3.95136 1.3014 4.31525 1.75362 4.31525H15.0097L13.8654 5.67085C13.8651 5.67123 13.8648 5.67161 13.8644 5.67199C13.5725 6.01385 13.646 6.50432 13.9348 6.79318C14.1022 6.96055 14.3113 7 14.4682 7C14.6795 7 14.9203 6.91713 15.0784 6.71335L16.8207 4.64286L16.8238 4.63904C17.382 3.95682 17.3958 3.00293 16.8455 2.35478C16.8453 2.35453 16.845 2.35429 16.8448 2.35404L15.0984 0.278534L15.0962 0.276033C14.8097 -0.0583053 14.3139 -0.0837548 13.9734 0.17163L13.964 0.17867L13.9551 0.186306C13.6208 0.472882 13.5953 0.968616 13.8507 1.30913L13.857 1.31743L15.0097 2.68302Z"
                  fill="#FFFFFF"
                />
              </svg>
            </button>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-pink-300 p-4 rounded-lg">
            <h1 className=" font-bold text-2xl">Transparency</h1>
            <p className=" text-base pt-4 pb-10">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
            <button className=" text-base font-semibold">Know more </button>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-pink-300 p-4 rounded-lg">
            <h1 className=" font-bold text-2xl">Transparency</h1>
            <p className=" text-base pt-4 pb-10">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
            <button className=" text-base font-semibold">Know more </button>
          </div>
        </div>
      </div> */}
      {/* end What clients value most */}
      {/* <div>
        <h1 className=" text-center text-5xl font-bold pb-16 pt-20">
          Meet the team
        </h1>

        <div className=" flex justify-center">
          <p className="text-xl ">
            We’re a diverse team that works as fancies attention to details,
            enjoys beers on Friday nights and aspires to design the dent in{" "}
            <br />
            the universe.
          </p>
        </div>

        <div className="flex justify-center gap-8 pt-20 pb-24">
          <div>
            <Image src={pic} alt="Myimage" />
            <div className=" pt-2">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
          <div>
            <Image src={pic} alt="Myimage" />
            <div className=" pt-2">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
          <div>
            <Image src={pic} alt="Myimage" />
            <div className=" pt-2">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
          <div>
            <Image src={pic} alt="Myimage" />
            <div className=" pt-2">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
        </div>
      </div>
      {/* getintouch   */}
      {/* <div className="flex  justify-center bg-red-500 p-20">
        <div className=" text-center pt-10">
          <h1 className=" text-5xl font-bold text-white">
            What do our clients say <br /> about us?
          </h1>
          <div className="flex justify-center pt-4">
            <Image src={avatar} alt="Myimage" />
          </div>
          <p className="text-white text-2xl font-thin ">
            We help our clients make realize their most Important <br />
            business goals. We help our clients make realize their <br /> most
            Important business goals. business goals. We help <br />
            our clients make realize their most Important business.
          </p>
          <h1 className="text-white pt-10 font-bold text-lg">JOHN DOE</h1>
          <span className="text-white pb-10 text-sm font-extralight">
            CEO, Boogle Inc.
          </span>
        </div>
      </div> */}
      {/* <div className="main mt-10">
        <div className="flex justify-center items-center gap-x-48">
          <div className=" ">
            <h1 className="text-xl pb-4">GET IN TOUCH</h1>
            <span className="text-5xl font-bold ">
              Let’s start with
              <br /> your dream <br />
              project
            </span>
            <p className=" pt-8 text-xl	">
              We help our clients make realize their most <br />
              <strong>+1 123 456 7890</strong>
            </p>
          </div>
          <form className="flex justify-center items-center">
            <div className="items-center">
              <input
                className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-20  w-full "
                type="text"
                aria-label="Email"
                placeholder="Email "
              />
              <input
                className="py-4 text-base  leading-tight focus:outline-none border-b-2   pt-20 w-full "
                type="text"
                aria-label="Email"
                placeholder="Full name"
              />

              <input
                className="py-28  text-base leading-tight focus:outline-none border-b-2 w-full pt-20 "
                type="text"
                aria-label="Email"
                placeholder="Message"
              />
              <div className="pt-20 w-36">
                <button className=" text-2xl text-red-500 bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-8 border-2 border-red-500 hover:border-transparent rounded-full">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}
