import React, { Component } from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import FormIcon from '@material-ui/icons/Forum'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <IconButton>
                <PersonIcon fontSize='large' className='header_icon'></PersonIcon>
                </IconButton>
                <img className="header__logo" src="https://www.sostav.ru/images/news/2017/08/16/slides/EfrgtGU0_l.jpg" alt="" />
               <IconButton>
               <FormIcon fontSize="large" className="header__icon"></FormIcon>
               </IconButton>
            </div>
        )
    }
}

export default Header

