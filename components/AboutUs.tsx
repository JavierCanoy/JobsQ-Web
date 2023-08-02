import Image from "next/image";
import Link from "next/link";
import Clients from "./Clients";
import { useEffect } from "react";

// import AOS from "aos";
// import "aos/dist/aos.css";

export default function AboutUs() {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 500,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //     disable: function () {
  //       var maxWidth = 1024;
  //       return window.innerWidth < maxWidth;
  //     },
  //   });
  // }, []);

  return (
    <div id="about-us" className="main-about pt-20   md:pt-120  ">
      <div className="  w-full ">
        <div className="relative ">
          <div className="image">
            <Image
              src="/images/portfolionOne/profile.png"
              alt="Myimage"
              className=" w-full object-cover"
              width={1800}
              height={579}
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-75 bg-gradient-to-r from-costumeOrange to-costumeRed">
            <div className="flex h-full items-center justify-center">
              <div className=" max-w-md lg:max-w-2xl  text-center text-white ">
                <p className="pt-5 text-basemd:text-xl font-OpenSans font-light">
                  ABOUT US
                </p>
                <h1 className="mb-6 text-base font-Poppins font-bold pt-4 md:text-5xl ">
                  LEADING THE BEST DIGITAL AGENCY IN TOWN
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-about-us */}
      {/* we do great things together */}
      <div data-aos="zoom-in" className=" p-4  md:p-8 xl:max-w-2xl xl:mx-80  ">
        <div>
          <h1 className="  font-Poppins font-bold   text-4xl md:text-5xl xl:py-10  ">
            We do great things together
          </h1>
          <p className="  font-OpenSans  py-4 xl:py-10  xl:leading-8 text-xl text-gray-600">
            MaboloTech IT Solutions was established in 2020 amidst the COVID-19
            pandemic, aiming to help friends and former colleagues affected by
            job loss. We understand the difficulties of navigating uncertain
            times and strive to provide affordable software development services
            and IT solutions to individuals and businesses locally and
            internationally. Our team of experienced and talented professionals
            is passionate about delivering innovative and customized technology
            solutions. We dedicate to helping our clients achieve their goals
            and stay ahead of the competition through cutting-edge technologies
            and processes. At MaboloTech IT Solutions, every project is unique
            and requires a personalized approach. That{"'"}s why we work closely
            with our clients to understand their specific needs and goals and to
            create tailored solutions that meet those needs. Whether it{"'"}s
            developing a new website or improving the efficiency of your
            existing systems, we have the expertise and experience to deliver
            results that exceed your expectations.
          </p>
        </div>
      </div>
      {/* end-we do great things together */}
      {/* founded */}
      <div data-aos="fade-up" className=" w-full px-4 lg:px-8">
        <h1 className=" py-4 text-3xl md:text-5xl  xl:max-w-4xl xl:mx-auto xl:text-center font-Poppins font-bold  ">
          Founded on trust. Focused on relationships with client.
        </h1>
        <div className=" py-4 lg:py-8">
          <p className=" leading-relaxed font-OpenSans text-xl text-gray-600 xl:max-w-5xl xl:mx-auto">
            We proudly offer various services, including software development,
            IT consulting, and support, to help our clients reach their full
            potential. Our commitment to excellence and customer satisfaction is
            evident in every project we undertake, and we are confident that you
            will be impressed with the results. At MaboloTech IT Solutions, we
            are more than just a technology company - we are a partner in your
            success. So, look no further if you{"'"}re looking for a reliable
            and affordable solution for your IT needs. Contact us today to see
            how we can help you achieve your goals.
          </p>
        </div>
        <div className="image lg:grid lg:grid-cols-12 lg:justify-items-center xl:gap-4 xl:mx-5  ">
          <div
            data-aos="fade-right"
            className=" lg:col-span-12 xl:col-span-6 lg:py-8 py-2"
          >
            <Image
              src="/images/home/group.png"
              alt="Myimage"
              className=" rounded-lg"
              height={589}
              width={726}
            />
          </div>
          <div
            data-aos="fade-left"
            className="lg:col-span-12 lg:py-8  xl:col-span-6  py-2 xl:mt-32"
          >
            <Image
              src="/images/home/group1.png"
              alt="Myimage"
              className=" rounded-lg"
              height={589}
              width={726}
            />
          </div>
        </div>
      </div>
      {/* What clients value most */}
      <div className="main  grid grid-cols-12 lg:h-screen  bg-gradient-to-t from-costumeOrange to-costumeRed">
        <div className=" col-span-12 m-auto">
          <div className=" py-10   px-4   flex justify-center items-center lg:py-0  ">
            <div>
              <h1 className="text-center text-4xl  font-Poppins font-bold  text-white md:text-5xl ">
                What clients value most about us
              </h1>
              <p className=" py-4 text-center text-xl text-white tracking-wide font-OpenSans font-light">
                Find a team of digital solutions you can rely on. Every day, we
                build trust through communication, transparency, and results.
              </p>
            </div>
          </div>
          <div className=" py-4 mx-4 text-white md:max-w-sm md:mx-auto    lg:grid lg:max-w-4xl lg:gap-5 lg:grid-cols-3 xl:max-w-5xl">
            <div className="1 lg:max-h-56  my-4 bg-gradient-to-r from-costumeBrnBg to-costumeRedBg p-4 rounded-lg">
              <h1 className="font-Poppins font-bold text-2xl">Transparency</h1>
              <p className=" text-base pt-4 pb-10 font-OpenSans">
                Lorem ipsum dolor amet, an ipsum dore dusino sinto. Ipsum dolor
                amet lorem.
              </p>
              <Link href="#" aria-label="Know more">
                <button
                  aria-label="Know more"
                  className=" flex items-center hover:text-costumeRed "
                >
                  <p className="pr-8 text-base font-OpenSans font-semibold ">
                    Know more
                  </p>
                  <svg
                    className="w-5 h-5 "
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
            <div className="2 lg:max-h-56 my-4  bg-gradient-to-r from-costumeBrnBg to-costumeRedBg p-4 rounded-lg">
              <h1 className=" font-Poppins font-bold text-2xl">
                Experience Team
              </h1>
              <p className=" text-base pt-4 pb-10 font-OpenSans">
                Lorem ipsum dolor amet, an ipsum dore dusino sinto. Ipsum dolor
                amet lorem.
              </p>
              <Link href="#" aria-label="Know more">
                <button
                  aria-label="Know more"
                  className=" flex items-center  hover:text-costumeRed"
                >
                  <p className="pr-8 text-base font-semibold">Know more</p>
                  <svg
                    className="w-5 h-5 "
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
            <div className="3 lg:max-h-56    my-4  bg-gradient-to-r from-costumeBrnBg to-costumeRedBg p-4 rounded-lg">
              <h1 className=" font-Poppins font-bold text-2xl">
                Result Guaranteed
              </h1>
              <p className=" text-base pt-4 pb-10 font-OpenSans">
                Lorem ipsum dolor amet, an ipsum dore dusino sinto. Ipsum dolor
                amet lorem.
              </p>
              <Link href="#" aria-label="Know more">
                <button
                  aria-label="Know more"
                  className=" flex items-center hover:text-costumeRed"
                >
                  <p className="pr-8 text-base font-OpenSans font-semibold">
                    Know more
                  </p>
                  <svg
                    className="w-5 h-5 "
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
      </div>
      {/* end What clients value most */}
      {/* meet-the-team */}
      <div className="meet-the-team grid-cols-12 px-4 pt-4 md:px-8 grid h-auto">
        <div className="  col-span-12   lg:flex lg:justify-center lg:items-center ">
          <div>
            <h1 className=" text-center text-5xl font-Poppins font-bold">
              Meet the team
            </h1>
            <p className="text-xl py-4  text-gray-600 pb-4 font-OpenSans lg:pt-10">
              We’re a diverse team that works as fancies attention to details,
              enjoys beers on Friday nights and aspires to design the dent in
              the universe.
            </p>
          </div>
        </div>

        <div className="images py-4 col-span-12  md:grid md:grid-cols-2 md:gap-4 lg:mx-auto lg:grid lg:grid-cols-4 lg:pt-10   ">
          <div className="1">
            <Image
              src="/images/home/one.png"
              alt="Myimage"
              height={432}
              width={550}
            />
            <div className=" pt-4">
              <p className="text-3xl font-Poppins font-bold">John S. Doe</p>
              <p className="text-lg text-red-600 font-OpenSans font-semibold">
                CoFounder
              </p>
            </div>
          </div>
          <div className="2">
            <Image
              src="/images/home/two.png"
              alt="Myimage"
              height={432}
              width={550}
            />
            <div className=" pt-4">
              <p className="text-3xl font-Poppins font-bold ">Lisa S. Shawn</p>
              <p className="text-lg text-red-600 font-OpenSans font-semibold">
                Writer
              </p>
            </div>
          </div>
          <div className="3">
            <Image
              src="/images/home/tree.png"
              alt="Myimage"
              height={432}
              width={550}
            />
            <div className=" pt-4">
              <p className="text-3xl font-Poppins font-bold ">Johny P. Sin</p>
              <p className="text-lg text-red-600 font-OpenSans font-semibold">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="4">
            <Image
              src="/images/home/four.png"
              alt="Myimage"
              height={432}
              width={550}
            />
            <div className=" pt-4">
              <p className="text-3xl  font-Poppins font-bold">Sofia L. Hour</p>
              <p className="text-lg text-red-600  font-OpenSans font-semibold">
                Creative Designer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end meet-the-team */}

      {/*  What do our clients   */}
      <Clients />
      {/* end What do our clients   */}

      {/* Let’s start withyour dreamproject */}
      <div className="main grid grid-cols-12 md:h-screen  md:content-center md:mx-4">
        <div className="first col-span-12 w-full p-4 md:col-span-6  md:my-auto  xl:mx-auto xl:max-w-lg  ">
          <h1 className="text-xl  text-gray-600 font-OpenSans font-light">
            GET IN TOUCH
          </h1>
          <p className="text-5xl font-Poppins font-bold py-4 ">
            Let’s start with
            <br /> your dream <br />
            project
          </p>
          <p className="  text-xl font-OpenSans py-2	">
            We help our clients make realize their most
          </p>
          <p className="text-xl font-bold font-OpenSans  py-2">
            +1 123 456 7890
          </p>
        </div>
        <form className="second col-span-12 px-4 w-full xl:max-w-lg md:col-span-6">
          <input
            className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-10  w-full "
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
            className="py-10  text-base leading-tight focus:outline-none border-b-2 w-full  "
            type="text"
            aria-label="Message"
            placeholder="Message"
          />
          <div className="pt-4 mb-4 md:mb-0 ">
            <Link href="/" aria-label="Submit Button">
              <button
                aria-label="Submit Button"
                className=" text-sm text-red-600 bg-transparent hover:bg-red-600 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-red-600 hover:border-transparent rounded-full"
              >
                SUBMIT
              </button>
            </Link>
          </div>
        </form>
      </div>
      {/*end Let’s start withyour dreamproject */}

      {/* subscribes-laters */}
      <div className=" h-screen  grid grid-cols-12   px-6 w-full   bg-costumeOrange">
        <div className="   m-auto col-span-12 ">
          <div className="">
            <h1 className=" py-5 text-center text-xl font-OpenSans font-light text-white     ">
              NEWSLETTER
            </h1>
            <h2 className="md:pb-10 text-center text-5xl font-Poppins font-bold text-white">
              Subscribe Company newsletter
            </h2>
          </div>
          <form className=" py-10 md:max-w-md md:mx-auto xl:flex xl:max-w-4xl xl:gap-5">
            <input
              className=" py-4 text-base w-full lg:py-8 text-white   leading-tight focus:outline-none border-b-2    bg-transparent placeholder-white "
              type="text"
              aria-label="Your-name"
              placeholder="Your name "
            />
            <input
              className="py-4 w-full  lg:py-8  text-base  text-white  leading-tight focus:outline-none border-b-2  bg-transparent placeholder-white  "
              type="text"
              aria-label="Email"
              placeholder="Email"
            />
            <div className="py-10 xl:flex xl:items-end  xl:py-0  ">
              <Link href="/" aria-label="submit">
                <button
                  aria-label="submit"
                  className="  text-sm text-white bg-transparent hover:border-costumeOrange hover:bg-white text-black-700 font-semibold hover:text-red-600 border-2 px-12 p-3 border-white hover:border-transparent rounded-full"
                >
                  SUBMIT
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* end-subscribes-laters */}
    </div>
  );
}
