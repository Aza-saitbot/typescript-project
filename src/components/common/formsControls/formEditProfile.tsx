import React, {FC} from "react";
import f from "./formsControls.module.css";
import s from "./../../Profile/Profile.module.css";
import {WrappedFieldProps} from "redux-form";


export const TextareaEditProfile:FC<WrappedFieldProps> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={f.formControl + ' ' + (hasError ? f.error : '')}>
            <div><textarea className={s.form_control} {...input} />{children}</div>
            {hasError && <span className={f.formSummerError}>{error}</span>}
        </div>
    )
}
export const InputEditProfile:FC<WrappedFieldProps> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={f.formControl + ' ' + (hasError ? f.error : '')}>
            <div><input {...input} className={s.form_control}/>{children}</div>
            {hasError && <span>{error}</span>}

        </div>
    )
}

