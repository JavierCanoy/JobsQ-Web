import React, { useState } from "react";

export default function SubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const inputChanger = (identificator: any, value: any) => {
    if (identificator === "name") {
      setName(value);
    } else if (identificator === "email") {
      setEmail(value);
    }
  };
  console.log("name : ", name, " ,email : ", email);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const dataInput = {
      name: name,
      email: email,
    };
    console.log(dataInput);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <div className="main-subscribes h-screen  grid grid-cols-12   px-6 w-full   bg-costumeOrange">
        <div className="   m-auto col-span-12 ">
          <div className="">
            <h5 className=" py-5 text-center text-xl font-OpenSans font-light text-white     ">
              NEWSLETTER
            </h5>
            <h2 className="md:pb-10 text-center text-5xl font-Poppins font-bold text-white">
              Subscribe Company newsletter
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" py-10 md:max-w-md md:mx-auto xl:flex xl:max-w-4xl xl:gap-5"
          >
            <input
              className=" py-4 text-base w-full lg:py-8 text-white   leading-tight focus:outline-none border-b-2    bg-transparent placeholder-white "
              type="text"
              aria-label="Your-name"
              placeholder="Your name "
              onChange={(event: any) => {
                inputChanger("name", event.target.value);
              }}
            />
            <input
              className="py-4 w-full  lg:py-8  text-base  text-white  leading-tight focus:outline-none border-b-2  bg-transparent placeholder-white  "
              type="text"
              aria-label="Email"
              placeholder="Email"
              onChange={(event: any) => {
                inputChanger("email", event.target.value);
              }}
            />
            <div className="py-10 xl:flex xl:items-end  xl:py-0  ">
              <button
                aria-label="submit"
                type="submit"
                className="  text-sm text-white bg-transparent hover:border-costumeOrange hover:bg-white text-black-700 font-semibold hover:text-red-600 border-2 px-12 p-3 border-white hover:border-transparent rounded-full"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
