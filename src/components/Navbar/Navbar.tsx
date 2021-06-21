import React, {FC} from 'react';
import "./../../App.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../Redux/redux-store";
import {selectMenuActive} from "../../Redux/auth-selector";
import {setMenuActiveAC} from "../../Redux/navbarReducer";

type PropsType = {}

export const Navbar: FC<PropsType> = () => {
    const active = useSelector(selectMenuActive)

    const dispatch = useDispatch()

    const setMenuActive = () => {
        dispatch(setMenuActiveAC(false))
    }
    const isAuth = useSelector((state: appStateType) => state.auth.isAuth)

    const arrNavbar = useSelector((state: appStateType) => state.navbar.navbarItems.map(n => {
        return <div key={n.id} className="nav__array">
            <Link to={n.urlName}><img
                src={n.src}/>
            </Link>
        </div>
    }))
    return (
        <nav className={active ? 'nav__wrapper active' : 'nav__wrapper'} onClick={setMenuActive}>
            <div className="nav__blur">
                 <div className={isAuth ?"nav__content":"nav__NotAuth"} onClick={e=>e.stopPropagation()}>{arrNavbar}</div>
            </div>
        </nav>
    )
}





