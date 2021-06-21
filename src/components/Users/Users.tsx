import React, {FC} from 'react';
import s from './users.module.css'
import User from "./User";
import {usersType} from "../../type/type";
import Paginator from "../common/Paginator/Paginator";


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number, pageSize: number) => void
    users: Array<usersType>
    unfollow: (pageNumber: number) => void
    follow: (pageNumber: number) => void
    followingInProgress: Array<number>
    portionSize?: number

}

let Users: FC<PropsType> = ({
                                totalItemsCount, pageSize, currentPage,
                                onPageChanged, users, unfollow, follow, followingInProgress
                            }) => {
    return <div className={s.usersStyle}>
        {/*//блок баннера изображения*/}
        <div className={s.friendsList}>
            <div className={s.friendsList_item}>Friends list</div>
        </div>

        {/*//компонент к-ый отрисовывает об кол-ве стр и текущего стр*/}
        <div className={s.forPaginator}><Paginator totalItemsCount={totalItemsCount} pageSize={pageSize}
                                                   currentPage={currentPage} onPageChanged={onPageChanged}/></div>

        {/*//блок стр юзеров*/}
        <div className={s.userStyle}>
            {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress}
                                  unfollow={unfollow} follow={follow}/>)}
        </div>
    </div>
}

export default Users;