import {ItemsType} from "../API/profile-api";

export type photosType = {
    small: string |null
    large: string |null
}

export type contactsType={
    facebook: string|null
    website:string|null
    vk: string|null
    twitter: string|null
    instagram: string|null
    youtube: string|null
    github: string|null
    mainLink: string|null
}

//данные авторизованного поль-я, к-е формируется для отправки на сервер

export type profileType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string|null
    fullName: string|null
    aboutMe: string
    contacts: contactsType
    photos: photosType
}


export type GetUsersType = {
    items: Array<ItemsType>
    totalCount: number
    error: null | string
}

export type usersType = {
    name: string |null
    id: number
    uniqueUrlName: null | string
    photos: {
        small: string|null
        large: string|null
    },
    status: null | string
    followed: boolean
}
