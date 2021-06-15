import React, {FC} from "react";
import "../dialogsItems.css"
import {NavLink} from "react-router-dom";
import {FriendsListType} from "../../../../../Redux/dialogs-reducer";


    const DialogItem:FC <FriendsListType> = ({id,src,name,
                                           name2,time1,time2,active}) => {
        return (
            <NavLink key={id} to={"/dialogs/" + id} className="dialogsItems__friends">
                <div className="dialogsItems__friends__avatar">
                    <img src={src} alt=''/>
                </div>
                <div className="dialogsItems__friends__profile">
                    <h3>{name}</h3>
                    <p>{name2}</p>
                </div>
                <div className="dialogsItems__friends_timeMessage">
                    <p>{time1}</p>
                    <p>{time2}</p>
                </div>
            </NavLink>
        )
    }

export default DialogItem;