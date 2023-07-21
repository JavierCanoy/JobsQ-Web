import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="main-contact   pt-[7.5rem] ">
      <div className="  m-4">
        <div className="py-4 w-full ">
          <p className="  text-center  font-Poppins font-bold text-4xl md:text-5xl  md:pt-20  lg:max-w-xl lg:mx-auto      dark:text-gray-400">
            Let’s build your dream product together
          </p>
        </div>
        <div className="images  mx-auto md:my-32 m-4 md:grid md:grid-cols-12 lg:max-w-5xl   ">
          <div className=" md:col-span-4">
            <div className="flex justify-center items-center   bg-red-100  h-[145px] w-[145px] rounded-full mx-auto">
              <Image
                src="/images/contact/signs.svg"
                alt="Myimage"
                width={60}
                height={59.55}
              />
            </div>
            <div>
              <p className="text-2xl text-center font-Poppins font-bold pt-5">
                Our Location
              </p>
              <p className="text-base font-OpenSans  pt-5 text-gray-300 text-center">
                99 Wall Street <br /> New York, NY 10005
              </p>
            </div>
          </div>

          <div className=" md:col-span-4">
            <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full mx-auto">
              <Image
                src="/images/contact/note1.svg"
                alt="Myimage"
                width={60}
                height={59.55}
              />
            </div>
            <div>
              <p className="text-2xl text-center font-Poppins  font-bold pt-5">
                E-mail & Phone
              </p>
              <p className="text-base font-OpenSans  pt-5 text-gray-300 text-center">
                hello@mabolotech.com <br /> +1 123 456 7890
              </p>
            </div>
          </div>

          <div className=" md:col-span-4">
            <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full mx-auto">
              <Image
                src="/images/contact/social.svg"
                alt="Myimage"
                width={60}
                height={59.55}
              />
            </div>
            <div>
              <p className="text-2xl text-center font-Poppins  font-bold pt-5">
                Get in touch
              </p>
              <div className="grid mx-auto w-52 justify-items-center grid-cols-4  py-4">
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
      <div className="  grid grid-cols-12 justify-items-center content-center md:h-screen  md:justify-items-start   ">
        <div className=" col-span-12 md:col-span-6 ">
          <object
            className="  px-4  md:px-0 w-[320px]  md:w-[350px]  xl:w-[600px] lg:w-[450px] 2xl:w-[700px] h-full"
            data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.446278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
          ></object>
        </div>
        <form className="second col-span-12 px-4 w-full md:col-span-6 xl:max-w-lg ">
          <p className=" text-center text-base text-gray-400 py-10">
            look forward from you,
          </p>
          <input
            className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-10  w-full "
            type="text"
            aria-label="Email"
            placeholder="Email "
          />
          <input
            className="py-6 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full  "
            type="text"
            aria-label="Website"
            placeholder="Website Link"
          />
          <input
            className="py-10  text-base leading-tight focus:outline-none border-b-2 w-full  "
            type="text"
            aria-label="Message"
            placeholder="Message"
          />
          <div className="pt-4 ">
            <Link href="/">
              <button className=" text-sm text-red-500 bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-red-500 hover:border-transparent rounded-full">
                SUBMIT
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
