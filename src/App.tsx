import UseStateSection from "./hooks/Index";
import UseContext from "./hooks/useContext";

function App() {
  return (
    <div className="bg-gray-800 h-screen w-screen text-white text-center">
      <UseStateSection />
      <hr />
      <UseContext />
    </div>
  );
}

export default App;
