import React, {FC} from 'react';
import s from './users.module.css'
import userPhoto from './../../axios/images/user.png';
import {NavLink} from "react-router-dom";
import background from "./../../axios/images/happy_friends1.jpg"
import {usersType} from "../../type/type";
import {Button} from "antd";

type PropsType = {
    user: usersType
    followingInProgress: Array<number>
    unfollow: (page: number) => void
    follow: (page: number) => void
}
let User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.user}>
            <div><NavLink to={'/profile/' + user.id}>
                <img className={s.background} src={background}/>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.usersPhoto}/>
            </NavLink></div>
            <div className={s.nameProfile}>
                <div>
                    <div><h1>{user.name}</h1></div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
            </div>
            <div className={s.follow}>
                {user.followed
                    ? <Button type="primary"  disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</Button>
                    : <Button type="primary"   disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow </Button>
                }
            </div>
        </div>
    )
}

export default User;