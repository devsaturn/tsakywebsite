import React, { useState } from 'react'
import './Footer.scss'
import avanaLogo from '../assets/images/partenaires/avana_selima.png'
import fivmpamaLogo from '../assets/images/partenaires/FIVMPAMA Toulouse.png'
import disporaLogo from '../assets/images/partenaires/diaspora.jpg'
import airMadagascarLogo from '../assets/images/partenaires/airMadagascar.png'
import evasionCoachingLogo from '../assets/images/partenaires/evasionCoachingLogo.png'
import gasikartsLogo from '../assets/images/partenaires/gasikartsLogo.jpg'
import quintessentiaLogo from '../assets/images/partenaires/quintessiaLogo.jpg'
import sekolygasylLogo from '../assets/images/partenaires/sekolygasyLogo.png'
import soa6gasyLogo from '../assets/images/partenaires/soa6gasyLogo.jpg'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'
import { Button } from '@material-ui/core'

function Footer() {
    const [data, setData] = useState([
        {
            id: 1,
            image: avanaLogo,
            title: 'avana',
            cols: 2
        },
        {
            id: 2,
            image: fivmpamaLogo,
            title: 'fivmpama',
            cols: 2
        },
        {
            id: 3,
            image: disporaLogo,
            title: 'dispora',
            cols: 2
        },
        {
            id: 4,
            image: airMadagascarLogo,
            title: 'airMadagascar',
            cols: 2
        },
        {
            id: 5,
            image: evasionCoachingLogo,
            title: 'evasioncoaching',
            cols: 2
        },
        {
            id: 6,
            image: gasikartsLogo,
            title: 'gasikarts',
            cols: 2
        },
        {
            id: 7,
            image: quintessentiaLogo,
            title: 'quintessentia',
            cols: 2
        },
        {
            id: 8,
            image: sekolygasylLogo,
            title: 'sekolygasyl',
            cols: 2
        },
        {
            id: 9,
            image: soa6gasyLogo,
            title: 'soa6gasy',
            cols: 2
        },
    ])


    return (
        <div className="Footer__container">
            <div className="Footer__section__entreprise">
                <h3>TSAKY</h3>
                <p className="Footer__section__entreprise_marque">Tsaky est une marque de Nah Events.</p>
                <div className="Footer__section__entreprise_reseau">
                    <AiFillFacebook className="Footer__section__entreprise_reseau_icon" size={25}/>
                    <AiFillInstagram className="Footer__section__entreprise_reseau_icon" size={25}/>
                    <AiFillLinkedin className="Footer__section__entreprise_reseau_icon" size={25}/>
                </div>
            </div>
            <div className="Footer__section__partenaires">
                <h3>Ils nous font confiance</h3>
                    {data.map((tile) => {
                        return (
                            <img className="Footer__section__partenaires_item" src={tile.image} alt={tile.title} />  
                        )
                    })
                 }
            </div>
            <div className="Footer__section__contacts">
                <div className="Footer__section__contacts_link">
                    <Button>
                        <RiMailSendLine className="Footer__section__contacts_icon" size={27}/>
                        <h3>Contactez-nous</h3>
                    </Button>
                </div>

                       
            </div>
            <div className="Footer__section">

                


            </div>
        </div>
    )
}

export default Footer
