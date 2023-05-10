import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./UI/NavBar/NavBar";
import AppRoute from "./components/AppRoute";
import {AuthContext} from "./context";



function App() {
    const[isAuth, setIsAuth] = useState(false)
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRoute/>
            </BrowserRouter>
        </AuthContext.Provider>

    )

}

export default App;
