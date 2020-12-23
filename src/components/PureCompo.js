/**
 * @author Bopi1829
 * Premier composant pure react
 */
import React from 'react';
import './PureCompo.css';

export function PureCompo() {
    return(
        <div>
            <h2 className="pure-h2">Pure Compo</h2>
        </div>
    )
}

export function PureCompoProps({label, age}) {
    return(
        <div>
            <h3 className="pure-h3">Pure props Compo {label} {age}</h3>
        </div>
    )
}

//export default PureCompo;