import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown'; 
import { Slider, Grid } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            
            <div className= "footer__left">
                <img 
                className="footer__albumLogo"
                src="https://mosaic.scdn.co/300/ab67616d0000b27308651acf98d37216efe300c9ab67616d0000b27368f7328df098bdb5cca8def3ab67616d0000b27394d280f0006107be47bb4fe7ab67616d0000b273f17eb24879bd7b1d526e6e04" 
                alt=""/>
                <div className="footer__songInfo" >
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

           
                <div className= "footer__center">
                    <ShuffleIcon className="footer__green"/>
                    <SkipPreviousIcon  className="footer__icon"/>
                    <PlayCircleOutlineIcon className="footer__icon" fontSize="large"/>
                    <SkipNextIcon  className="footer__icon" />
                    <RepeatIcon className="footer__green" />    
                </div>
            

            <div className= "footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>
           
            </div>
        </div>
    )
 
}

export default Footer;
