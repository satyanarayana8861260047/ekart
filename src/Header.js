import React from 'react';
import './Header.css';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Header = () => {
  return (
    <div className='header'>
        <div className="header_logo">
      <StorefrontIcon fontSize='large' className='header_logoimg'/>
      <h2 className='header_logoTitle'>e Shop</h2>
      </div>
      <div className="header_searchbar">
      <input type="text" className='headerSearchInput'/>
      <SearchIcon className='header_searchIcon'/>
      </div>
      <div className="header_nav">
        <div className="nav_item">
        <span className="itemlineOne">hello guest</span>
        <span className="itemlineTwo">Sign in</span>
        </div>
        <div className="nav_item">
        <span className="itemlineOne">Your</span>
        <span className="itemlineTwo">Shop</span>
        </div>
        <div className="nav_item">
        <ShoppingBasketIcon fontSize='large' className='itemBasket'/>
        <span className="itemlineTwo nav_basketCount">0</span>
        </div>
      </div>
        
        </div>
  )
}

export default Header