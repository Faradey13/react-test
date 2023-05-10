import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault()
        localStorage.setItem('auth', 'true')
        setIsAuth(true)
    }
    return (

        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"}}>
            <form onSubmit={login} action="">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <MyInput placeholder="Логин" type="text"/>
                    <MyInput placeholder="Пароль" type="password"/>
                </div>
                <MyButton>Войти</MyButton>
            </form>


        </div>
    );
};

export default Login;