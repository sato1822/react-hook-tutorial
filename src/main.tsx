import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const authorInfo = {
  name: "iori",
  age: 23,
};

export const authorInfoContext = createContext(authorInfo);

createRoot(document.getElementById("root")!).render(
  <authorInfoContext.Provider value={authorInfo}>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </authorInfoContext.Provider>,
);
