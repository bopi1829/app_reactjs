/**
 * @author Bopi1829
 * Premier composant state react
 */
import React ,{Component} from 'react';

export class CompoCycleDeVie extends Component {
    constructor(props) {
        super(props); 
        console.log('Je passe dans le constructor'); 
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

export class CycleVieCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        console.log('Je passe dans le componentDidMount CycleVieCompo')
    }

    render () {
        return(
            <div>

            </div>
        )
    }
}