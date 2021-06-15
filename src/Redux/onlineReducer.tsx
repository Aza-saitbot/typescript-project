import React from 'react';

const SET_ONLINE_PERSON = 'savetooths/appReducer/SET_ONLINE_PERSON';

export type onlinePersonType= {id: number, urlName: string, src:string, h6: string,alt:string}


let initialState = {
    onlinePerson: [
        {id: 1, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg', h6: 'Alina', alt:"1"},
        {id: 2, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg', h6: 'Radik', alt:"2"},
        {id: 3, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg', h6: 'Lesya', alt:"3"},
        {id: 4, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/04.jpg', h6: 'Alina', alt:"4"},
        {id: 5, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg', h6: 'Vadim', alt:"5"},
        {id: 6, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg', h6: 'Kamila', alt:"6"},
        {id: 7, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg', h6: 'Ruslan', alt:"7"},
        {id: 8, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg', h6: 'Karina', alt:"8"},
        {id: 9, urlName: '/profile', src: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg', h6: 'Dinar', alt:"9"},
    ] as Array <onlinePersonType>
}

export type initialStateType = typeof initialState
const onlineReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {

        case SET_ONLINE_PERSON:
            return {
                ...state,
                onlinePerson: [...state.onlinePerson, action.body]
            }
        default:
            return state;
    }
}

type setOnlinePersonType={type:typeof SET_ONLINE_PERSON,body:object}
export const setOnlinePerson = (body:object) => ({type: SET_ONLINE_PERSON, body});



export default onlineReducer;


