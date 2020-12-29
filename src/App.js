import logo from './logo.svg';
import './App.css';
import {NewCompo, PureCompo, PureCompoProps, NewCompoProps} from './components/PureCompo';
import {StateCompo, NewStateCompo} from './components/StateCompo';
import React ,{Component} from 'react';
import CompoCycleDeVie from "./components/CompoCycleDeVie";
import FilterableJeuxTable from "./components/jeux/FilterableJeuxTable";


class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {stateApp: ""}
  }

  onInputChange = (val) => {
    this.setState({stateApp: val})
  }

  render() {
    
    /*
    let mesLabel = [];
    mesLabel.push("Pierrick")
    mesLabel.unshift("Alexandra")
    */

    const JEUX = [];
    JEUX.push({category: 'FPS', price: '10 €', stocked: false, name: 'Counter Srtike'});
    JEUX.push({category: 'FPS', price: '40 €', stocked: false, name: 'Battlefield'});
    JEUX.push({category: 'FPS', price: '20 €', stocked: true, name: 'Call Of Duty'});
    JEUX.push({category: 'Aventure', price: '20 €', stocked: false, name: 'Uncharted'});
    JEUX.push({category: 'Aventure', price: '10 €', stocked: true, name: 'Tomb Raider'});
    JEUX.push({category: 'Aventure', price: '50 €', stocked: true, name: 'Zelda'});
    JEUX.push({category: 'Sport', price: '45 €', stocked: false, name: 'NBA2K21'});
    JEUX.push({category: 'Sport', price: '50 €', stocked: true, name: 'FIFA21'});
    JEUX.push({category: 'Sport', price: '30 €', stocked: false, name: 'ePES2021'});
    JEUX.push({category: 'Course', price: '30 €', stocked: true, name: 'Colin McRae Rally'});
    JEUX.push({category: 'Course', price: '45 €', stocked: false, name: 'Gran Turismo 5'});
    JEUX.push({category: 'Course', price: '20 €', stocked: false, name: 'Forza Motorsport'});
    JEUX.push({category: 'Action', price: '50 €', stocked: true, name: 'GTA V'});
    JEUX.push({category: 'Action', price: '20 €', stocked: false, name: "Assassin's Creed"});
    JEUX.push({category: 'Action', price: '30 €', stocked: true, name: "The Last of Us"});

    return (
      <div className = "App">
        <header className = "App-header">

        <FilterableJeuxTable jeux = {JEUX}/>
                
      
        {/**<CompoCycleDeVie/>
        {mesLabel.map((libelle) =>
          <StateCompo key = {libelle} label = {libelle} onInputChange = {this.onInputChange}/>
        )}
                
        <NewStateCompo name = {'Bopi1829'}/>

        <NewCompo/> 
        <NewCompoProps firstName = {'Alexandra'} lastName = {'Lacoste'}/>      
        <PureCompo/>
        {this.state.stateApp ? <PureCompoProps label={this.state.stateApp}/> : <div>Champ non rempli</div>}
         * <img src = {logo} className = "App-logo" alt = "logo" />
        <p>
          Edit Modification <code>src/App.js</code> and save to reload.
        </p>
  
        <a
        className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer"
          >
            Learn React
          </a> */}
      
        </header>
      </div>
    );
  }
}

export default App;
