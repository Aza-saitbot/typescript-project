import React, {FC} from "react";
import s from "./formsControls.module.css";
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validations/validator";
import {WrappedFieldMetaProps} from "redux-form/lib/Field";



type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode
}

const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>{children}</div>
            {hasError && <span className={s.notification}>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export type GetStringKeysType<T> = Extract<keyof T, string>

export function createField<KeysType extends string>(placeholder: string | undefined,
                                                     name: KeysType,
                                                     validators: Array<FieldValidatorType>,
                                                     component: FC<WrappedFieldProps> ,
                                                     props = {},
                                                     text = "",
                                                     type?: string,
                                                     value?: string) {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
               type={type}
               value={value}
               className={s.fieldForm}

        />
        {text}
    </div>
}

