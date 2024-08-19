import { useEffect, useState } from "react";

function UseStateSection() {
  // useState
  const [count, setCount] = useState<number>(0);

  //useEffect
  useEffect(() => {
    console.log("Hello React");
  }, [count]);

  /**
   * 「＋」ボタン押下時に加算処理
   */
  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="text-3xl">useState, useEffect</h1>
      <button
        onClick={handleClick}
        className="border border-gray-300 bg-gray-200 text-gray-800 py-2 px-4 rounded"
      >
        ＋
      </button>
      <p className="text-xl">{count}</p>
    </>
  );
}

export default UseStateSection;
