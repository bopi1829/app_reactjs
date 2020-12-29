/**
 * @author Bopi1829
 * Composant JeuxTable react
 */
import React ,{Component} from 'react';
import JeuxCategory from './JeuxCategory';
import JeuxRow from './JeuRow';

class JeuxTable extends Component {
    constructor(props) {
        super(props)  
    }

    render() {

        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let filterCategory ;
        const rows = [];
        this.props.jeux.forEach(jeu => {
            
            if (jeu.name.toLowerCase().indexOf(filterText) === -1) {
                return;
            }

            if (inStockOnly && !jeu.stocked) {
                return;
            }

            if (jeu.category !== filterCategory) {
                rows.push(<JeuxCategory key = {jeu.category} category = {jeu.category}/>)
            }
            rows.push(<JeuxRow key = {jeu.name} jeu = {jeu}/>);
            filterCategory = jeu.category;
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