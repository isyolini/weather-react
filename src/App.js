import "./App.css";
import Weather from "./Weather";

function App() {
  const city = "Rome";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React º_°</h1>
        <h3>from {city}</h3>
        <br />
        <Weather city="Tokyo" />
        <br />
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>
        <img src="./images/clear-day.svg" alt="Beatiful icon for an example" />
      </header>
    </div>
  );
}

export default App;
