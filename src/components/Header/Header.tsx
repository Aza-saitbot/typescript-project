import React, {FC, useState} from "react";
import "./../../App.css";
import {Link, NavLink, Redirect,Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth, selectMenuActive} from "../../Redux/auth-selector";
import {Button} from "antd";
import 'antd/dist/antd.css'
import {logout} from "../../Redux/authReducer";
import { UnorderedListOutlined,AlignRightOutlined } from "@ant-design/icons";
import {setMenuActiveAC} from "../../Redux/navbarReducer";



type PropsType = {}

const Header: FC<PropsType> = (props) => {

    let [ActiveBlockLogOut,setActiveBlockLogOut]=useState(false)

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const menuActive = useSelector(selectMenuActive)

    const dispatch = useDispatch();

    const LogoutCallback = () => {
        dispatch(logout());
    }
    const setMenuActive = () => {

        dispatch(setMenuActiveAC (!menuActive))
    }
    const showBlockLogOut=()=>{
        setActiveBlockLogOut(!ActiveBlockLogOut)
    }

    return (
        <>
            <div className="header__wrapper">
                <div>
                    <div  className="header__logo">
                        <NavLink  to="/profile">
                            <img src="https://iqonic.design/themes/socialv/html/images/loader.png" alt='Logo-app'/>
                        </NavLink>
                    </div>
                    <span className="header__burger">
                    <UnorderedListOutlined onClick={setMenuActive}
                                           style={{ fontSize: '30px' }} />
                </span>
                </div>
                <div className="header__authBlock">
                    {isAuth
                        ? <div className="header__logOutBlock">
                            <span><h2>{login}</h2></span>
                            <Button onClick={LogoutCallback}>Log out</Button>
                        </div>
                        : <div className="header__loginBlock">
                            <Button type="default"><Link to='/login'>Login</Link></Button>
                        </div>
                    }
                    <div className="header__authBlock__burger">
                        <AlignRightOutlined  style={{fontSize:'30px',color:'#08c'}} onClick={showBlockLogOut}/>
                    </div>
                </div>

            </div>
           <>
               <div className={ActiveBlockLogOut ?"header__wrapper_activeBlockLogOut active":"header__wrapper_activeBlockLogOut"}
                    onClick={showBlockLogOut}>
                   <div className= "header__activeBlockLogOut" onClick={e=>e.stopPropagation()}>
                       {isAuth
                           ? <div className="header__logOut__active">
                               <span><h2>{login}</h2></span>
                               <Button onClick={LogoutCallback}>Log out</Button>
                           </div>
                           : <div className="header__login__active">
                               <Button type="default"><Link to='/login'>Login</Link></Button>
                           </div>
                       }

                   </div>
               </div>
           </>
        </>

    )
};
export default Header;