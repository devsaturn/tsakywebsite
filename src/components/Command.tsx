import React from 'react'
import './Command.scss'
import {useSelector, useDispatch} from 'react-redux'
import {basketsSelector, sumSelector ,open,initial, command} from '../store/reduces/basketSlice'
import { Button } from '@material-ui/core'



const Command =() => {
    const dispatch = useDispatch()
    const commands = useSelector(basketsSelector)

    const removeAll = () => {
        dispatch(initial())
        dispatch(open(false))
    }

    return (
        <div className="Command__container">
            <Button title="fermer" onClick={() => dispatch(open(false)) }>
                <span>Fermer</span>
            </Button>
            <Button title="fermer" onClick={() => removeAll()}>
                <span>Vide le panier</span>
            </Button>

            
        </div>
    )
}

export default Command
