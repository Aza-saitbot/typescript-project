import React, {FC} from 'react';
import './Event.css';
import '../Profile.module.css';
import {NavLink} from "react-router-dom";
import {lifeEventType} from "../../../../../Redux/profile-reducer";

type PropsType={lifeEvent:Array <lifeEventType>}

const Events:FC <PropsType> = ({lifeEvent}) => {

    const Event = lifeEvent.map(m => {
        return <div className="event__lifeEvent" key={m.id}>
            <div><img src={m.src}/></div>
            <div className="event__textTime">
                <div><h3>{m.text}</h3></div>
                <div><h4>{m.time}</h4></div>
            </div>
        </div>
    })

    return <div className="event__wrapper">
        <div className="event__title">
            <div className="event__titleName"><h2>Life Event</h2></div>
            <div className="event__titleNav"><NavLink to='/profile'>Create</NavLink></div>
        </div>
        {Event}
    </div>
}
export default Events;