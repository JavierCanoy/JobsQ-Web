import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="main-header">
      <div className="fixed h-[123px]  top-0   w-full z-50  shadow-md backdrop-blur-lg   bg-white/90  ">
        <div className="   flex  items-center h-full justify-around gap-96 ">
          <div className=" flex  gap-5 ">
            <Image
              className=" "
              src="/images/logo/logo.png"
              alt="Logo"
              width={72}
              height={72}
            />
            <div className=" grid">
              <h1 className=" self-center  text-2xl  font-Poppins font-bold  text-costumeRed  ">
                MABOLOTECH IT SOLUTION
              </h1>
              <p className=" text-xs font-OpenSans   break-words ">
                Crafting Software Solutions that drive business growth
              </p>
            </div>
          </div>

          <div className="nav">
            <ul className=" hidden xl:flex items-center    gap-12 text-xl font-semibold     ">
              <li className="hover:text-costumeRed ">
                <Link href="/#home">Home</Link>
              </li>
              <li className="hover:text-costumeRed ">
                <Link href="/#about-us">About</Link>
              </li>
              <li className="hover:text-costumeRed ">
                <Link href="/#services">Services</Link>
              </li>
              <li className="hover:text-costumeRed ">
                <Link href="/#ourwork">Our Work</Link>
              </li>
              <li className="mx-3 text-xl font-semibold   hover:bg-costumeRed text-black-700 hover:text-white   px-10 p-3  border-2 border-costumeRed  rounded-full">
                <Link href="/#contact">Contact us</Link>
              </li>
            </ul>
            <div className=" xl:hidden  ">
              <Link href="/">
                <Image
                  className=" cursor-pointer"
                  src="/images/logo/menu.png"
                  alt="Logo"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
