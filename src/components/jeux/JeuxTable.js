/**
 * @author Bopi1829
 * Composant JeuxTable react
 */
import React ,{Component} from 'react';
import JeuxCategory from './JeuxCategory';
import JeuxRow from './JeuRow';

class JeuxTable extends Component {
    constructor(props) {
        super(props);
        console.log("Les jeux de JeuxTable : ", props.jeux)
        

    }

    render() {

        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        this.props.jeux.forEach(jeu => {
            //console.log("jeu", jeu.name)
            if (jeu.name.indexOf(filterText) === -1) {
                return;
            }

            if (inStockOnly && !jeu.stocked) {
                return;
            }
            
            rows.push(<JeuxRow key = {jeu.name} jeu = {jeu}/>);
        });
        //rows.push(<JeuxRow key = "1" jeu/>);
        //rows.push(<JeuxRow key = "2"/>);
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    {rows}
                </table>
            </div>
        )
    }
}

export default JeuxTable;