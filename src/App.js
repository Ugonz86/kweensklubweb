import kklogo2 from "./kklogo2.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="spinner"></div>
          <img src={kklogo2} className="App-logo" alt="logo" />
        </div>
        <p>For app support, please contact us at kkappdevtester@gmail.com</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <footer className="footer">
        App and Website Developed by UGX
      </footer>
    </div>
  );
}

export default App;
