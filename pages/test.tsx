export default function Try() {
  const handleClick = () => {
    console.log("javier! ");
  };
  return (
    <>
      <div>
        <div className=" p-0 m-0  flex justify-center pt-10">
          <button
            onClick={handleClick}
            className=" bg-red-300 rounded-lg px-4 border-2 border-black"
          >
            click me !
          </button>
        </div>
      </div>
    </>
  );
}
