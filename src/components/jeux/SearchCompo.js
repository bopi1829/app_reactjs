/**
 * @author Bopi1829
 * Composant SearchCompo react
 */
import React ,{Component} from 'react';

class SearchCompo extends Component {
    constructor(props) {
        super(props);
    }

    handleFilterTextChange = (e) => {
        this.props.handleFilterTextChange(e.target.value)
    }

    handleInStockChange = (e) => {
        this.props.handleInStockChange(e.target.checked)
    }

    render() {
        return(
            <div>
                <input type = "text"
                    placeholder = "search"
                    text = {this.props.filterText}
                    onChange = {this.handleFilterTextChange}
                />
                <input type = "checkbox"
                    checked = {this.props.inStockOnly}
                    onChange = {this.handleInStockChange}
                />
                {' '}
                Produit en stock seulement
            </div>
        )
    }
}

export default SearchCompo;