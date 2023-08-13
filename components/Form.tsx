import { useState } from "react";
import Link from "next/link";

export default function Form() {
  console.log("javierForm");
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [message, setMessage] = useState("");

  // shared_fucntion !
  const inputChanger = (identificator: any, value: any) => {
    if (identificator === "email") {
      setEmail(value);
    } else if (identificator === "fullname") {
      setFullName(value);
    } else if (identificator === "message") {
      setMessage(value);
    }
  };

  console.log(
    "email : ",
    email,
    "full name : ",
    fullname,
    "message : ",
    message
  );

  const submitHandler = (event: any) => {
    event.preventDefault();
    const inputData = {
      email: email,
      fullname: fullname,
      message: message,
    };
    console.log(inputData, "iputData");
    setEmail("");
    setFullName("");
    setMessage("");
  };

  return (
    <div className="main-dreamproject grid grid-cols-12 md:h-screen  md:content-center md:mx-4">
      <div
        data-aos="fade-up"
        className="first col-span-12 w-full p-4 md:col-span-6  md:my-auto  xl:mx-auto xl:max-w-lg  "
      >
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
        <p className="text-xl font-bold font-OpenSans  py-2">+1 123 456 7890</p>
      </div>
      {/* form */}
      <form
        data-aos="fade-down"
        className="second col-span-12 px-4 w-full xl:max-w-lg md:col-span-6"
        onSubmit={submitHandler}
      >
        <input
          className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-10  w-full "
          type="text"
          aria-label="Email"
          placeholder="Email "
          value={email}
          onChange={(event) => {
            inputChanger("email", event.target.value);
          }}
        />
        <input
          className="py-6 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full  "
          type="text"
          aria-label="Full name"
          placeholder="Full name"
          value={fullname}
          onChange={(event) => {
            inputChanger("fullname", event.target.value);
          }}
        />
        <input
          className="py-10  text-base leading-tight focus:outline-none border-b-2 w-full  "
          type="text"
          aria-label="Message"
          placeholder="Message"
          value={message}
          onChange={(event) => {
            inputChanger("message", event.target.value);
          }}
        />
        <div className="pt-4 ">
          <button
            aria-label="submit"
            className=" text-sm text-red-600 bg-transparent hover:bg-red-600 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-red-600 hover:border-transparent rounded-full"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
