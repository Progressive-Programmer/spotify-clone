import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';




function Body({spotify}) {

    const [{ discover_weekly, tracks, playlists }, dispatch] = useDataLayerValue();
    console.log(" youuuu>>>",discover_weekly)
    console.log("Playlisy", playlists)
    console.log("tracks", tracks)


    return (
        <div className="body"> 
            <div className="body__top">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={(discover_weekly?.images[0].url) } alt="" />
                <div className="body__infoText"> 

                    <strong>PLAYLIST</strong>
                    <h2>Discovery Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            </div>
            <div className="body__songs"> 
                <div className="body__icons">
                    <PlayCircleFilledWhiteIcon  className="body__shuffle"/>
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                { discover_weekly?.tracks.items.map( item => (
                    <SongRow track={item.track} />
                ))}

            </div>
        </div>
    );
}
 
 export default Body;
