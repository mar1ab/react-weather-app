import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo" />
      <a
        href="https://github.com/mar1ab/react-weather-app"
        className="github-link"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default App;
