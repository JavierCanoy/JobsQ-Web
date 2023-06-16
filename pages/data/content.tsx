import React from "react";

export default function ContentServices({
  selectedButton,
}: {
  selectedButton: string;
}) {
  return (
    <div className="content">
      {selectedButton === "1" && (
        <div className=" pt-16">
          <div className=" flex justify-around  mx-24">
            <div>
              <h1 className=" text-5xl font-Poppins font-bold mx-2">
                Full Software <br /> Development Service:
              </h1>
            </div>
            <div>
              <p className="text-xl font-OpenSans">
                1Welcome to our Full Software Development service, where we
                specialize in <br />
                delivering high-quality software solutions to meet our client's
                unique needs <br /> and requirements. Our experienced software
                developers and project <br /> managers dedicate themselves to
                providing a seamless software <br /> development experience from
                start to finish.
              </p>
            </div>
          </div>
        </div>
      )}
      {selectedButton === "2" && (
        <div className=" pt-16">
          <div className=" flex justify-around  mx-24">
            <div>
              <h1 className=" text-5xl font-Poppins font-bold mx-2">
                Mobile App <br /> Development
              </h1>
            </div>
            <div>
              <p className="text-xl font-OpenSans">
                2Welcome to our Full Software Development service, where we
                specialize in <br />
                delivering high-quality software solutions to meet our client's
                unique needs <br /> and requirements. Our experienced software
                developers and project <br /> managers dedicate themselves to
                providing a seamless software <br /> development experience from
                start to finish.
              </p>
            </div>
          </div>
        </div>
      )}
      {selectedButton === "3" && (
        <div className=" pt-16">
          <div className=" flex justify-around  mx-24">
            <div>
              <h1 className=" text-5xl font-Poppins font-bold mx-2">
                Search Engine
                <br /> Optimization (SEO)
              </h1>
            </div>
            <div>
              <p className="text-xl font-OpenSans">
                3Welcome to our Full Software Development service, where we
                specialize in <br />
                delivering high-quality software solutions to meet our client's
                unique needs <br /> and requirements. Our experienced software
                developers and project <br /> managers dedicate themselves to
                providing a seamless software <br /> development experience from
                start to finish.
              </p>
            </div>
          </div>
        </div>
      )}
      {selectedButton === "4" && (
        <div className=" pt-16">
          <div className=" flex justify-around  mx-24">
            <div>
              <h1 className=" text-5xl font-Poppins font-bold mx-2">
                Software Development <br />
                Outsourcing
              </h1>
            </div>
            <div>
              <p className="text-xl font-OpenSans">
                4Welcome to our Full Software Development service, where we
                specialize in <br />
                delivering high-quality software solutions to meet our client's
                unique needs <br /> and requirements. Our experienced software
                developers and project <br /> managers dedicate themselves to
                providing a seamless software <br /> development experience from
                start to finish.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
