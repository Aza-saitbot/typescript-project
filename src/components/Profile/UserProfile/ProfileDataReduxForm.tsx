import React, {FC} from "react";
import s from "./../Profile.module.css";
import {required} from "../../../utils/validations/validator";
import {InputEditProfile, TextareaEditProfile} from "../../common/formsControls/formEditProfile";
import {profileType} from "../../../type/type";
import {createField} from "../../common/formsControls/formsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "antd";


export type ProfileFormOwnPropsType = {
    profile: profileType
}

type ProfileFormValuesKeysType = Extract<keyof profileType, string>

/*//createField-создал как вспомогательный компонент,
для удобства что бы постоянно не писать Field поля*/

const ProfileDataForm: FC<InjectedFormProps<profileType,
    ProfileFormOwnPropsType> & ProfileFormOwnPropsType> = ({handleSubmit, profile, error}) => {

    const renderError = () => error ? <span>{error}</span> : false

    return <form onSubmit={handleSubmit} className={s.editReduxForm__wrapper}>
        <div className={s.buttonEditMode}>
            <button className={s.editMode + " " + s.active}>Save</button>
        </div>
        {error && <div className={s.Error}>
            {error}</div>}
        <div className={s.profileData}>
            <div>
                <div>
                    <h3>Full name:</h3>
                    {createField<ProfileFormValuesKeysType>("Full name", "fullName", [required], InputEditProfile)}
                </div>

                <div>
                    <h3>My professional skills:</h3>
                    {createField<ProfileFormValuesKeysType>("My professional skills", "lookingForAJobDescription",
                        [required], InputEditProfile)}
                </div>
                <div>
                    <h3>About me:</h3>
                    {createField<ProfileFormValuesKeysType>("About me", "aboutMe",
                        [required], InputEditProfile)}

                </div>
            </div>
            <div>
                <div>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <h3>{key}:</h3>
                            {createField(key, "contacts." + key,
                                [], InputEditProfile)}
                        </div>
                    })}
                </div>
            </div>
        </div>
    </form>
}

//1.вызывает e.preventDefault-не перезапускает на каждый изменения перезагрузку 2.собирает значения
//3. С собранными значения из форма запускаем props.onSubmit(собранные значения)к-е пришел из redux-form и отправляется собранные значения родительской компоненте
//что родительский компонент вызывавшийся ProfileDataFormRedux взял значения и dispatch в store где сидит state

const ProfileDataFormRedux = reduxForm<profileType,
    ProfileFormOwnPropsType>({form: 'edit-profile'})(ProfileDataForm);


export default ProfileDataFormRedux;