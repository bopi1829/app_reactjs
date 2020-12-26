import logo from './logo.svg';
import './App.css';
import {NewCompo, PureCompo, PureCompoProps, NewCompoProps} from './components/PureCompo';
import {StateCompo, NewStateCompo} from './components/StateCompo';
import React ,{Component} from 'react';
import CompoCycleDeVie from "./components/CompoCycleDeVie";

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {stateApp: ""}
  }

  onInputChange = (val) => {
    //console.log("val dans APP -> " + val)
    this.setState({stateApp: val})
  }

  render() {
    let mesLabel = [];
    mesLabel.push("Pierrick")
        
    return (
      <div className="App">
        <header className="App-header">
        <CompoCycleDeVie/>
        {mesLabel.map((libelle) =>
          <StateCompo key={libelle} label={libelle} onInputChange = {this.onInputChange}/>
        )}
        
        <NewStateCompo name={'Bopi1829'}/>

        <NewCompo/> 
        <NewCompoProps firstName={'Alexandra'} lastName={'Lacoste'}/>      
        <PureCompo/>
        {this.state.stateApp ? <PureCompoProps label={this.state.stateApp}/> : <div>Champ non rempli</div>}
        
  
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
