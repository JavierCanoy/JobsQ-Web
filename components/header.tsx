import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* header-start */}
      <header className="  sticky backdrop-blur-md z-50  w-full bg-white/90  top-0 left-0 shadow-sm ">
        <div className="border-black-500  border  px-4 p-7 grid grid-cols-2   ">
          {/* logo */}
          <div className=" flex  mx-12 ">
            <Link href="#">
              <Image
                src="/images/logo/logo.png"
                alt="Logo"
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
    </>
  );
}
