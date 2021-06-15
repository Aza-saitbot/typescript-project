import {instance, ResponseDataType, ResultCodeEnum, ResultCodeForCaptchaEnum} from "./API";

type MeResponseDataType = {
     id: number, email: string, login: string
}
 type LoginResponseDataType = {
   userId: number
}

export const authAPI = {
    me() {
        return instance.get<ResponseDataType<MeResponseDataType >>(`auth/me`).then(res => res.data)//запрос-мы залогинились?
    },
    //отправляем данные на сервер
    login(email: string | null, password: symbol | null, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseDataType<LoginResponseDataType,ResultCodeEnum|ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}