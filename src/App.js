import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1 className="text-center pt-2">Dictionary 📖</h1>
          <Dictionary defaultKeyword="fall" />
        </main>
        <footer className="text-center pb-5">
          <a href="https://github.com/rookiebehaviour/react-dictionary-app">
            Open-source
          </a>{" "}
          and coded with ❤️ by Jacqueline Mason
        </footer>
      </div>
    </div>
  );
}

export default App;
