import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';

function Header({spotify}) {
    const [{user}, dispatch] = useDataLayerValue(); 

    return (
        <div className="header">
            <div className="header__left" >
                <SearchIcon />
                <input 
                    placeholder="Search for Artists"
                    type="text"
                />
            </div>
            <div className="header__right" >
                <Avatar className="header__avatar" src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>

            </div>            
        </div>
    )
}

export default Header;
