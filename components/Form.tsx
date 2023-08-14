import { useState } from "react";
import Link from "next/link";

export default function Form(props: any) {
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
    <form
      className={props.formClass}
      onSubmit={submitHandler}
    >
      <input
        className={props.emailClass}
        type="text"
        aria-label="Email"
        placeholder="Email "
        value={email}
        onChange={(event) => {
          inputChanger("email", event.target.value);
        }}
      />
      <input
        className={props.fullNameClass}
        type="text"
        aria-label="Full name"
        placeholder="Full name"
        value={fullname}
        onChange={(event) => {
          inputChanger("fullname", event.target.value);
        }}
      />
      <input
        className={props.messageClass}
        type="text"
        aria-label="Message"
        placeholder="Message"
        value={message}
        onChange={(event) => {
          inputChanger("message", event.target.value);
        }}
      />
      <div className="pt-4 ">
        <button aria-label="submit" className={props.buttonClass}>
          SUBMIT
        </button>
      </div>
    </form>
  );
}
