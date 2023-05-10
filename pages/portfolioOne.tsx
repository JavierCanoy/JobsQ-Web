import Image from "next/image";
import Link from "next/link";

export default function PortfolioOne() {
  return (
    <>
      <div className=" p-0 m-0">
        {/* header-start */}
        <header className="  sticky backdrop-blur-md z-50  w-full bg-white/90  top-0 left-0 shadow-sm ">
          <div className="border-black-500  border  px-4 p-7 grid grid-cols-2   ">
            {/* logo */}
            <div className=" flex  mx-12 ">
              <Link href="#">
                <Image
                  src="/images/logo/logo.png"
                  alt="Picture of the author"
                  width={62.02}
                  height={60.25}
                />
              </Link>
              <div className=" px-4 grid content-end pb-1">
                <span className=" self-center  text-2xl  font-Poppins font-bold  text-costumeRed ">
                  MABOLOTECH IT SOLUTION
                </span>
                <span className=" text-xs font-OpenSans  whitespace-nowrap ">
                  Crafting Software Solutions that drive business growth
                </span>
              </div>
            </div>
            {/* menu */}
            <div className="grid justify-center  ">
              <ul className="flex   gap-6   items-center   ml-28">
                <li>
                  <Link
                    href="#"
                    className=" text-xl font-semibold block py-2 pl-3 pr-4    hover:text-costumeRed      "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xl font-semibold   block py-2 pl-3 pr-4     hover:text-costumeRed     "
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="  text-xl font-semibold  block py-2 pl-3 pr-4  hover:text-costumeRed "
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className=" text-xl  font-semibold  block py-2 pl-3 pr-4 hover:text-costumeRed"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <button className="mx-3 text-xl font-semibold   hover:bg-costumeRed text-black-700 hover:text-white   px-10 p-3  border-2 border-costumeRed  rounded-full">
                      Contact us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* header-end */}

        {/* about-us */}
        <div className="about-us  ">
          <div className="relative ">
            <div className="image">
              <Image
                src="/images/portfolionOne/profile.png"
                alt="Myimage"
                className=" w-full"
                width={1800}
                height={579}
              />
            </div>

            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-75 bg-gradient-to-r from-costumeOrange to-costumeRed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white ">
                  <p className="text-xl font-OpenSans font-light">SERVICES</p>

                  <h1 className="mb-6 text-5xl font-Poppins font-bold pt-4">
                    Solution we provide
                  </h1>
                  <p className="text-xl font-OpenSans font-light">
                    With every single one of our clients we bring forth a deep
                    passion for creative problem <br /> solving innovations
                    forward thinking brands boundaries
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end-about-us */}

        {/* full-software */}
        <div>
          <div className="flex flex-wrap justify-around mx-32 px-4 pt-14">
            <div className="  ">
              <Link href="#">
                <button className="h-67 w-311 bg-gradient-to-t from-[#F35A43] to-[#C1272D] rounded-lg text-white font-Poppins font-bold hover:from-white hover:to-white hover:text-red-700 hover:border-red-700 border-2 px-6 py-3">
                  Full Software Development
                </button>
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-base font-Poppins font-bold">
                Mobile App Development
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-Poppins font-bold">
                Search Engine Optimization (SEO)
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-Poppins font-bold">
                Software Development Outsourcing
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-2 pt-16">
            <div className=" mx-44 px-10">
              <h1 className=" text-5xl font-Poppins font-bold">
                Full Software Development Service:
              </h1>
            </div>
            <div>
              <p className="text-xl font-OpenSans">
                Welcome to our Full Software Development service, where we
                specialize in <br />
                delivering high-quality software solutions to meet our client's
                unique needs <br /> and requirements. Our experienced software
                developers and project <br /> managers dedicate themselves to
                providing a seamless software <br /> development experience from
                start to finish.
              </p>
            </div>
          </div>
        </div>
        {/*end-full-software */}

        {/*what-we-offer */}
        <div className=" pt-40 ">
          <h1 className="text-5xl font-Poppins font-bold text-center text-red-600">
            What we offer:
          </h1>
          <div className="flex justify-center gap-8 pt-16">
            <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white mb-10 pt-2">
              <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">
                01
              </h1>
              <span className="text-xl font-Poppins font-semibold">
                Requirements <br /> Gathering and Analysis:
              </span>
              <p className="text-base font-OpenSans pt-2">
                Our first step is to fully understand and analyze your business
                requirements to create a clear and concise plan for your
                software project.
              </p>
            </div>
            <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
              <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">
                02
              </h1>
              <span className="text-xl  font-Poppins font-semibold">
                Design and UI/UX:
              </span>
              <p className="text-base font-OpenSans  pt-2">
                Our experienced designers will work with you to create a
                user-friendly and visually appealing interface and the
                underlying architecture to support your software needs.
              </p>
            </div>
            <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
              <h1 className=" text-5xl font-Poppins font-bold pt-1 pb-1">03</h1>
              <span className="text-xl font-Poppins font-semibold">
                Implementation:
              </span>
              <p className="text-base font-OpenSans  pt-2">
                Our team of developers will use the latest technologies and
                programming languages to bring your software to life, ensuring
                it is fast, secure, and scalable.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-8 ">
            <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
              <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">
                04
              </h1>
              <span className="text-xl font-Poppins font-semibold">
                Testing:
              </span>
              <p className="text-base font-OpenSans  pt-2">
                Thorough testing is integral to our software development
                process. We will rigorously test your software to ensure it
                meets your requirements and operates without errors or glitches.
              </p>
            </div>
            <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
              <h1 className=" text-5xl font-Poppins font-bold pt-1 pb-1">05</h1>
              <span className="text-xl font-Poppins font-semibold">
                Maintenance and Support:
              </span>
              <p className="text-base font-OpenSans  pt-7">
                After we launch your software, we will provide ongoing care and
                support, ensuring that your software meets your needs and
                performs optimally.
              </p>
            </div>
            <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
              <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">
                06
              </h1>
              <span className="text-xl font-Poppins font-semibold ">
                Implementation:
              </span>
              <p className="text-base font-OpenSans  pt-2">
                Our team of developers will use the latest technologies and
                programming languages to bring your software to life, ensuring
                it is fast, secure, and scalable.
              </p>
            </div>
          </div>
        </div>
        {/*end-what-we-offer */}

        {/*why-clients-choose-us */}
        <div className="bg-gradient-to-t from-costumeOrange to-costumeRed  h-1013  pt-36 mt-32">
          <div className=" text-center">
            <h1 className="text-5xl text-white font-Poppins  font-bold">
              Why clients choose us
            </h1>
            <p className="pt-8 text-xl font-OpenSans font-light text-white">
              Find a team of digital solutions you can rely on. Every day, we
              build trust through communication,
              <br /> transparency, and results.
            </p>
          </div>
          <div className=" flex mx-80 justify-center gap-5 pt-24 ">
            <div className=" h-231 w-545 bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  rounded-2xl px-10  mb-8">
              <div className=" flex justify-end  ">
                <Image
                  src="/images/portfolionOne/team.png"
                  alt="Myimage"
                  width={267}
                  height={267}
                  className="  absolute"
                />
              </div>
              <div>
                <h1 className=" text-white text-2xl font-Poppins font-bold pt-14">
                  Experienced Team
                </h1>

                <p className=" pt-2 text-white font-OpenSans ">
                  Our software developers and project managers have years of
                  <br />
                  experience delivering top-quality software solutions to
                  clients
                  <br />
                  in various industries.
                </p>
              </div>
            </div>
            <div className=" h-231 w-545 bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  rounded-2xl px-10 ">
              <div className=" flex justify-end  ">
                <Image
                  src="/images/portfolionOne/united.png"
                  alt="Myimage"
                  width={221}
                  height={221}
                  className="  absolute pt-2"
                />
              </div>
              <h1 className=" text-white text-2xl font-Poppins font-bold pt-14">
                Personalized Approach:
              </h1>
              <p className=" pt-2 text-white font-OpenSans">
                We customize each project, working closely with you to <br />
                understand your specific needs and requirements.
              </p>
            </div>
          </div>
          <div className=" flex mx-80 justify-center gap-5 pt-2">
            <div className=" h-231 w-545 bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  rounded-2xl px-10 ">
              <div className=" flex justify-end  ">
                <Image
                  src="/images/portfolionOne/shield.png"
                  alt="Myimage"
                  width={205}
                  height={205}
                  className="  absolute pt-2"
                />
              </div>
              <h1 className=" text-white text-2xl font-Poppins font-bold pt-14">
                Quality Assurance:
              </h1>
              <p className=" pt-2 text-white font-OpenSans">
                Quality is of the utmost importance to us. We have strict
                quality
                <br />
                assurance processes to ensure that every project we deliver{" "}
                <br />
                meets the highest standards.
              </p>
            </div>
            <div className=" h-231 w-545 bg-gradient-to-r from-costumeBrnBg to-costumeRedBg rounded-2xl px-10 ">
              <div className=" flex justify-end  ">
                <Image
                  src="/images/portfolionOne/best-price.png"
                  alt="Myimage"
                  width={216}
                  height={216}
                  className="  absolute pt-2"
                />
              </div>
              <h1 className=" text-white text-2xl font-Poppins font-bold pt-14">
                Competitive Pricing:
              </h1>
              <p className=" pt-2 text-white font-OpenSans">
                We offer competitive pricing for our Full Software <br />
                Development services, ensuring you receive the best value
                <br /> for your investment.
              </p>
            </div>
          </div>
        </div>
        {/*end-why-clients-choose-us */}

        {/*contact-us-today */}
        <div className="py-32 ">
          <div className="  mx-80 px-2  ">
            <h1 className="text-5xl font-Poppins font-bold">
              Contact us today
            </h1>
          </div>
          <div className=" flex  justify-evenly pt-8">
            <div className="mx-10">
              <p className=" text-gray-400 text-xl font-OpenSans pl-20 ">
                To learn more about our SEO services and how we can help improve
                your online visibility, <br /> reach more customers, and grow
                your business through search engines.
              </p>
            </div>
            <div className=" pr-20">
              <Link href="#">
                <button className="flex text-lg uppercase   items-center   text-red-500 hover:bg-gradient-to-t from-[#F35A43] to-[#C1272D]  hover:text-white   border-2 p-4  border-red-500  rounded-full">
                  <p className="px-10 text-sm font-semibold"> Contact US</p>
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
              </Link>
            </div>
          </div>
        </div>
        {/*end-contact-us-today */}

        {/* get-in-touch */}
        <div className=" bg-gradient-to-t from-costumeOrange to-costumeRed py-6 mb-12">
          <div className=" flex justify-center gap-40 pt-28 pb-40 ">
            <div className=" text-left text-white">
              <h1 className="text-xl font-OpenSans font-light">GET IN TOUCH</h1>
              <p className="text-5xl font-Poppins font-bold pt-10">
                Let’s start with <br /> your dream <br />
                project
              </p>
              <p className="text-2xl pt-10 pb-2 font-OpenSans">
                We help our clients make realize their most
              </p>
              <span className="text-2xl font-OpenSans font-bold">
                +1 123 456 7890
              </span>
            </div>
            <div className="grid content-center ">
              <form action="">
                <div className="">
                  <input
                    className="pb-4  text-base leading-tight focus:outline-none border-b-2   w-full  bg-transparent text-white placeholder-gray-300"
                    type="text"
                    aria-label="Email"
                    placeholder="Email "
                  />
                  <input
                    className="py-4 text-base  leading-tight focus:outline-none border-b-2   pt-16 w-full bg-transparent text-white placeholder-gray-300"
                    type="text"
                    aria-label="Full name"
                    placeholder="Full name"
                  />
                  <input
                    className="py-28  text-base leading-tight focus:outline-none border-b-2 w-full pt-16 bg-transparent  text-white placeholder-gray-300"
                    type="text"
                    aria-label="MEssage"
                    placeholder="Message"
                  />
                  <div className="pt-16 w-36 ">
                    <Link href="#">
                      <button className=" text-2xl text-white bg-transparent hover:bg-white text-black-700 font-semibold hover:text-red-500 py-2 px-8 border-2 border-white hover:border-transparent rounded-full">
                        SUBMIT
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* end-get-in-touch */}

        {/* footer-start */}
        <footer className="text-gray-600  ">
          <div className=" pt-8 pb-20  flex flex-row flex-wrap justify-center  ">
            <div className="  mr-24">
              <div className="flex items-center pb-2 px-4">
                <Link href="#">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Picture of the author"
                    width={62.02}
                    height={60.25}
                  />
                </Link>
              </div>
              <span className="font-Poppins font-bold   text-red-700 ">
                MABOLOTECH IT SOLUTION
              </span>
              <p className="text-sm text-gray-400 font-OpenSans">
                Lorem ipsum dolor is simply dummy <br />
                text of printing.
              </p>
            </div>

            <div className="flex flex-wrap  mx-8 gap-40 mt-8 ">
              <div className="services">
                <h2 className="font-Poppins font-bold text-2xl text-red-700   pb-2">
                  Services
                </h2>
                <nav className="list-none font-OpenSans">
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
              <div className="about-us">
                <h2 className="font-Poppins font-bold text-2xl text-red-700   pb-2">
                  About us
                </h2>
                <nav className="list-none font-OpenSans">
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
              <div className="get-in-touch">
                <h2 className="tfont-Poppins  font-bold text-2xl text-red-700   pb-2">
                  Get in touch
                </h2>
                <div className="list-none">
                  <li className=" mt-2 ">
                    <a className="  text-gray-400 font-OpenSans">
                      99 Wall Street <br /> New York, NY 10005
                    </a>
                  </li>

                  <ul className="mt-8 flex text-gray-400 gap-2">
                    <li>
                      <Link href="#" target="_blank" title="facebook">
                        <Image
                          src="/iconfooter/facebook.svg"
                          alt="Myimage"
                          width={7.92}
                          height={17}
                        />
                      </Link>
                    </li>

                    <li className="ml-6">
                      <Link href="#" target="_blank" title="skypef">
                        <Image
                          src="/iconfooter/skype.svg"
                          alt="Myimage"
                          width={16}
                          height={15.29}
                        />
                      </Link>
                    </li>

                    <li className="ml-6">
                      <Link href="#" target="_blank" title="linkedin">
                        <Image
                          src="/iconfooter/linkedin.svg"
                          alt="Myimage"
                          width={17}
                          height={17}
                        />
                      </Link>
                    </li>

                    <li className="ml-6">
                      <Link href="#" target="_blank" title="insta">
                        <Image
                          src="/iconfooter/instagram.svg"
                          alt="Myimage"
                          width={17}
                          height={17}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className=" text-center font-OpenSans text-base pt-3 pb-48 text-gray-400">
            Copyrighted © 2023 Mabolotech IT Solution
          </p>
        </footer>
        {/* footer-end */}
      </div>
    </>
  );
}
