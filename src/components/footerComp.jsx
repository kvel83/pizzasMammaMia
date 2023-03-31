import React from "react";

import Logo from '../assets/img/logo.png';
import SocialNetCompt from "./socialNetComp";

import "./footerComp.css";

const FooterComp = () => {
    const styleFooter = {
        // backgroundColor: '#d32f2f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '2px solid red',
        flexDirection: 'column',
        margin: '0',
        padding: '0'
    };
    const styleLogo = {
        // backgroundColor: '#fdfd02',
        borderRadius: '20px',
        width:'150px',
        marginTop:'5px',
        marginBottom:'5px',
        padding:'0px'
    }
    const styleContacto = {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 'small'
    }
    return(
        <div container style={styleFooter}>
            <div className="cont">
            <img src={Logo} alt="Logo mamma mia" style={styleLogo} className='logo'/>
            <div className="contacto" style={styleContacto}>
                <p>Dirección: Baker Street #221B</p>
                <p>Teléfono: +56225488888</p>
                <p>Mail: pedidos@mammamia.cl</p>
            </div>
            </div>
            <SocialNetCompt />
        </div>
    )
}

export default FooterComp;