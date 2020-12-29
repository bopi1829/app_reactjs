/**
 * @author Bopi1829
 * Composant JeuRow react
 */
import React ,{Component} from 'react';

class JeuRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let name;
        if (this.props.jeu.stocked) {
            name = this.props.jeu.name;
        } else {
            name = <span style = {{color: "red"}}>{this.props.jeu.name}</span>
        }
        return(
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{this.props.jeu.price}</td>
                </tr>
            </tbody>
        )
    }
}

export default JeuRow;