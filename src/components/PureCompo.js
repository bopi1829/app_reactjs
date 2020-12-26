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

export function PureCompoProps({label}) {
    return(
        <div>
            <h3 className="pure-h3">Pure props Compo {label}</h3>
        </div>
    )
}

export function NewCompo() {
    return(
        <div>
            <h4 className="pure-h4">Nouveau composant</h4>
        </div>
    )
}

export function NewCompoProps({firstName, lastName}) {
    return(
        <div>
            <h4 className="pure-h4">Nouveau composant {firstName} {lastName}</h4>
        </div>
    )
}