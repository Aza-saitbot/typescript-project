import React, {useEffect} from 'react';
import Users from './Users';
import {followThunk, requestUsers, unfollowThunk} from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selector";
import {useDispatch, useSelector} from "react-redux";


/*//оборачиваем Целевой компонент Users контейнерной UsersPage, что бы целевой компонент был чистой функцией
//запросы на сервер будут происходит через контейнерной ф-ей*/

export const UsersPage: React.FC = (props) => {

    const totalItemsCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const currentPage = useSelector(getCurrentPage)
    const isFetching = useSelector(getIsFetching)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    /*//при запуске данного URL автоматический запрос юзеров*/
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [])

      /*  //если перешли на другую стр, то запрашиваю другую порцию юзеров из сервера */
    const onPageChanged = (currentPage: number) => {
        dispatch(requestUsers(currentPage, pageSize))
    }

    /*//блок подписать и отписаться от юзера, запускается санка
    // с параметром айди, на к-го нужно подписаться и отписаться*/
    const follow = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }


    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                users={users}
                follow={follow}
                unfollow={unfollow}
                followingInProgress={followingInProgress}
            />
        </>
    )
}


