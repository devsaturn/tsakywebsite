import React, {useState, useEffect} from "react"
import ProductCard from "../components/ProductCard"
import Footer from "../navigation/Footer"
import './HomePage.scss'
import productNatute from '../assets/images/Products/tsaky-nature.jpg'
import productFromage from '../assets/images/Products/tsaky-fromage.jpg'
import productPiment from '../assets/images/Products/tsaky-piment.jpg'

import Rellax from 'rellax'


function HomePage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'TSAKY nature',
      image: productNatute,
      type: 'nature'
    },
    {
      id: 2,
      title: 'TSAKY fromage',
      image: productFromage,
      type: 'fromage'
    },
    {
      id: 3,
      title: 'TSAKY piment',
      image: productPiment,
      type: 'piment'
    }
  ])

  useEffect(() => {
    var rellax = new Rellax('.rellax', {
      breakpoints: [576, 768, 1201],
      center: true
    });

    rellax.refresh()

  }, [])



  return (
      <div className="HomePage__container">
        <div className="rellax" data-rellax-percentage="0.5">
          <h5>En plus des spécialités traditionnelles malgaches les plus courantes en snacking, plats, pâtisserie, en 2020 Nah Events fait le défi de lancer officiellement la vente des Tsaky en France.</h5>

        </div>

        <div className="rellax" data-rellax-speed="-2" data-rellax-percentage="0.5">
          <h5>"Tsaky" est une marque de Nah Events, l' appellation de ses "caca pigeon"</h5>
        </div>



        <div className="HomePage__section rellax" data-rellax-speed="-5">
          {
            products.map(product =>  {
              return (
                <ProductCard key={product.id} title={product.title} image={product.image} type={product.type}/>
              )
            })

          }

        </div>

        {/* <div className="rellax" data-rellax-speed="5"
         data-rellax-zindex="5" data-rellax-percentage="0.7">
          <GiCheeseWedge size={100}/>
          </div>
          <div className="rellax" data-rellax-speed="-5" 
          data-rellax-zindex="1" data-rellax-percentage="0.2">
          <GiChiliPepper size={300}/>
          </div> */}


        <Footer />
      </div>
  )
}

export default HomePage
