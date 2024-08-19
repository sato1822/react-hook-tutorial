import UseStateSection from "./hooks/Index";
import UseContext from "./hooks/useContext";
import UseRef from "./hooks/useRef";

function App() {
  return (
    <div className="bg-gray-800 h-screen w-screen text-white text-center">
      <UseStateSection />
      <hr />
      <UseContext />
      <hr />
      <UseRef />
    </div>
  );
}

export default App;
