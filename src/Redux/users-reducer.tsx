import {appStateType, InferActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {usersType} from "../type/type";
import {UsersAPI} from "../API/users-api";
import {ResultCodeEnum} from "../API/API";
import {updateObjectArray} from "../utils/object_helper/object_helper";
import {Alert} from "antd";
import React from "react";

/*//стартовые данные юзеров*/
let initialState = {
    users: [
        {
            name: 'restdz',
            id: 1,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: true
        },
        {
            name: 'Vova342',
            id: 2,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: 'test12344',
            id: 3,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: 'raxani6032',
            id: 4,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: 'Monika',
            id: 5,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: 'test12344',
            id: 6,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        }
    ] as Array<usersType>,
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
}

/*//авоматическое типизации для данных*/
export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionType): initialStateType => {
    
    switch (action.type) {
        /*//блок подписался на юзера*/
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: true})
            }
                /*//блок отписался от юзера*/
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: false})
            }
           /* //установить юзеров*/
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
       /* //блок где сохраняется текущее значение страницы*/
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.page}
        }
        /*//запись об количестве юзеров в базе данных полученных от сервера, служат также для вычесления
            //сколько нужно показывать юзеров на странице*/
        case 'SET_TOTAL_USERS_COUNTS': {
            return {...state, totalItemsCount: action.totalItemsCount}
        }
        /*//информация булевое значения для отображения компоненты загрузки-вкл или выкл компонента*/
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        /*//Данный блок для disable кнопки подписаться и отписаться на юзера*/
        case 'TOGGLE_FOLLOWING_PROGRESS': {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

type ActionType = InferActionTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<usersType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const),
    setTotalUsersCount: (totalItemsCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNTS', totalItemsCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}

type DispatchType = Dispatch<ActionType>
type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionType>


/*//Thunk-запрос юзеров из сервера*/
export const requestUsers = (page: number,
                             pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));//показываем компонент загрузку страницы
        dispatch(actions.setCurrentPage(page));// устанавливаем текущую значения пользователя
        let data = await UsersAPI.getUsers(page, pageSize);// отправляем запрос на сервер за юзерами,
        // с параметрами стр, и порции юзеров сколько нужны нам для отображения
        dispatch(actions.setTotalUsersCount(data.totalCount));//забираем и устанл в стайте кол-во пол-ей в базе
        dispatch(actions.toggleIsFetching(false));// выключаем крутилку/загрузку страницы
        dispatch(actions.setUsers(data.items));// полученную из сервера юзеров уст в стайте для дальнейшего render()
    }
}

/*//компонент отрисовки ошибки*/
const Error=(e:any)=>{
    return <>
        <Alert message={e} type="error"/>
    </>
}

/*//для не дублирования кода вывел в отдельный компонент
//Блок кнопки отписаться и подписаться на юзера, идентифицируем юзера через айди*/

const followUnfollow = async (dispatch: DispatchType, userId: number,
                              apiMethod: any, actionCreator: (userId: number) => ActionType) => {
        dispatch(actions.toggleFollowingInProgress(true, userId));/*//Включаем disable button*/
        try{let data = await apiMethod(userId);
            if (data.resultCode == ResultCodeEnum.Success) {
                dispatch(actionCreator(userId));}
            /*Если успешно подписался или отписался, то
             диспачим результат вызова ActionCreator*/
        }catch (e){
            Error(e)
        }

        dispatch(actions.toggleFollowingInProgress(false, userId));/*выключаем блокировки кнопки*/
    
}
//Это ActionCreator на подписаться
export const followThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), actions.followSuccess)
    }
}

//ActionCreator на отписаться
export const unfollowThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), actions.unfollowSuccess)
    }
}

export default usersReducer;