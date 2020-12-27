/**
 * @author Bopi1829
 * Premier composant state react
 */
import React ,{Component }from 'react';
import './StateCompo.css';

export class StateCompo extends Component {
    constructor(props) {
        super(props);
        //console.log("label " + props.label);
        this.state = {nom : ""};
    }

    handleChange = (e) => {
        this.setState({nom : e.target.value});
        this.props.onInputChange(e.target.value);
    }

    render() {
        return(
            <div>
                <h3 className = "state-h3">Compo State {this.props.label} </h3>
                <input type = "text" value = {this.state.nom} onChange = {this.handleChange}></input>
            </div>
        )
    }
}

export class NewStateCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {nom : ""};
    }

    changeName = (e) => {
        this.setState({nom: e.target.value})
    }

    render() {
        return(
            <div>
                <h5 className = "state-h5">Nouveau Compo State {this.state.nom}</h5>
                <input type = "text" value = {this.state.nom} onChange = {this.changeName} ></input>
            </div>
        )
    }
}
