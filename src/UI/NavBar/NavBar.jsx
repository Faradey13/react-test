import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import MyButton from "../button/MyButton";
import {AuthContext} from "../../context";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar__block">
            <div className="navbar__block_item">
                <Link to="/about">About</Link>
                <Link to="/blocks">Blocks</Link>
            </div>
            <MyButton onClick={logout}>Выйти</MyButton>

        </div>
    );
};

export default NavBar;