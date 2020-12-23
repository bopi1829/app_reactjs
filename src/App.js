import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './components/PureCompo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Modification <code>src/App.js</code> and save to reload.
        </p>
        <PureCompo/>
        <PureCompoProps label={"Pierrick Boucharlat"} age={37}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
