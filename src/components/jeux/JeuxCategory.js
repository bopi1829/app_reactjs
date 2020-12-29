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
            <tbody>
                <tr>
                    <th colSpan = "2">
                        {this.props.category}
                    </th>
                </tr>
            </tbody>
        )
    }
}

export default JeuxCategory;