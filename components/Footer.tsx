import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-main py-10 w-full ">
      <div className=" flex flex-wrap  justify-center gap-10 mx-10">
        <div>
          <ul>
            <Link href="#" aria-label="images-logo">
              <Image
                className="ml-3"
                src="/images/logo/logo.png"
                alt="logo"
                width={62.02}
                height={60.25}
              />
            </Link>
            <li className=" pt-3 font-Poppins font-bold    text-red-700 ">
              Mabolotech IT Solution
            </li>
            <li className="text-base text-gray-600">
              Lorem Ipsum is simply dummy <br /> text of the printing.
            </li>
          </ul>
        </div>

        {/* services */}
        <div className=" pt-10">
          <h1 className="font-Poppins font-bold text-xl text-red-700  ">
            Services
          </h1>
          <ul>
            <li className=" text-base text-gray-600 mt-4">Development</li>
            <li className=" text-base text-gray-600 mt-3">Design Sprint</li>
            <li className="text-base text-gray-600 mt-3">UX Design</li>
            <li className=" text-base text-gray-600 mt-3">Online Marketing</li>
            <li className="text-base text-gray-600 mt-3">Content</li>
          </ul>
        </div>
        {/* end-services */}

        {/* about */}
        <div className=" pt-10">
          <h1 className="font-Poppins font-bold text-xl text-red-700">
            About us
          </h1>
          <ul>
            <li className=" text-base text-gray-600 mt-3"> About us</li>
            <li className=" text-base text-gray-600 mt-3">Team</li>
            <li className=" text-base text-gray-600 mt-3">Portfolio</li>
            <li className=" text-base text-gray-600 mt-3">News & Article</li>
            <li className=" text-base text-gray-600 mt-3">Career</li>
          </ul>
        </div>
        {/* end-about */}

        {/* get-intouch */}
        <div className=" pt-10">
          <h1 className="font-Poppins font-bold text-xl text-red-700">
            Get in touch
          </h1>
          <ul className="">
            <li className="mt-3 text-base text-gray-600">
              99 Wall Street <br /> New York, NY 10005
            </li>
            <div>
              <ul className="flex justify-between">
                <li>
                  <Link
                    href="#"
                    aria-label="facebook-logo"
                    target="_blank"
                    title="facebook"
                  >
                    <Image
                      src="/iconfooter/facebook.svg"
                      alt="Facebook"
                      width={7.92}
                      height={17}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    aria-label="skype-logo"
                    target="_blank"
                    title="skypef"
                  >
                    <Image
                      src="/iconfooter/skype.svg"
                      alt="Skype"
                      width={16}
                      height={15.29}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    aria-label="linkedin-logo"
                    target="_blank"
                    title="linkedin"
                  >
                    <Image
                      src="/iconfooter/linkedin.svg"
                      alt="Linkedin"
                      width={17}
                      height={17}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    aria-label="insta-logo"
                    target="_blank"
                    title="insta"
                  >
                    <Image
                      src="/iconfooter/instagram.svg"
                      alt="Instagram"
                      width={17}
                      height={17}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        {/* get-intouch */}
      </div>

      {/* Copyrighted  */}
      <div className="  mt-20 mx-2">
        <p className=" text-center  text-gray-600 text-base">
          Copyrighted © 2023 Mabolotech IT Solution
        </p>
      </div>
    </div>
  );
}
