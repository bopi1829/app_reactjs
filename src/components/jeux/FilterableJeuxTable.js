/**
 * @author Bopi1829
 * Composant FilterableJeuxTable react
 */
import React ,{Component} from 'react';
import SearchCompo from './SearchCompo';
import JeuxTable from './JeuxTable';

class FilterableJeuxTable extends Component {
    constructor(props) {
        super(props);
        //console.log("Les jeux : ", props.jeux)
        this.state = {
            filterText: "",
            inStockOnly: false
        }
    }

    handleFilterTextChange = (e) => {
        console.log("parent",e);
        this.setState({filterText: e})
    }

    handleInStockChange = (e) => {
        console.log("parent", e);
        this.setState({inStockOnly: e})        
    }

    render() {
        return(
            <div>
                FilterableJeuxTable
                <SearchCompo 
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    handleFilterTextChange = {this.handleFilterTextChange}
                    handleInStockChange = {this.handleInStockChange}
                />
                <JeuxTable jeux = {this.props.jeux}
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                />
            </div>
        )
    }
}

export default FilterableJeuxTable;