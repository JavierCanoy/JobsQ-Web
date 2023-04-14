import Image from "next/image";

import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";
export default function PortfoliOne() {
  return (
    <>
      {/* header-start */}
      <header className="sticky backdrop-blur-md  bg-white/90 w-full  top-0 left-0 shadow-sm">
        <div className="border-black-500  border  px-4 p-4 grid grid-cols-2   ">
          {/* logo */}
          <div className=" flex pl-10 ">
            <a href="#" className="flex items-center  ">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Picture of the author"
                width={62}
                height={60}
              />
            </a>
            <div className=" px-4 pt-6">
              <span className=" self-center  text-2xl  font-bold  text-red-700  ">
                MABOLOTECH IT SOLUTION
              </span>
              <p className=" text-xs font-semibold whitespace-nowrap ">
                Crafting Software Solutions that drive business growth
              </p>
            </div>
          </div>
          {/* menu */}
          <div className="grid justify-center  ">
            <ul className="flex  gap-8   items-center p-4  ml-20">
              <li>
                <a
                  href="#"
                  className=" text-xl  font-semibold block py-2 pl-3 pr-4    hover:text-red-700      "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold   block py-2 pl-3 pr-4     hover:text-red-700     "
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="  text-xl font-semibold  block py-2 pl-3 pr-4  hover:text-red-700 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-xl  font-semibold  block py-2 pl-3 pr-4 hover:text-red-700"
                >
                  Our Work
                </a>
              </li>
              <li>
                <button className=" text-xl font-semibold   hover:bg-red-700 text-black-700   py-2 px-8 border-2 border-red-700  rounded-full">
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* header-end */}

      {/* about-us */}
      <div className="about-us  ">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
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
                <p className="text-xl font-light">SERVICES</p>
                <h1 className="mb-6 text-5xl font-bold pt-4">
                  Solution we provide
                </h1>
                <p className="text-xl font-light">
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
            <button className="h-67 w-311 bg-gradient-to-t from-[#F35A43] to-[#C1272D] rounded-lg text-white font-bold hover:from-white hover:to-white hover:text-red-700 hover:border-red-700 border-2 px-6 py-3">
              Full Software Development
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-base font-bold">Mobile App Development</span>
          </div>
          <div className="flex items-center">
            <span className="text-base font-bold">
              Search Engine Optimization (SEO)
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-base font-bold">
              Software Development Outsourcing
            </span>
          </div>
        </div>
        <div className=" grid grid-cols-2 pt-16">
          <div className=" mx-44 px-10">
            <h1 className=" text-5xl font-bold">
              Full Software <br /> Development Service:
            </h1>
          </div>
          <div>
            <p className="text-xl">
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
        <h1 className="text-5xl font-bold text-center text-red-600">
          What we offer:
        </h1>
        <div className="flex justify-center gap-8 pt-16">
          <div className=" h-259 w-468 bg-gradient-to-r from-[#F35A43] to-[#C1272D] rounded-3xl px-10 text-white mb-10 pt-2">
            <h1 className=" text-54 font-bold">01</h1>
            <span className="text-xl font-semibold">
              Requirements <br /> Gathering and Analysis:
            </span>
            <p className="text-base pt-2">
              Our first step is to fully understand and analyze your business
              requirements to create a clear and concise plan for your software
              project.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-[#F35A43] to-[#C1272D] rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-54 font-bold">02</h1>
            <span className="text-xl font-semibold">Design and UI/UX:</span>
            <p className="text-base pt-2">
              Our experienced designers will work with you to create a
              user-friendly and visually appealing interface and the underlying
              architecture to support your software needs.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-[#F35A43] to-[#C1272D] rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-54 font-bold">03</h1>
            <span className="text-xl font-semibold">Implementation:</span>
            <p className="text-base">
              Our team of developers will use the latest technologies and
              programming languages to bring your software to life, ensuring it
              is fast, secure, and scalable.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 ">
          <div className=" h-259 w-468 bg-gradient-to-r from-[#F35A43] to-[#C1272D] rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-54 font-bold">04</h1>
            <span className="text-xl font-semibold">Testing:</span>
            <p className="text-base pt-2">
              Thorough testing is integral to our software development process.
              We will rigorously test your software to ensure it meets your
              requirements and operates without errors or glitches.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-[#F35A43] to-[#C1272D] rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-54 font-bold">05</h1>
            <span className="text-xl font-semibold">
              Maintenance and Support:
            </span>
            <p className="text-base pt-2">
              After we launch your software, we will provide ongoing care and
              support, ensuring that your software meets your needs and performs
              optimally.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-[#F35A43] to-[#C1272D] rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-54 font-bold">06</h1>
            <span className="text-xl font-semibold">Implementation:</span>
            <p className="text-base">
              Our team of developers will use the latest technologies and
              programming languages to bring your software to life, ensuring it
              is fast, secure, and scalable.
            </p>
          </div>
        </div>
      </div>
      {/*end-what-we-offer */}
      {/*why-clients-choose-us */}
      <div className="bg-gradient-to-t from-[#F35A43] to-[#C1272D]  h-1013  pt-36 mt-32">
        <div className=" text-center">
          <h1 className="text-5xl text-white  font-bold">
            Why clients choose us
          </h1>
          <p className="pt-8 text-xl font-light text-white">
            Find a team of digital solutions you can rely on. Every day, we
            build trust through communication,
            <br /> transparency, and results.
          </p>
        </div>
        <div className=" flex mx-80 justify-center gap-5 pt-24 ">
          <div className=" h-231 w-545 bg-gradient-to-r from-[#F5B596] to-[#EB3449] rounded-2xl px-10 grid content-center mb-8">
            <h1 className=" text-white text-2xl font-bold">Experienced Team</h1>
            <p className=" pt-2 text-white">
              Our software developers and project managers have years of
              <br />
              experience delivering top-quality software solutions to clients
              <br />
              in various industries.
            </p>
          </div>
          <div className=" h-231 w-545 bg-gradient-to-r from-[#F5B596] to-[#EB3449] rounded-2xl px-10 grid content-center">
            <h1 className=" text-white text-2xl font-bold">
              Personalized Approach:
            </h1>
            <p className=" pt-2 text-white">
              We customize each project, working closely with you to <br />
              understand your specific needs and requirements.
            </p>
          </div>
        </div>
        <div className=" flex mx-80 justify-center gap-5 pt-2">
          <div className=" h-231 w-545 bg-gradient-to-r from-[#F5B596] to-[#EB3449] rounded-2xl px-10 grid content-center">
            <h1 className=" text-white text-2xl font-bold">
              Quality Assurance:
            </h1>
            <p className=" pt-2 text-white">
              Quality is of the utmost importance to us. We have strict quality
              <br />
              assurance processes to ensure that every project we deliver <br />
              meets the highest standards.
            </p>
          </div>
          <div className=" h-231 w-545 bg-gradient-to-r from-[#F5B596] to-[#EB3449] rounded-2xl px-10 grid content-center">
            <h1 className=" text-white text-2xl font-bold">
              Competitive Pricing:
            </h1>
            <p className=" pt-2 text-white">
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
          <h1 className="text-5xl font-bold">Contact us today</h1>
        </div>
        <div className=" flex  justify-evenly pt-8">
          <div className="">
            <p className=" text-gray-400 text-xl pl-20">
              To learn more about our SEO services and how we can help improve
              your online visibility, <br /> reach more customers, and grow your
              business through search engines.
            </p>
          </div>
          <div className=" pr-20">
            <button className="flex text-lg uppercase   items-center   text-red-500 hover:bg-gradient-to-t from-[#F35A43] to-[#C1272D]  hover:text-white   border-2 p-4  border-red-500  rounded-full">
              <p className="px-10 text-sm"> KNOW MORE</p>
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
      {/*end-contact-us-today */}
      {/* get-in-touch */}
      <div className="bg-gradient-to-t from-[#F35A43] to-[#C1272D]">
        <div className="flex justify-items-start px-40 pt-10">
          <button className=" float pt-10 text-xl font-bold text-white ">
            x
          </button>
        </div>
        <div className=" flex justify-center gap-40 pt-40 pb-40 ">
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
                  className="pb-4  text-base leading-tight focus:outline-none border-b-2   w-full  bg-transparent text-white placeholder-gray-300"
                  type="text"
                  aria-label="Email"
                  placeholder="Email "
                />
                <input
                  className="py-4 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full bg-transparent text-white placeholder-gray-300"
                  type="text"
                  aria-label="Full name"
                  placeholder="Full name"
                />
                <input
                  className="py-20  text-base leading-tight focus:outline-none border-b-2 w-full pt-14 bg-transparent  text-white placeholder-gray-300"
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
        </div>
      </div>
      {/* end-get-in-touch */}
      {/* footer-start */}
      <footer className="text-gray-600  ">
        <div className=" px-5 pt-10 pb-20  flex flex-row flex-wrap justify-center  ">
          <div className="w-64  mr-24 ">
            <a href="#" className="flex items-center pb-2 px-4">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
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
                <li className="mb-2 mt-2">
                  <a className="text-gray-400  ">Development</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">Design Sprint</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">UX Design</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">Online Marketing</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">Content</a>
                </li>
              </nav>
            </div>
            <div className="grid content-end mb-2">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                About us
              </h2>
              <nav className="list-none">
                <li className="mb-2 mt-2 ">
                  <a className="text-gray-400  ">About us</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">Team</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">Portfolio</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">News & Article</a>
                </li>
                <li className="mt-2">
                  <a className="text-gray-400 ">Career</a>
                </li>
              </nav>
            </div>
            <div className="  grid   content-end mb-20">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                Get in touch
              </h2>
              <nav className="list-none">
                <li className="mb-2 mt-2 ">
                  <a className="  text-gray-400 ">
                    99 Wall Street <br /> New York, NY 10005
                  </a>
                </li>
                <ul className="mt-4 flex text-gray-400 gap-2">
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
              </nav>
            </div>
          </div>
        </div>

        <p className=" text-center text-base pb-44 text-gray-400">
          Copyrighted © 2023 Mabolotech IT Solution
        </p>
      </footer>
      {/* footer-end */}
    </>
  );
}
