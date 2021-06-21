import React, {FC} from 'react'
import './Friends.css'
import {NavLink} from "react-router-dom"
import {sidebarType} from "../../../Redux/profile-reducer"

type PropsType={
    sidebar:Array <sidebarType>
}

const Friends:FC <PropsType> = ({sidebar}) => {

    let friendsElements = sidebar.map(f =>
        <div className="friends__icons" key={f.id}>
            <div className="friends__ava">
                <img src={f.src}/>
            </div>
            <div className="friends__name">
                <h3>{f.name}</h3>
            </div>
        </div>)

    return <div className="friends__wrapper">
        <div className="friends__header">
            <div>
                <h2>Friends</h2>
            </div>
            <div className="friends__addNew">
                <NavLink to="/users">Add New</NavLink>
            </div>
        </div>
        <div className="friends__content">
            {friendsElements}
        </div>
    </div>
}

export default Friends;
