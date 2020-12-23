/**
 * @author Bopi1829
 * Premier composant state react
 */
import React ,{Component }from 'react';
import './StateCompo.css';

class StateCompo extends Component {
    constructor(props) {
        super(props);
        console.log("label " + props.label);
        this.state = {nom : ""};
    }

    handleChange() {
        console.log("Je passe ici ")
                
    }

    render() {
        return(
            <div>
                <h3 className="state-h3">Compo State {this.props.label} </h3>
                <input type="text" value={this.state.nom} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default StateCompo;