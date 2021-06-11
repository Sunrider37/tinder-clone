import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

export default function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className='swipebuttons__repeat'>
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton className='swipebuttons__left'>
             <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className='swipebuttons__star'>
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton className='swipebuttons__right'>
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className='swipebuttons__lightning'>
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>
            
        </div>
    )
}
