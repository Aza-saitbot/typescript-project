import {FormAction, stopSubmit} from "redux-form";
import { BaseThunkType, InferActionTypes} from "./redux-store";
import {authAPI} from "../API/auth-api";
import {securityAPI} from "../API/security-api";
import {ResultCodeEnum, ResultCodeForCaptchaEnum} from "../API/API";

//стартовое значение
let initialState = {
    userId: null as number |null,
    email: null as string|null,
    login: null as string|null,
    isAuth: false as boolean,/*из запроса me, если залогинились то true, если нет то false*/
    captchaUrl: null as string|null,
};

const authReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'SET_CAPTCHA_URL':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null,
                      login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA',
        payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SET_CAPTCHA_URL',
        payload: {captchaUrl}
    } as const)
}

/*запрос на авторизациб  пользователя, первый вход
если 0 то  да, и берем айди, почту и логин,
    использую деструктуризацю забираем нужные данные
и устанавливем данные в state, работа reducer*/
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me();/*ждем запрос*/

    if (meData.resultCode === 0) {
        let {id, email, login} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

/*//регистрация пользователя происходит на сайте,
// в данном проекте осущствляем авторизацию поль-я, логин и пароль -валидация их
//а также проверяем на бота, используя captcha*/

//запрос на авторизацию пол-я,
export const login = (email: string | null, password: symbol | null, rememberMe: boolean, captcha: string): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}))
        }/* ответ ошибки из сервака, если ничего лежит то показываем Some error*/
    }
}

//зыпрос на выход из системы, методом delete и устанавливаем значение в стайте null и false
export const logout = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(actions.setAuthUserData(null, null, null, false));
        }

    }
}

//запрос на сервер для получения URL captcha для проверки на бота
export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.data.url;
        dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
    }
}

export default authReducer;

//автоматическое типизации state и actionCreator
//и типизации thunk
type initialStateType=typeof initialState
type ActionType = InferActionTypes<typeof actions>
export type ThunkType = BaseThunkType <ActionType|FormAction>