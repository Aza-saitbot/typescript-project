import React, {FC} from 'react';
import s from './users.module.css'
import userPhoto from './../../axios/images/user.png';
import {NavLink} from "react-router-dom";
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
            <div className={s.content}>
                <div className={s.content__avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ?
                            user.photos.small : userPhoto} className={s.usersPhoto}/>
                    </NavLink>
                </div>
                <div className={s.content__dataProfile}>
                    <div><h3>{user.name}</h3></div>
                    <div>{user.status}</div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
            </div>
            <div className={s.footer}>
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