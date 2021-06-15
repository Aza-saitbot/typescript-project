import React from 'react';

const SET_ITEMS = 'savetooths/appReducer/SET_ITEMS';
const SET_MENU_ACTIVE = 'savetooths/appReducer/SET_MENU_ACTIVE';

export type navbarItemsType = { id: number, urlName: string, src: string }
let initialState = {
    navbarItems: [
        {id: 1, urlName: '/profile', src: "https://img.icons8.com/material-outlined/72/user--v1.png"},
        {id: 2, urlName: '/dialogs', src: "https://img.icons8.com/ios/2x/weixing.png"},
        {id: 3, urlName: '/users', src: "https://img.icons8.com/ios/2x/myspace-circled.png"},
        {id: 4, urlName: '', src: "https://img.icons8.com/ios/2x/wallpaper.png"},
        {id: 5, urlName: '', src: "https://img.icons8.com/ios/2x/appointment-reminders.png"},
        {id: 6, urlName: '', src: "https://img.icons8.com/ios/2x/add-tab.png"},
        {id: 7, urlName: '', src: "https://img.icons8.com/ios/2x/appointment-reminders.png"},
        {id: 8, urlName: '', src: "https://img.icons8.com/ios/2x/wallpaper.png"},
        {id: 9, urlName: '', src: "https://img.icons8.com/ios/2x/appointment-reminders.png"},
        {id: 10, urlName: '', src: "https://img.icons8.com/ios/2x/wallpaper.png"},

    ] as Array<navbarItemsType>,
    menuActive:false as boolean
}

export type initialStateType = typeof initialState

const navbarReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                navbarItems: [...state.navbarItems, action.body]
            }
        case SET_MENU_ACTIVE:
            return {
                ...state,
                menuActive:  action.body
            }
        default:
            return state;
    }
}

type SetItemsType = { type: typeof SET_ITEMS, body: object }
export const setItems = (body: object) => ({type: SET_ITEMS, body});

type setMenuActiveType = { type: typeof SET_MENU_ACTIVE, body: boolean}
export const setMenuActiveAC = (body: boolean) => ({type: SET_MENU_ACTIVE, body});


export default navbarReducer;


