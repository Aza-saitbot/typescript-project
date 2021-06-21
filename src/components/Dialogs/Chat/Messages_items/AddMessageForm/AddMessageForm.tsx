import React, {FC} from 'react';
import {InjectedFormProps, reduxForm, reset} from "redux-form";
import s from "../messagesItems.module.css"
import {createField, GetStringKeysType, Input} from "../../../../common/formsControls/formsControls";
import {maxLengthCreator, required} from "../../../../../utils/validations/validator";
import {SendOutlined} from "@ant-design/icons";


export type addNewFormValuesType = { newMessageBody: string }

const maxLength100 = maxLengthCreator(100);
type PropsType = {}
const AddNewMessageForm: FC<InjectedFormProps<addNewFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.footerForm}>
            <div className={s.footerInput}>
                {createField<addNewFormValuesKeysType>('Write something here...',
                    'newMessageBody', [required, maxLength100], Input)}
            </div>
            <div className={s.footerSendButton}>
                <button><SendOutlined style={{color:'white',fontSize:'25px'}} /></button>
            </div>
        </form>
    )
}

const afterSubmit = (result: any, dispatch: any) =>
    dispatch(reset('dialogAddMessageForm'));


type addNewFormValuesKeysType = GetStringKeysType<addNewFormValuesType>

const AddMessageReduxForm = reduxForm<addNewFormValuesType,PropsType>({
    form: 'dialogAddMessageForm', onSubmitSuccess: afterSubmit
})(AddNewMessageForm);
export default AddMessageReduxForm




