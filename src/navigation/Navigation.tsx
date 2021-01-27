import { Button } from '@material-ui/core'
import React from 'react'
import '../App.scss'
import "./Navigation.scss"
import {BiBasket} from 'react-icons/bi'
import {RiMailSendLine} from 'react-icons/ri'
import Badge from '@material-ui/core/Badge';

function Navigation() {
    return (
        <div className="Navigation__container">
            <div className="Navigation__section">
                <h1>TSAKY</h1>

                <div className="Navigation__groupItems">
                    <div className="Navigation__item">
                        <Badge badgeContent={4} color="error">
                            <BiBasket className="Navigation__icon" size={30}/>  
                        </Badge>
                        
                        <span className="Navigation__text">Panier</span>
                    </div>
                    <div className="Navigation__item">
                        <RiMailSendLine className="Navigation__icon" size={30}/>
                        <span className="Navigation__text">Contactez-nous</span>
                    </div>
            </div>

            </div>
            
            
        </div>
    )
}

export default Navigation
