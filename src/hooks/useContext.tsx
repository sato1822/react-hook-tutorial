import { useContext } from "react";
import { authorInfoContext } from "../main";

function UseContext() {
  const authorInfo = useContext(authorInfoContext);

  return (
    <>
      <h1 className="text-3xl">useContext</h1>
      <p className="text-xl">{authorInfo.name}</p>
      <p className="text-xl">{authorInfo.age}</p>
    </>
  );
}

export default UseContext;
