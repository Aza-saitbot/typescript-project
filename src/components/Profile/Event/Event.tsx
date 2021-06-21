import React, {FC} from 'react';
import './Event.css';
import '../Profile.module.css';
import {NavLink} from "react-router-dom";
import {lifeEventType} from "../../../Redux/profile-reducer";

type PropsType = { lifeEvent: Array<lifeEventType> }

const Events: FC<PropsType> = ({lifeEvent}) => {

    const Event = lifeEvent.map(m => <div className="event__images__item" key={m.id}><img src={m.src}/></div>)

    return (
        <div className="event__wrapper">
            <div className="event__title">
                <div className="event__titleName"><h2>Life Event</h2></div>
                <div className="event__titleNav"><NavLink to='/profile'>Create</NavLink></div>
            </div>
            <div className="event__images">{Event}</div>
        </div>
    )
}
export default Events;