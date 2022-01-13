import React, { useEffect } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import postToken from '../services/postToken';
import getPedidos from '../services/getPedidos';
import useAuth from '../Auth/useAuth';
import { useDispatch } from 'react-redux';
import {getProductsAction} from '../redux/negociemosDucks'


const  Verificar = () => {
    const location = useLocation()
    const auth = useAuth()
    console.log(location.pathname)

    const token = location.pathname.split("/verificacion/")
    const tokenCode = token[1];

    const tokenSend ="Bearer 1//" + tokenCode

    const dispatch = useDispatch()

     useEffect(()=> {
        // const postFunc = async () => {
        //     const pedidos = await getPedidos()
        //     if(pedidos.status == "200"){
                auth.upToken(tokenSend || localStorage.getItem("token"))
                dispatch(getProductsAction([null])) 

        //     }
        // }
        // postFunc()
    },[])


    return (
        <Redirect to='/'/>
        // <div className='Verificar'>
        //     <h3  style={{color:`black`}}>{tokenSend}</h3>
        // </div>
    );
}

export default Verificar