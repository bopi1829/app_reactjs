/**
 * @author Bopi1829
 * Composant JeuxCategory react
 */
import React ,{Component} from 'react';

class JeuxCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th colSpan = "2">
                    {this.props.category}
                </th>
            </tr>
        )
    }
}

export default JeuxCategory;