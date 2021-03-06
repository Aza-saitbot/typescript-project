import React, {FC} from 'react';
import "./../../App.css";
import {Link} from "react-router-dom";
import {appStateType} from "../../Redux/redux-store";
import {useSelector} from "react-redux";

type PropsType={}
export const Online:FC <PropsType> = (props) => {

    const isAuth = useSelector((state: appStateType) => state.auth.isAuth)

    const onlinePerson=useSelector((state:appStateType)=>state.online.onlinePerson.map(n => {
        return <div key={n.id} >
            <Link to={n.urlName}><img src={n.src} alt={n.alt}/>
                <h3>{n.h6}</h3>
            </Link>
        </div>
    }))
    return <div className={isAuth ? "online__wrapper":"online__NotAuth"}>
        {onlinePerson}
    </div>
}

