import React from 'react';
import calendar from "./../axios/images/header_kalendar.jpg";
import music from "./../axios/images/header_music.jpg";
import menu from "./../axios/images/header_menu.jpg";

const SET_ICONS_HEADER = 'savetooths/headerReducer/ SET_ICONS_HEADER';


export type ArrIconsHeaderType={id:number,src:typeof music|typeof calendar|typeof menu}


let initialState = {
    ArrIconsHeader: [
        {id: 1, src: music},
        {id: 2, src: calendar},
        {id: 3, src: menu},

    ] as Array <ArrIconsHeaderType>
}

export type initialStateType=typeof initialState


const headerReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {

        case  SET_ICONS_HEADER:
            return {
                ...state,
                ArrIconsHeader: [...state.ArrIconsHeader, action.body]
            }
        default:
            return state;
    }
}

type setHeaderReducerType={type:typeof SET_ICONS_HEADER,body:object}
export const setHeaderReducer = (body:object):setHeaderReducerType => ({type: SET_ICONS_HEADER, body});


export default headerReducer;


