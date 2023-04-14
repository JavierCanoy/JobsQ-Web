import Image from "next/image";
//footer-image
import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";

import pic from "../public/pic.png";
import avatar from "../public/avatar.png";
import team from "../public/team.png";

import logo from "../public/images/logo/logo.png";

import group from "../public/images/home/group.png";
import group1 from "../public/images/home/group1.png";

import one from "../public/images/home/one.png";
import two from "../public/images/home/two.png";
import tree from "../public/images/home/tree.png";
import four from "../public/images/home/four.png";

export default function Home() {
  return (
    <>
      {/* header*/}
      <header className="sticky backdrop-blur-md  bg-white/90 w-full  top-0 left-0 shadow-sm ">
        <div className="border-black-500  border  px-4 p-7 grid grid-cols-2   ">
          {/* logo */}
          <div className=" flex  mx-12 ">
            <a href="#" className="">
              <Image
                src={logo}
                alt="Picture of the author"
                width={62.02}
                height={60.25}
              />
            </a>
            <div className=" px-4 grid content-end pb-1">
              <span className=" self-center  text-2xl  font-bold  hover:text-costumeRed ">
                MABOLOTECH IT SOLUTION
              </span>
              <p className=" text-xs font-semibold whitespace-nowrap ">
                Crafting Software Solutions that drive business growth
              </p>
            </div>
          </div>
          {/* menu */}
          <div className="grid justify-center  ">
            <ul className="flex  gap-6   items-center   ml-28">
              <li>
                <a
                  href="#"
                  className=" text-xl  font-semibold block py-2 pl-3 pr-4    hover:text-costumeRed      "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold   block py-2 pl-3 pr-4     hover:text-costumeRed     "
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="  text-xl font-semibold  block py-2 pl-3 pr-4  hover:text-costumeRed "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-xl  font-semibold  block py-2 pl-3 pr-4 hover:text-costumeRed"
                >
                  Our Work
                </a>
              </li>
              <li>
                <button className="mx-3 text-xl font-semibold   hover:bg-costumeRed text-black-700 hover:text-white   px-12 p-3  border-2 border-red-700  rounded-full">
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* header-end */}
      {/* start-about-us */}
      <div className="about-us  ">
        <div
          className="relative  bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://tecdn.b-cdn.net/img/new/slides/146.webp")',
            height: "579px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-75 bg-gradient-to-r from-[#F35A43] to-[#C1272D]">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white ">
                <p className="text-xl font-light">ABOUT US</p>
                <h1 className="mb-6 text-5xl font-bold pt-4">
                  LEADING THE BEST <br /> DIGITAL AGENCY IN TOWN
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-about-us */}
      {/* we do great things together */}
      <div className="  px-80  mx-20  pt-10">
        <h1 className=" text-5xl font-bold pt-20 pb-2 text-left">
          We do great things <br /> together
        </h1>
        <p className="   text-xl text-left pt-24 pb-20 text-gray-400">
          MaboloTech IT Solutions was established in 2020 amidst the COVID-19
          pandemic, <br /> aiming to help friends and former colleagues affected
          by job loss. We understand the <br /> difficulties of navigating
          uncertain times and strive to provide affordable software
          <br />
          development services and IT solutions to individuals and businesses
          locally and <br /> internationally.
          <br />
          Our team of experienced and talented professionals is passionate about
          delivering
          <br />
          innovative and customized technology solutions. We dedicate to helping
          our clients <br /> achieve their goals and stay ahead of the
          competition through cutting-edge <br /> technologies and processes.
          <br />
          At MaboloTech IT Solutions, every project is unique and requires a
          personalized <br />
          approach. That's why we work closely with our clients to understand
          their specific <br />
          needs and goals and to create tailored solutions that meet those
          needs. Whether it's
          <br /> developing a new website or improving the efficiency of your
          existing systems, we
          <br /> have the expertise and experience to deliver results that
          exceed your expectations.
        </p>
      </div>
      {/* end-we do great things together */}
      {/* founded */}
      <div>
        <h1 className=" text-center text-5xl font-bold pt-20 pb-20 mb-2 mt-1">
          Founded on trust. Focused on <br /> relationships with client.
        </h1>
        <div className=" flex justify-center pt-28 pb-24">
          <p className=" text-left text-xl text-gray-400">
            We proudly offer various services, including software development,
            IT consulting, and support, to help our clients reach their <br />
            full potential. Our commitment to excellence and customer
            satisfaction is evident in every project we undertake, and we
            <br />
            are confident that you will be impressed with the results.
            <br /> At MaboloTech IT Solutions, we are more than just a
            technology company - we are a partner in your success. So, look no
            <br /> further if you're looking for a reliable and affordable
            solution for your IT needs. Contact us today to see how we can help
            you
            <br /> achieve your goals.
          </p>
        </div>
        <div className="image flex justify-center gap-9 pt-10 pb-24 ">
          <div className="">
            <Image
              src={group}
              alt="Myimage"
              className=" rounded-lg"
              height={589}
              width={726}
            />
          </div>
          <div className="pt-28">
            <Image
              src={group1}
              alt="Myimage"
              className=" rounded-lg"
              height={589}
              width={726}
            />
          </div>
        </div>
      </div>
      {/* What clients value most */}
      <div className="main p-24 bg-gradient-to-t from-[#F35A43] to-[#C1272D]">
        <h1 className=" text-center text-5xl font-bold text-white pb-6">
          What clients value most <br /> about us
        </h1>
        <p className=" text-center text-xl text-white tracking-wide">
          Find a team of digital solutions you can rely on. Every day, we build
          trust through communication,
          <br /> transparency, and results.
        </p>
        <div className=" flex   gap-10 justify-center text-white pt-20 ">
          <div className="bg-gradient-to-r from-[#F5B596] to-[#EB3449] p-4 rounded-lg">
            <h1 className=" font-bold text-2xl">Transparency</h1>
            <p className=" text-base pt-4 pb-10">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
            <button className=" flex items-center text-base font-semibold ">
              <span className="pr-8">Know more </span>
              <svg
                className="w-5 h-5 "
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
          <div className="bg-gradient-to-r from-[#F5B596] to-[#EB3449] p-4 rounded-lg">
            <h1 className=" font-bold text-2xl">Transparency</h1>
            <p className=" text-base pt-4 pb-10">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
            <button className=" flex items-center text-base font-semibold ">
              <span className="pr-8">Know more </span>
              <svg
                className="w-5 h-5 "
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
          <div className="bg-gradient-to-r from-[#F5B596] to-[#EB3449] p-4 rounded-lg">
            <h1 className=" font-bold text-2xl">Transparency</h1>
            <p className=" text-base pt-4 pb-10">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
            <button className=" flex items-center text-base font-semibold ">
              <span className="pr-8">Know more </span>
              <svg
                className="w-5 h-5 "
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
      {/* end What clients value most */}
      {/* meet-the-team */}
      <div>
        <h1 className=" text-center text-5xl font-bold pb-16 pt-28">
          Meet the team
        </h1>

        <div className=" flex justify-center">
          <p className="text-xl  text-gray-400 pb-4">
            We’re a diverse team that works as fancies attention to details,
            enjoys beers on Friday nights and aspires to design the dent in
            <br />
            the universe.
          </p>
        </div>
        <div className="flex justify-center gap-2 pt-20 pb-32 mx-4">
          <div>
            <Image src={one} alt="Myimage" height={432} width={550} />
            <div className=" pt-4">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
          <div>
            <Image src={two} alt="Myimage" height={432} width={550} />
            <div className=" pt-4">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
          <div>
            <Image src={tree} alt="Myimage" height={432} width={550} />
            <div className=" pt-4">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
          <div>
            <Image src={four} alt="Myimage" height={432} width={550} />
            <div className=" pt-4">
              <strong className="text-3xl ">John S. Doe</strong>
              <p className="text-lg text-red-500 font-semibold">CoFounder</p>
            </div>
          </div>
        </div>
      </div>
      {/*end meet-the-team */}

      {/*  What do our clients   */}
      <div className="flex  justify-center  p-28  bg-gradient-to-t from-[#F35A43] to-[#C1272D]">
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
          <div className=" flex justify-center pt-20 ">
            <div className="flex  self-end text-lg font-semibold gap-32">
              <button className="  text-gray-300">PREV</button>
              <button className=" text-gray-300">NEXT</button>
            </div>
          </div>
        </div>
      </div>
      {/* Let’s start withyour dreamproject */}
      <div className="main mt-10">
        <div className="flex justify-center ">
          <div className="grid content-center mr-20 px-10 pt-4">
            <h1 className="text-xl pb-10 text-gray-400">GET IN TOUCH</h1>
            <span className="text-5xl font-bold ">
              Let’s start with
              <br /> your dream <br />
              project
            </span>
            <p className=" pt-10 text-xl font-semibold	">
              We help our clients make realize their most <br />
            </p>
            <strong className="text-xl font-bold pt-2">+1 123 456 7890</strong>
          </div>
          <div className="">
            <form action="">
              <div>
                <input
                  className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-20  w-full "
                  type="text"
                  aria-label="Email"
                  placeholder="Email "
                />
                <input
                  className="py-6 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full  "
                  type="text"
                  aria-label="Full name"
                  placeholder="Full name"
                />
                <input
                  className="py-20  text-base leading-tight focus:outline-none border-b-2 w-full  "
                  type="text"
                  aria-label="Message"
                  placeholder="Message"
                />
                <div className="pt-14 ">
                  <button className=" text-sm text-red-500 bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-3 px-12 border-2 border-red-500 hover:border-transparent rounded-full">
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*end Let’s start withyour dreamproject */}

      {/* subscribes-laters */}
      <div className=" pt-32 pb-10  mt-24   bg-gradient-to-r from-[#F35A43] to-[#F35A43]">
        <div className="flex justify-evenly    ">
          <div className="px-96 ">
            <h5 className=" text-center text-xl font-light text-white  px-96 mx-10  ">
              NEWSLETTER
            </h5>
          </div>
          <button className=" text-2xl bg-transparent text-white hover:bg-blue-500 text-black-700 font-semibold hover:text-white   pb-2  border-white hover:border-transparent rounded-full">
            x
          </button>
        </div>
        <h2 className=" text-center text-5xl font-bold text-white">
          Subscribe Company newsletter
        </h2>
        <form action="  ">
          <div className="flex justify-center gap-14 p-28 ">
            <input
              className=" text-base w-80  text-white s leading-tight focus:outline-none border-b-2    bg-transparent placeholder-white "
              type="text"
              aria-label="Your-name"
              placeholder="Your name "
            />
            <input
              className="py-4   text-base w-80 text-white  leading-tight focus:outline-none border-b-2  bg-transparent placeholder-white  "
              type="text"
              aria-label="Email"
              placeholder="Email"
            />
            <button className="  text-xl font-semibold  bg-transparent text-white hover:bg-white   hover:text-red-500  px-10 border-2  border-white hover:border-red-500  rounded-full">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      {/* end-subscribes-laters */}
      {/* footer-start */}
      <footer className="text-gray-600  ">
        <div className=" px-5 pt-8 pb-20  flex flex-row flex-wrap justify-center  ">
          <div className="w-64  mr-24 ">
            <a href="#" className="flex items-center pb-2 px-4">
              <Image
                src={logo}
                alt="Picture of the author"
                width={62}
                height={60}
              />
            </a>
            <span className="font-bold text-base  text-red-700 ">
              MABOLOTECH IT SOLUTION
            </span>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor is simply dummy <br />
              text of printing.
            </p>
          </div>

          <div className="flex flex-wrap  mx-8 gap-40 mt-8 ">
            <div className="grid content-end mb-2">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                Services
              </h2>
              <nav className="list-none">
                <li className=" mt-3">
                  <a className="text-gray-400  ">Development</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Design Sprint</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">UX Design</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Online Marketing</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Content</a>
                </li>
              </nav>
            </div>
            <div className="grid content-end mb-2">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                About us
              </h2>
              <nav className="list-none">
                <li className=" mt-3 ">
                  <a className="text-gray-400  ">About us</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Team</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Portfolio</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">News & Article</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Career</a>
                </li>
              </nav>
            </div>
            <div className="  grid   content-end mb-20">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                Get in touch
              </h2>
              <div className="list-none">
                <li className=" mt-2 ">
                  <a className="  text-gray-400 ">
                    99 Wall Street <br /> New York, NY 10005
                  </a>
                </li>
                <ul className="mt-8 flex text-gray-400 gap-2">
                  <li>
                    <a href="#" target="_blank" title="">
                      <Image src={facebook} alt="Myimage" />
                    </a>
                  </li>

                  <li className="ml-6">
                    <a href="#" target="_blank" title="">
                      <Image src={skype} alt="Myimage" />
                    </a>
                  </li>

                  <li className="ml-6">
                    <a href="#" target="_blank" title="">
                      <Image src={linkedin} alt="Myimage" />
                    </a>
                  </li>

                  <li className="ml-6">
                    <a href="#" target="_blank" title="">
                      <Image src={instagram} alt="Myimage" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className=" text-center text-base pt-3 pb-48 text-gray-400">
          Copyrighted © 2023 Mabolotech IT Solution
        </p>
      </footer>
      {/* footer-end */}
    </>
  );
}
