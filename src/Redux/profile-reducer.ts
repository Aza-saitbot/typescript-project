import Photographer from './../axios/images/Photographer.jpg';
import jobAtApple from './../axios/images/jobAtApple.jpg';
import Iam from '../axios/images/min_small.jpg';
import football from './../axios/images/football.jpg';
import travel from '../axios/images/Friends_list2.png';
import tailand from '../axios/images/Photographer.jpg';
import {photosType, profileType} from "../type/type";
import { BaseThunkType, InferActionTypes} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {profileAPI} from "../API/profile-api";
import {ResultCodeEnum} from "../API/API";

export type PostsnameType = {
    id: number
    src1: typeof Iam
    name: string
    name1: string
    name2: string
    src2: string
    p3: string
    src3:string | typeof travel | typeof tailand | typeof football |any
    src4: string,
    span1: string,
    time1: string
    src5: string
    text1: string
    src6: string
    text2: string
    text3: string
    span2: string
    src7: string
    text4: string
    text5: string
    span3: string
}
export type sidebarType = {
    id: number
    src: string
    name: string
}
export type smallIconsType = { id: number, src: string, p: string }
export type socialIconsType = { id: number, src: string }
export type lifeEventType = { id: number, src: typeof Photographer | typeof jobAtApple }

//стартовое значения в стайте
let initialState = {
    Postsname: [
        {
            id: 1,
            src1: Iam,
            name: 'Bni Cust',
            name1: 'Add New Post',
            name2: '3 hour ago',
            src2: 'https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5d1b95137782bf00adbe3694_5d1b9522f221ef00adfa605d/scale_1200',
            p3: '',
            src3: football,
            src4: 'https://iqonic.design/themes/socialv/html/images/icon/01.png',
            span1: '140 Likes',
            time1: '20',
            src5: 'https://e7.pngegg.com/pngimages/299/561/png-clipart-share-icon-computer-icons-share-button-black-and-white-share-button.png',
            text1: '99 Share',
            src6: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg',
            text2: 'Monty Carlo',
            text3: 'Loren ipsum dolor sit amet',
            span2: '5 min',
            src7: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg',
            text4: 'Paul Molive',
            text5: 'Loren ipsum dolor sit amet',
            span3: '5 min'
        },
        {
            id: 2,
            src1: Iam,
            name: 'Bni Cust',
            name1: 'Share Anna Mull\'s Post',
            name2: '5 hour ago',
            src2: 'https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5d1b95137782bf00adbe3694_5d1b9522f221ef00adfa605d/scale_1200',
            p3: '',
            src3: travel,
            src4: 'https://iqonic.design/themes/socialv/html/images/icon/01.png',
            span1: '140 Likes',
            time1: '20 Comment',
            src5: 'https://e7.pngegg.com/pngimages/299/561/png-clipart-share-icon-computer-icons-share-button-black-and-white-share-button.png',
            text1: '99 Share',
            src6: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg',
            text2: 'Monty Carlo',
            text3: 'Loren ipsum dolor sit amet',
            span2: '5 min',
            src7: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg',
            text4: 'Paul Molive',
            text5: 'Loren ipsum dolor sit amet',
            span3: '5 min',
        },
        {
            id: 3,
            src1: Iam,
            name: 'Bni Cust',
            name1: 'Update his Status',
            name2: '7 hour ago',
            src2: 'https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5d1b95137782bf00adbe3694_5d1b9522f221ef00adfa605d/scale_1200',
            p3: 'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing.[7][8] React Router[9] is an example of such a library. And also large and complicated applications are required to make AJAX calls to fetch or mutate data. You can use any library you like with React such as Axios, JQuery AJAX or the browser built-in window.fetch',
            src3: null,
            src4: 'https://iqonic.design/themes/socialv/html/images/icon/01.png',
            span1: '140 Likes',
            time1: '20 Comment',
            src5: 'https://e7.pngegg.com/pngimages/299/561/png-clipart-share-icon-computer-icons-share-button-black-and-white-share-button.png',
            text1: '99 Share',
            src6: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg',
            text2: 'Monty Carlo',
            text3: 'Loren ipsum dolor sit amet',
            span2: '5 min',
            src7: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg',
            text4: 'Paul Molive',
            text5: 'Loren ipsum dolor sit amet',
            span3: '5 min',
        },
    ] as Array<PostsnameType>,
    sidebar: [
        {
            id: 1,
            src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            name: 'Anna Rexia',
        },
        {
            id: 2,
            src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg',
            name: 'Tara Zona'
        },
        {
            id: 3, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg',
            name: 'Polly Tech'
        },
        {
            id: 4, src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg',
            name: 'Bill Emia'
        },
        {
            id: 5, src: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg',
            name: 'Moe Fugga'
        },
        {
            id: 6, src: 'https://iqonic.design/themes/socialv/html/images/user/10.jpg',
            name: 'Hal Appeno'
        },
        {
            id: 7, src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            name: 'Zack Lee'
        },
        {
            id: 8, src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg',
            name: 'Terry Aki'
        },
        {
            id: 9, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg',
            name: 'Greta Life'
        }
    ] as Array<sidebarType>,
    updateStatusProfile: "none",
    profile:null as profileType | null,
    status: '',
    smallIcons: [
        {id: 1, src: "https://iqonic.design/themes/socialv/html/images/small/07.png", p: "Photo/Video"},
        {id: 2, src: "https://iqonic.design/themes/socialv/html/images/small/08.png", p: "Tag Friend"},
        {id: 3, src: "https://iqonic.design/themes/socialv/html/images/small/09.png", p: "Feeling/Activity"}
    ] as Array<smallIconsType>,
    socialIcons: [
        {id: 1, src: 'https://iqonic.design/themes/socialv/html/images/icon/09.png'},
        {id: 2, src: 'https://iqonic.design/themes/socialv/html/images/icon/10.png'},
        {id: 3, src: 'https://iqonic.design/themes/socialv/html/images/icon/11.png'},
        {id: 4, src: 'https://iqonic.design/themes/socialv/html/images/icon/12.png'},
        {id: 5, src: 'https://iqonic.design/themes/socialv/html/images/icon/09.png'},
        {id: 6, src: 'https://iqonic.design/themes/socialv/html/images/icon/13.png'}
    ] as Array<socialIconsType>,
    lifeEvent: [
        {id: 1, src: jobAtApple},
        {id: 2, src: Photographer},
    ] as Array<lifeEventType>
};

const profileReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case "ST/profile/ADD_POST":
            return {
                ...state,
                Postsname: [...state.Postsname,{
                    id: 4,
                    src1: Iam,
                    name: 'Bni Cust',
                    name1: 'SaitBot',
                    name2: '10 hour ago',
                    src2: 'https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5d1b95137782bf00adbe3694_5d1b9522f221ef00adfa605d/scale_1200',
                    p3: action.newPost,
                    src3: null,
                    src4: 'https://iqonic.design/themes/socialv/html/images/icon/01.png',
                    span1: '0 Likes',
                    time1: '0 Comment',
                    src5: 'https://e7.pngegg.com/pngimages/299/561/png-clipart-share-icon-computer-icons-share-button-black-and-white-share-button.png',
                    text1: '0 Share',
                    src6: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg',
                    text2: 'Monty Carlo',
                    text3: 'Loren ipsum dolor sit amet',
                    span2: '0 min',
                    src7: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg',
                    text4: 'Paul Molive',
                    text5: 'Loren ipsum dolor sit amet',
                    span3: '0 min',
                }],
            };
        case "ST/profile/SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            };
        case "ST/profile/SET_STATUS":
            return {
                ...state,
                status: action.status,
            };
        case "ST/profile/SET_UPDATE_STATUS_PROFILE":
            return {
                ...state,
                updateStatusProfile: action.updateStatusProfile,
            };
        case "ST/profile/DELETE_POST":
            return {
                ...state,
                Postsname:{...state.Postsname.filter(p=>p.id != action.postId)}
            };
        case "ST/profile/SAVE_PHOTOS_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos:action.photos} as profileType
            };
        default:
            return state;
    }
}


