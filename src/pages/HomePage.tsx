import React, {useState, useEffect} from "react"
import ProductCard from "../components/ProductCard"
import Footer from "../navigation/Footer"
import './HomePage.scss'
import productNatute from '../assets/images/Products/tsaky-nature.jpg'
import productFromage from '../assets/images/Products/tsaky-fromage.jpg'
import productPiment from '../assets/images/Products/tsaky-piment.jpg'
import scene3 from '../assets/images/decoration/3SCENE.png'
import Rellax from 'rellax'
import { Divider, Drawer } from "@material-ui/core"
import SectionHeader from "../components/SectionHeader"
import {useSelector, useDispatch} from "react-redux"
import {productsSelector} from "../store/reduces/productSlice"
import {openSelector} from "../store/reduces/basketSlice"
import Command from "../components/Command"

function HomePage() {
  const products = useSelector(productsSelector)
  const open = useSelector(openSelector)

  useEffect(() => {
    // var rellax = new Rellax('.rellax', {
    //   breakpoints: [576, 768, 1201],
    //   center: true
    // });

    // rellax.refresh()

  }, [])



  return (
    <>
      <div className="HomePage__container">
        <div className="HomePage__section_header">
        <p>
                "Biscuits salés, spécialités et produits phares de Madagascar, déclinés en différentes formes et saveurs.
            Ils se dégustent en apéritif, ou en goûter pour le plaisir gourmand des petits et des grands !"

                </p>
        </div>


        <div className="HomePage__section">
         <img src={scene3} alt="scene3" className="HomePage__Imagerestaurant"></img>

          <div className="HomePage__section_products">
          {
            products.map(product =>  {
              return (
                <ProductCard key={product.id} title={product.title} image={product.image} type={product.type}/>
              )
            })

          }
          </div>
          

        </div>
        <div className="HomePage__section_header">
        </div>


        {/* <div className="rellax" data-rellax-speed="5"
         data-rellax-zindex="5" data-rellax-percentage="0.7">
          <GiCheeseWedge size={100}/>
          </div>
          <div className="rellax" data-rellax-speed="-5" 
          data-rellax-zindex="1" data-rellax-percentage="0.2">
          <GiChiliPepper size={300}/>
          </div> */}


      </div>
      <Drawer className="Home_drawer"
        variant="persistent"
        anchor="right"
        classes={{paper: '500'}}
        open={open}>
          <Command/>
        </Drawer>
</>
  )
}

export default HomePage
