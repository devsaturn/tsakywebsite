import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import productNatute from '../assets/images/Products/tsaky-nature.jpg'
import {GiCheeseWedge, GiChiliPepper, GiWheat} from 'react-icons/gi'

import './ProductCard.scss'


function ProductCard({title, image, type}) {
    return (
            <Card>
                <CardHeader className="Product__header" title={title}/>
                <CardContent className="Productt__content__icons">
                    {
                        type === 'nature' ?
                        <GiWheat className="Product__icon" size={80}/> :
                        type === 'fromage' ?
                         <GiCheeseWedge className="Product__icon" size={80}/> :
                         type === 'piment' ?
                         <GiChiliPepper className="Product__icon" size={80}/> :
                         null
                    }



                </CardContent>
                
                <CardContent className="Product__content">
                    <img src={image} alt="nature" className="Product__cardImage"/>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux</p>
                </CardContent>
            </Card>
            
    )
}

export default ProductCard
