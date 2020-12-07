import React from 'react';
import classes from '../Header/Header.module.css';
import Aux from '../../hoc/Auxlary/Auxlary';
import {NavLink} from 'react-router-dom';
import {getUser} from '../../utils/Common'; 
import {useSelector} from 'react-redux';
const Header = () => {
    //const user = getUser();
    const islogged = useSelector(state => state.islogged);
    alert(islogged);
    return (
        <Aux>
            {islogged ? <div><NavLink to="/logout" exact>Logout</NavLink></div> :  <div><NavLink to="/" exact>Home</NavLink></div>} 
            <div>
                <h2 className={classes.heading}>Welcome To E-Training</h2>
                <hr></hr>
            </div>
        </Aux>
    )
}
export default Header;