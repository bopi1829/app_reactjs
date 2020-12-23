/**
 * @author Bopi1829
 * Premier composant state react
 */
import React ,{Component }from 'react';

class CompoCycleDeVie extends Component {
    constructor(props) {
        super(props); 
        console.log('Je passe dans le consrtuctor'); 
    }

    componentDidMount() {
        console.log('Je passe dans le componentDidMount');
    }

    componentWillUnmount() {
        console.log('Je passe dans le componentWillUnmount')
    }

    render() {
        console.log('Je passe dans le render');
        return(
            <div>                
            </div>
        )
    }    
}

export default CompoCycleDeVie;