import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* footer-start */}
      <div className="text-gray-600  ">
        <div className="pb-20  flex flex-row flex-wrap justify-center  ">
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
      </div>
      {/* footer-end */}
    </>
  );
}
