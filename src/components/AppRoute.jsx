import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Blocks from "../pages/Blocks";
import Login from "../pages/Login";
import About from "../pages/About";
import BlockById from "../pages/BlockById";
import {routes} from "../router/routes";
import {AuthContext} from "../context";
import Myloader from "../UI/loader/Myloader";


const AppRoute = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)
    if(isLoading){
        return <Myloader/>
    }
    return (

        isAuth
            ?
            <Routes>


                {
                    routes.map(route =>
                        <Route key={route.path} path={route.path} element={route.element}/>
                    )
                }
                <Route path={"/*"} element={<Navigate to="/blocks" replace/>}/>
            </Routes>
            :
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/*"} element={<Navigate to="/login" replace/>}/>

            </Routes>
    )
        ;
};

export default AppRoute;