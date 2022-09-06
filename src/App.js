import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="Title">Dictionary</div>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <a
            href="https://github.com/plaerke/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open-coded
          </a>{" "}
          by Pernille Lærke Munk-Hansen
        </footer>
      </div>
    </div>
  );
}

export default App;
