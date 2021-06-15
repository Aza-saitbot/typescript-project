import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {appStateType} from "../../Redux/redux-store";

let mapStateToPropsForRedirect = (state:appStateType) => ({
    isAuth: state.auth.isAuth
});

type MapPropsType={
    isAuth:boolean
}


export function withAuthRedirect <WCP>(WrappedComponent:React.ComponentType <WCP>) {//первая обертка Component который вызывает

    const RedirectComponent:FC<MapPropsType >=(props:MapPropsType)=> {
        let {isAuth,...restProps}=props
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType,{},{},appStateType>(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}// вторая обертка, что бы вызывающая сторона не прокидовалы необходимые данные для успешной работы - withAuthRedirect
//если ты не авторизован перекидывает на страницу логин

