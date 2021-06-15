import React, {FC} from 'react';
import { InjectedFormProps, reduxForm, reset} from "redux-form";
import s from '../CreatePost.module.css';
import {maxLengthCreator, required} from "../../../../utils/validations/validator";
import {createField, GetStringKeysType, Textarea} from "../../../common/formsControls/formsControls";


const maxLength50 = maxLengthCreator(50);

export type AddNewPostFormValuesType={ newPost:string }
type PropsType = {}

const AddNewPostForm: FC<InjectedFormProps<AddNewPostFormValuesType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={s.content_form}>
            <div className={s.content_text}>
                {createField<AddNewPostFormValuesKeysType>('Write something here...', 'newPost', [required, maxLength50], Textarea)}
            </div>
            <div className={s.content_post}>
                <button>Post</button>
            </div>
        </form>
    )
}
type AddNewPostFormValuesKeysType = GetStringKeysType< AddNewPostFormValuesType>//нужны ключи к-е являются только строками, потому что ключами могут разные типы

const afterSubmit = (result: any, dispatch: any) =>
    dispatch(reset('profile')); // после успешной отправки, обнуляем поля нашей формы

export const AddPostReduxForm = reduxForm<AddNewPostFormValuesType,PropsType>({
    form: 'profile',
    onSubmitSuccess: afterSubmit,
})(AddNewPostForm);

