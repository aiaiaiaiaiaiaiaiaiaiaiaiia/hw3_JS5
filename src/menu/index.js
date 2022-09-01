import React from 'react';
import classes from './menu.module.css';

const Menu = () => {
  return (
    <div className={classes.menu}>
        <h2><u>ReStore</u></h2>
        <h5><i className="fas fa-shopping-cart"/> 5 items ($20)</h5>
    </div>
  )
}

export default Menu;