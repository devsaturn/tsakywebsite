import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import productNatute from '../assets/images/Products/tsaky-nature.jpg'
import './ProductCard.scss'


function ProductCard({title, image}) {
    return (
            <Card>
                <CardHeader title={title}/>
                <CardContent className="Production__content">
                 <img src={image} alt="nature" className="Product__cardImage"/>

                </CardContent>
                
                <CardContent className="Production__content">
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte</p>
                </CardContent>
            </Card>
            
    )
}

export default ProductCard
