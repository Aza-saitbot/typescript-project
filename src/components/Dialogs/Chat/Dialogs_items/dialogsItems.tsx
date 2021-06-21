import React, {FC, useEffect, useState} from "react";
import "./dialogsItems.css"
import {FriendsListType} from "../../../../Redux/dialogs-reducer";
import {profileType} from "../../../../type/type";
import {CloseOutlined, SearchOutlined} from "@ant-design/icons"
import photo from "../../../../axios/images/user.png"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";


type PropsType = {
    PublicChannels: Array<FriendsListType>
    profile: profileType | null
    active:boolean
    setActiveListMessages:(body:boolean)=>void
}
const DialogsItems: FC<PropsType> = ({
                                         profile, PublicChannels,active,
                                         setActiveListMessages
                                     }) => {
    



    const setActiveShowListMessages = () => {
        setActiveListMessages(!active)
    }



    const ArrPublicChannels = PublicChannels.map(d =>
        <NavLink key={d.id} to={"/dialogs/" + d.id} className="dialogsItems__friends"
                 onClick={setActiveShowListMessages}>
            <div className="dialogsItems__friends__avatar">
                <img src={d.src} alt=''/>
            </div>
            <div className="dialogsItems__friends__profile">
                <h3>{d.name}</h3>
                <p>{d.worked}</p>
            </div>
            <div className="dialogsItems__friends_timeMessage">
                <p>{d.timeHouse}:{d.timeMin} min</p>
            </div>
        </NavLink>)


    return (
        <div className={active? 'dialogsItems__wrapper active' : 'dialogsItems__wrapper'} onClick={setActiveShowListMessages}>
            <div className='dialogsItems__blur'/>
            <div className="dialogsItems__content" onClick={e => e.stopPropagation()}>
                <div className="dialogsItems__authUser">
                    <div className="dialogsItems__authProfile">
                        <div className="dialogsItems__authProfile__avatar">
                            <img src={profile?.photos.large || photo}/>
                        </div>
                        <div className="dialogsItems__authProfile__profile">
                            <h3>{profile?.fullName}</h3>
                            <p>{profile?.lookingForAJobDescription}</p>
                        </div>
                        <div className="dialogsItems__authProfile__closedBlock">
                            <CloseOutlined style={{fontSize: '25px'}}
                                           onClick={setActiveShowListMessages}
                            />
                        </div>
                    </div>
                    <div className="dialogsItems__search">
                        <div className="dialogsItems__search__iconic">
                            <SearchOutlined style={{fontSize: '25px', color: '#08c'}}/>
                        </div>
                        <input type="text" className="dialogsItems__dialog_search1"
                               placeholder="Search..."/>
                    </div>
                </div>
                <div className="dialogsItems__public">
                    <div><h3>Public Channels</h3></div>
                    <div className="dialogsItems__listFriends">
                        {ArrPublicChannels}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogsItems;