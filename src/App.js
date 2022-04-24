import Home from "./Pages/HomePage";
import Bar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <Bar />
      </div>
      <Home/>
    </div>
  );
}

export default App;
