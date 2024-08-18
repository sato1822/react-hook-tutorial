import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  /**
   * 「＋」ボタン押下時に加算処理
   */
  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>useState</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>
    </>
  );
}

export default App;
