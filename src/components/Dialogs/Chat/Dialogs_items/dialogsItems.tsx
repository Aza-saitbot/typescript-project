import React, {FC} from "react";
import "./dialogsItems.css"
import DialogItem from "./dialogItem/dialogItem";
import {FriendsListType} from "../../../../Redux/dialogs-reducer";
import {profileType} from "../../../../type/type";
import {CloseOutlined,SearchOutlined} from "@ant-design/icons"
import photo from "../../../../axios/images/user.png"

type PropsType = {
    PublicChannels: Array<FriendsListType>
    profile: profileType | null
    active: boolean
    setShowListMessages: (body: boolean) => void
}
const DialogsItems: FC<PropsType> = ({
                                         profile,  PublicChannels,
                                         active, setShowListMessages
                                     }) => {

    const setActiveShowListMessages = () => {
        setShowListMessages(false)
    }

    const ArrPublicChannels = PublicChannels.map(d => <DialogItem id={d.id}
                                                                key={d.id}
                                                                src={d.src}
                                                                name={d.name}
                                                                name2={d.name2}
                                                                time1={d.time1}
                                                                time2={d.time2}
                                                                active={d.active}
    />)
    return (
        <div className={active ? 'dialogsItems__wrapper active' : 'menu'} onClick={setActiveShowListMessages}>
            <div className='dialogsItems__blur'>
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
                                            <CloseOutlined style={{fontSize:'25px'}}/>
                                        </div>
                                    </div>
                            <div className="dialogsItems__search">
                                <div className="dialogsItems__search__iconic">
                                    <SearchOutlined style={{fontSize:'25px', color:'#08c'}} />
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
        </div>
    )
}

export default DialogsItems;