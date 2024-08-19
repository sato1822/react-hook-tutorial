import { useRef } from "react";

function UseRef() {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.focus();
    console.log(ref.current?.value);
  };
  return (
    <>
      <h1 className="text-3xl">useRef</h1>
      <input className="text-black" type="text" ref={ref} placeholder="value" />
      <button
        onClick={handleClick}
        className="border border-gray-300 bg-gray-200 text-gray-800 py-2 px-4 rounded"
      >
        UseRef
      </button>
    </>
  );
}
export default UseRef;
