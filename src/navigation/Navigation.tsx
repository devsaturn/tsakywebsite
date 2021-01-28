import { Button } from '@material-ui/core'
import React from 'react'
import '../App.scss'
import "./Navigation.scss"
import {BiBasket} from 'react-icons/bi'
import {RiMailSendLine} from 'react-icons/ri'
import Badge from '@material-ui/core/Badge';
import {useSelector, useDispatch} from 'react-redux'
import {sumSelector, totalSelector, open} from '../store/reduces/basketSlice'

function Navigation() {
    const dispatch = useDispatch()
    const sum = useSelector(sumSelector)
    const total = useSelector(totalSelector)
    return (
        <div className="Navigation__container">
            <div className="Navigation__section">
                <h1>TSAKY</h1>

                <div className="Navigation__groupItems">
                    <div className="Navigation__item">
                        <Button onClick={() => dispatch(open(true))}>
                            <Badge badgeContent={total} color="error">
                                <BiBasket className="Navigation__icon" size={30}/>  
                            </Badge>
                            <span className="Navigation__text">Panier</span>
                        </Button>
                        
                    </div>
                    
            </div>

            </div>
            
            
        </div>
    )
}

export default Navigation
