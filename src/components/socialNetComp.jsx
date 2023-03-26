import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';

const SocialNetCompt = () => {
    return(
        <div className="socialMedia">
            <IconButton aria-label="facebookicon">
                <FacebookIcon style={{color:'#d32f2f', fontSize:'1.5em'}}/>
            </IconButton>
            <IconButton aria-label="instagramicon">
                <InstagramIcon style={{color:'#d32f2f', fontSize:'1.5em'}} />
            </IconButton>
            <IconButton aria-label="instagramicon">
                <WhatsAppIcon style={{color:'#d32f2f', fontSize:'1.5em'}} />
            </IconButton>
        </div>
    )
}

export default SocialNetCompt;
