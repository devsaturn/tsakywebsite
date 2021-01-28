import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import productNatute from '../assets/images/Products/tsaky-nature.jpg'
import {GiCheeseWedge, GiChiliPepper, GiWheat} from 'react-icons/gi'
import {BsFillGiftFill} from 'react-icons/bs'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {AiFillMinusCircle} from 'react-icons/ai'
import Button from '@material-ui/core/Button';
import './ProductCard.scss'
import Badge from '@material-ui/core/Badge';
import {useDispatch} from 'react-redux'
import {add} from '../store/reduces/basketSlice'



function ProductCard(props) {
    const dispatch = useDispatch()
    const [quantity, setQuantity]= useState(0)

    const Decrement = () => {
        let newQuantity = quantity > 0 ? quantity - 1 : 0
        setQuantity(newQuantity)
    }

    const Increment = () => {
        let newQuantity = quantity  + 1
        setQuantity(newQuantity)

    }

    return (

            <Card className="Product">
                <div className="Product__header_card_sectionHeader">
                {
                props.image ? 
                <img src={props.image} alt="nature" className="Product__cardImage"/>
                : <div className="Product__cardImage"></div>
             }
                <h2 className="Product__header">{props.title}</h2>

                </div>
                <CardContent className="Productt__content__icons">
                    {
                        props.type === 'nature' ?
                        <Badge badgeContent={quantity} color="error">
                            <GiWheat className="Product__icon" size={80}/> 
                        </Badge>

                        :
                        props.type === 'fromage' ?
                        <Badge badgeContent={quantity} color="error">
                             <GiCheeseWedge className="Product__icon" size={80}/>
                        </Badge>
                         :
                         props.type === 'piment' ?
                         <Badge badgeContent={quantity} color="error">
                             <GiChiliPepper className="Product__icon" size={80}/> 
                         </Badge>
                         :
                         props.type === 'coffret' ?
                         <Badge badgeContent={quantity} color="error">
                             <BsFillGiftFill className="Product__icon" size={80}/> 
                         </Badge>
                         :
                         null
                    }

                </CardContent>
                <p className="Product__action_text">
                    Le Lorem Ipsum est simplement du faux texte employé...
                </p>
                <CardActions>
                    <div className="Product__action_counter">
                        <Button size="small" className="Product__action_button" onClick={() => Decrement()}><AiFillMinusCircle size={35} className="Product__action_button_icon"/></Button>
                        <Button size="small" className="Product__action_button" onClick={() => Increment()}><BsFillPlusCircleFill size={30} className="Product__action_button_icon"/></Button>

                    </div>
                    <Button disabled={!quantity} size="small" className="Product__action_button_commande" onClick={() => dispatch(add({props, quantity}))}>
                        <span>Ajouter à la commande</span>
                    </Button>

                </CardActions>

            </Card>
            
    )
}

export default ProductCard
