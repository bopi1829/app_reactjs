import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './components/PureCompo';
import StateCompo from './components/StateCompo';
import React ,{Component }from 'react';

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
    stateApp: ""
    }
  }

  onInputChange = (val) => {
    console.log("val dans APP -> " + val)
    this.setState({stateApp: val})
  }

  render() {
    let mesLabel = [];
    mesLabel.push("Pierrick")
    mesLabel.push("Alexandra")
    mesLabel.push("Mateo")
    mesLabel.push("Nana")


    return (
      <div className="App">
        <header className="App-header">
        {mesLabel.map((libelle) => 
          <StateCompo key={libelle} label={libelle} onInputChange = {this.onInputChange}/>
        )}
        
       
        <PureCompo/>
        {this.state.stateApp ? <PureCompoProps label={this.state.stateApp} age={37}/> : <div>Champ non rempli</div>}
        
  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Modification <code>src/App.js</code> and save to reload.
        </p>
  
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
}

export default App;
