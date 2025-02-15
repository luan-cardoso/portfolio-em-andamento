import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
