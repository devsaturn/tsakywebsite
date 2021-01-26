import { Button } from '@material-ui/core'
import React from 'react'
import '../App.scss'
import "./Navigation.scss"


function Navigation() {
    return (
        <div className="Navigation__container">
            <div className="Navigation__section">
                <h1>TSAKY</h1>

                <div className="Navigation__groupItems">
                    <p className="Navigation__item">Caisse</p>
                    <p className="Navigation__item">Contactez-nous</p>
            </div>

            </div>
            
            
        </div>
    )
}

export default Navigation
