import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServicesComp from "./ServicesComp";

export default function Services() {
  return (
    <div className="main-services ">
      <div id="services" className="  pt-[7.7rem]  ">
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

      {/* Services */}
      <ServicesComp />
      {/*end-Services */}

      {/*what-we-offer */}
      <div className=" pt-40 ">
        <h1 className="text-5xl font-Poppins font-bold text-center text-red-600">
          What we offer:
        </h1>
        <div className="flex justify-center gap-8 pt-16">
          <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white mb-10 pt-2">
            <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">01</h1>
            <span className="text-xl font-Poppins font-semibold">
              Requirements <br /> Gathering and Analysis:
            </span>
            <p className="text-base font-OpenSans pt-2">
              Our first step is to fully understand and analyze your business
              requirements to create a clear and concise plan for your software
              project.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">02</h1>
            <span className="text-xl  font-Poppins font-semibold">
              Design and UI/UX:
            </span>
            <p className="text-base font-OpenSans  pt-2">
              Our experienced designers will work with you to create a
              user-friendly and visually appealing interface and the underlying
              architecture to support your software needs.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold pt-1 pb-1">03</h1>
            <span className="text-xl font-Poppins font-semibold">
              Implementation:
            </span>
            <p className="text-base font-OpenSans  pt-2">
              Our team of developers will use the latest technologies and
              programming languages to bring your software to life, ensuring it
              is fast, secure, and scalable.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 ">
          <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">04</h1>
            <span className="text-xl font-Poppins font-semibold">Testing:</span>
            <p className="text-base font-OpenSans  pt-2">
              Thorough testing is integral to our software development process.
              We will rigorously test your software to ensure it meets your
              requirements and operates without errors or glitches.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold pt-1 pb-1">05</h1>
            <span className="text-xl font-Poppins font-semibold">
              Maintenance and Support:
            </span>
            <p className="text-base font-OpenSans  pt-7">
              After we launch your software, we will provide ongoing care and
              support, ensuring that your software meets your needs and performs
              optimally.
            </p>
          </div>
          <div className=" h-259 w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">06</h1>
            <span className="text-xl font-Poppins font-semibold ">
              Implementation:
            </span>
            <p className="text-base font-OpenSans  pt-2">
              Our team of developers will use the latest technologies and
              programming languages to bring your software to life, ensuring it
              is fast, secure, and scalable.
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
                experience delivering top-quality software solutions to clients
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
              Quality is of the utmost importance to us. We have strict quality
              <br />
              assurance processes to ensure that every project we deliver <br />
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
          <h1 className="text-5xl font-Poppins font-bold">Contact us today</h1>
        </div>
        <div className=" flex  justify-evenly pt-8">
          <div className="mx-10">
            <p className=" text-gray-400 text-xl font-OpenSans pl-20 ">
              To learn more about our SEO services and how we can help improve
              your online visibility, <br /> reach more customers, and grow your
              business through search engines.
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
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*end-contact-us-today */}

      {/* get-in-touch */}
      <div className=" bg-gradient-to-t from-costumeOrange to-costumeRed py-6 ">
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
    </div>
  );
}
