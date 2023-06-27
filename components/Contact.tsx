import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="main-contact">
      <div id="contact" className=" pt-10">
        <p className="   text-center pt-56 pb-56 font-Poppins  font-bold  lg:text-5xl sm:px-16 xl:px-48 dark:text-gray-400">
          Let’s build your dream <br /> product together
        </p>
        <div className=" flex justify-center gap-96 ">
          <div>
            <div className="flex justify-center items-center   bg-red-100  h-[145px] w-[145px] rounded-full mx-auto">
              <Image
                src="/images/contact/signs.svg"
                alt="Myimage"
                width={60}
                height={59.55}
              />
            </div>
            <div>
              <span className="text-2xl font-Poppins font-bold pt-5">
                Our Location
              </span>
              <p className="text-base font-OpenSans  pt-5 text-gray-300 text-center">
                99 Wall Street <br /> New York, NY 10005
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full mx-auto">
              <Image
                src="/images/contact/note1.svg"
                alt="Myimage"
                width={60}
                height={59.55}
              />
            </div>
            <div>
              <span className="text-2xl font-Poppins  font-bold pt-5">
                E-mail & Phone
              </span>
              <p className="text-base font-OpenSans  pt-5 text-gray-300 text-center">
                hello@mabolotech.com <br /> +1 123 456 7890
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full">
              <Image
                src="/images/contact/social.svg"
                alt="Myimage"
                width={60}
                height={59.55}
              />
            </div>
            <div>
              <span className="text-2xl font-Poppins  font-bold pt-5">
                Get in touch
              </span>
              <div className="grid justify-items-center grid-cols-4 gap-4 pt-7">
                <Image
                  src="/iconfooter/facebook.svg"
                  alt="Myimage"
                  width={7.92}
                  height={17}
                />
                <Image
                  src="/iconfooter/skype.svg"
                  alt="Myimage"
                  width={16}
                  height={15.29}
                />
                <Image
                  src="/iconfooter/linkedin.svg"
                  alt="Myimage"
                  width={17}
                  height={17}
                />
                <Image
                  src="/iconfooter/instagram.svg"
                  alt="Myimage"
                  width={17}
                  height={17}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end- Let’s build your dream  */}

      {/* minimap */}
      <div className="grid  grid-cols-2 pt-40 pb-32 mb-10 ">
        <div className=" ">
          <section id="google-map-area">
            <div className="mx-6 mb-6">
              <div className="flex">
                <div className="w-full">
                  <object
                    style={{ border: 0, height: "902px", width: "900px" }}
                    data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
                  ></object>
                </div>
              </div>
            </div>
          </section>
        </div>

        <form className=" ">
          <p className=" text-2xl text-center font-SegoeUI text-gray-500 pt-10 mt-20">
            look forward to hearing from you,
          </p>
          <div className="grid justify-items-center  pt-2 ">
            <input
              className="py-4  text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-28 "
              type="text"
              aria-label="Email"
              placeholder="Email "
            />
            <input
              className="py-4 text-base  leading-tight focus:outline-none border-b-2 w-7/12 pt-16 "
              type="text"
              aria-label="Website Link"
              placeholder="Website Link"
            />
            <input
              className="py-28   text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-16 "
              type="text"
              aria-label="Message"
              placeholder="Message"
            />
          </div>
          <div className=" pt-14">
            <Link href="#">
              <button className="ml-48 text-sm font-semibold bg-transparent hover:bg-red-700 text-black-700  hover:text-white py-4 px-10 border-2 border-red-700 hover:border-transparent rounded-full">
                SUBMIT
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
