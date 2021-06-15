import React, {FC} from 'react'
import {InjectedFormProps, reduxForm} from "redux-form"
import {createField, GetStringKeysType, Input} from "../common/formsControls/formsControls"
import {required} from "../../utils/validations/validator"
import {useDispatch, useSelector} from "react-redux"
import {login} from "../../Redux/authReducer"
import {Redirect} from "react-router-dom"
import s from "./login.module.css"
import FriendsLogo from "./../../axios/images/Friends_list2.png"
import {appStateType} from "../../Redux/redux-store"

//Для авториз пол-я использую redux-fom


const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (
    {handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit} className={s.MainForm}>
            {createField<LoginFormValuesKeysType>("Email", "email", [required], Input)}
            {createField<LoginFormValuesKeysType>("Password", "password", [required], Input, {type: "password"})}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesKeysType>("Symbols from image", "captcha", [required], Input, {})}
            {error && <div className={s.formSummerError}>
                {error}
            </div>}
            <div>
                <button className={s.buttonForm}>Log In</button>
            </div>

        </form>
    )
} //createField-использую, для того что бы постоянно не исполь. Field
//исползую валидацию входных данных

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type LoginFormValuesType = {
    email: string | null
    password: symbol | null
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesKeysType = GetStringKeysType<LoginFormValuesType>
//нужны ключи к-е являются только строками, потому что ключами могут разные типы

//оборачиваем redux-form
export const Login: FC = (props) => {

    const isAuth = useSelector((state: appStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state: appStateType) => state.auth.captchaUrl)

    const dispatch = useDispatch();


//диспачим результат thunk login c сформулированными данными из form
    const onSubmit = (FormData: LoginFormValuesType) => {
        dispatch(login(FormData.email, FormData.password, FormData.rememberMe, FormData.captcha))
    }
    if (isAuth) {
        return <Redirect to='/profile'/>
    }//если мы уже залогилинились то переходим в profile

    return <div className={s.loginForm}>
        <div className={s.LogoBlock}>
            <div className={s.LogotipName}><img src="https://iqonic.design/themes/socialv/html/images/logo-full.png"/>
            </div>
            <div className={s.FriendsLogo}><img src={FriendsLogo}/></div>
            <div>
                <h1>Find new friends</h1>
                <p>SocialIV helps you connect and share with the people in your life.</p>
            </div>
        </div>
        <div className={s.loginBlock}>
            <div><h2>Log In</h2></div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    </div>
}//form авторизации