export const actions = {

    addPostActionCreator: (newPost: string) => ({ newPost, type: "ST/profile/ADD_POST"} as const),
    setUserProfile: (profile: profileType) => ({type: "ST/profile/SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) => ({type: "ST/profile/SET_STATUS", status} as const),
    setUpdateStatusProfile: (updateStatusProfile: string) => ({
        type: "ST/profile/SET_UPDATE_STATUS_PROFILE",
        updateStatusProfile
    } as const),
    deletePost:(postId:number)=>({type:"ST/profile/DELETE_POST",postId}as const),
    savePhotoSuccess: (photos: photosType) => ({type: "ST/profile/SAVE_PHOTOS_SUCCESS", photos} as const)
}
//запрос статуса с сервера
export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
       try {
           let data = await profileAPI.getStatus(userId);
           dispatch(actions.setStatus(data));
       }catch (e) {
           console.log(e)
       }
    }
}

//запрос на обновления статуса
export const updateStatus = (status: string): ThunkType => {
    console.log(status)
    return async (dispatch) => {
        try {
            let data = await profileAPI.updateStatus(status);
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(actions.setStatus(status));/*проверка если все успешно, то установить в state*/
            }
        } catch (err) {
            console.log(err)
        }
    }
}
//0 означает по API документации, что сервер говорит вы успешно обновили статус на сервере,
// "вешаем на ассихронный запрос" обработчик ошибки try/catch,если что то пойдет, то выведет ошибку


//Запрос на авторизации юзера с таким айди/Дай мне данные профиля с таким айди
export const getUsersProfileCreator = (userId: number ): ThunkType => {
    return async (dispatch) => {
        try{
            let data = await profileAPI.getProfile(userId);
            dispatch(actions.setUserProfile(data));
        }catch (err) {
            console.log(err)
        }
    }
}

//отправка изображения на сервер и если все успешно, то возьми изображения и сохрани его в стайте, дальше он уже отрисуется в нужном компоненте
export const savePhoto = (filePhoto: File):ThunkType=> {

    return async (dispatch) => {
        try {
            let data = await profileAPI.savePhoto(filePhoto);
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(actions.savePhotoSuccess(data.data.photos));
        }
        }catch (e) {
            console.log(e)
        }
    }
}

//Данная санка направляет на сервер новые данные профиля, сервер отвечает 0 (успешно) или 1 (не успешно)
//Если успешно обновилась на сервере, выполняем новый запрос за обновленными данными профиля юзера и статуса его
//Если не успешно, то показываем ошибку
export const saveProfile = (profile: profileType): ThunkType => async (dispatch, getState) => {
    /*Пришли данные из компонента(формы) в санку*/
        /*Забрали из стора айди юзера, к-й авторизовался*/
        const userId = getState().auth.userId
    /*дождались пока обновиться на сервере данные профиля, и сохраняем в переменную рез-т ответа сервера*/
        const data = await profileAPI.saveProfile(profile);

    /*Если сервер ответил 0 то успешно, если 1 то выдаст ошибку*/
        if (data.resultCode === ResultCodeEnum.Success) {
          /*Делаем проверку на не авторизованного юзера, если есть айди то запрашиваем заново данные профиля и статуса его*/
            if (userId !=null){
                dispatch(getUsersProfileCreator(userId))
            } else {
                throw new Error("userId can not be null")
            }
            dispatch(actions.setUpdateStatusProfile("Success"));
        } else {
            dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
            dispatch(actions.setUpdateStatusProfile("Error"))
        }
    
}/*//UserId не может быть null, все пол-и в базе авторизованы*/

export default profileReducer;

type initialStateType=typeof initialState
type ActionType = InferActionTypes<typeof actions>
export type ThunkType = BaseThunkType <ActionType|FormAction>
