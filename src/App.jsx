import Hello from "./Components/009/Hello";
import Kurmis from "./Components/009/Kurmis";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva = "crimsom" size = "14" skaicius ={4}></Hello>
        <Hello spalva = "skyblue" size = "22"></Hello>
        <Hello spalva = "yellow" size = "10"></Hello>
          <Kurmis></Kurmis>
        komponentas - prasideda didziaja raide. pvz 'function App()' <br></br>
        , Propsas<br></br>
          , Steitas
      </header>
    </div>
  );
}

export default App;
