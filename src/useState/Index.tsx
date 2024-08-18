import React, { useState } from "react";

function UseStateSection() {
  const [count, setCount] = useState<number>(0);

  /**
   * 「＋」ボタン押下時に加算処理
   */
  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="text-3xl">useState</h1>
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
