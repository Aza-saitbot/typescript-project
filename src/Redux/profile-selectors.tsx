import {appStateType} from "./redux-store";

export const getProfileState=(state:appStateType)=>{
    return state.postPage.profile
}
export const getStatusState=(state:appStateType)=>{
    return state.postPage.status
}
export const getAuth=(state:appStateType)=>{
    return state.auth.isAuth
}
export const getUserIdState=(state:appStateType)=>{
    return state.auth.userId
}
export const getUpdateStatusProfile=(state:appStateType)=>{
    return state.postPage.updateStatusProfile
}

export const getPostsname=(state:appStateType)=>{
    return state.postPage.Postsname
}
export const getSmallIcons=(state:appStateType)=>{
    return state.postPage.smallIcons
}
export const getSocialIcons=(state:appStateType)=>{
    return state.postPage.socialIcons
}
export const getLifeEvent=(state:appStateType)=>{
    return state.postPage.lifeEvent
}
export const getSitebar=(state:appStateType)=>{
    return state.postPage.sidebar
}
