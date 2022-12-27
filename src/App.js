import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
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
