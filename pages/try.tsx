import Image from "next/image";
export default function Try() {
  return (
    <>
      <div>
        <p className=" font-bold text-green-500 text-center"> javier </p>
        <Image
          src="/vercel.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
