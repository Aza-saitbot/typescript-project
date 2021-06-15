import {appStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUserSelector=(state:appStateType)=>{
    return state.usersPage.users};

export const getUsers=createSelector(getUserSelector, (users) => {return users.filter(u=>true)})

export const getPageSize=(state:appStateType)=>{
    return state.usersPage.pageSize;
}
export const getTotalUsersCount=(state:appStateType)=>{
    return state.usersPage.totalItemsCount;
}
export const getCurrentPage=(state:appStateType)=>{
    return state.usersPage.currentPage;
}
export const getIsFetching=(state:appStateType)=>{
    return state.usersPage.isFetching;
}
export const getFollowingInProgress=(state:appStateType)=>{
    return state.usersPage.followingInProgress}
