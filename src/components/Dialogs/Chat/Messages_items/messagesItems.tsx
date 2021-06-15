import React, {FC} from "react";
import s from "./messagesItems.module.css"
import AddMessageReduxForm, {addNewFormValuesType} from "./AddMessageForm/AddMessageForm";
import smile from "../../../../axios/images/smiley.png";
import {PropsTypes} from "./MessagesItemsContainer";
import {AlignRightOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

const MessagesItems: FC<PropsTypes> = ({
                                          messages, dialogsIcons,
                                          addSendActionCreator,showListMessages,setShowListMessages
                                      }) => {
//этот флажок, служит для показа Списка сообщений друзей в по клику скрывается и показывается, через стор true/false идет
    const SetActiveShowList=()=>{
        setShowListMessages(!showListMessages)
    }
let userId:null|number =useParams()


    let dialog = messages.map(m =>
        <div key={m.id} className={m.id === userId ? s.messageRight : s.messageLeft}>
            {m.message}
            <div>{m.time}</div>
        </div>)

    let addNewDialogs = (values:addNewFormValuesType) => {
        addSendActionCreator(values.newMessageBody);
    }

    const arrHeaderIcons = dialogsIcons.map(i => {
        return <div className={s.header2_icons} key={i.id}>
            <img className={s.icons1}
                 src={i.src}/>
        </div>
    })

    return (
        <div className={s.messages}>
            <div className={s.messageHeader}>
                <div className={s.message_burger}>
                    <AlignRightOutlined  style={{fontSize:'30px',color:'#08c'}}
                    onClick={SetActiveShowList}
                    />
                </div>
                <div className={s.message_header1}>
                    <div className={s.header12}><img
                        src="https://iqonic.design/themes/socialv/html/images/user/05.jpg"/></div>
                    <div className={s.header12}><h3>Radik</h3> Team leader</div>
                </div>
                <div className={s.message_header2}>
                    {arrHeaderIcons}
                </div>
            </div>
            <div className={s.messageContent}>
                {dialog}
            </div>
            <div className={s.messageFooter}>
                <div className={s.footerIcons}>
                    <div><img src={smile}/></div>
                    <div><img src='https://img.icons8.com/ios/2x/attach.png'/></div>
                </div>
                <div><AddMessageReduxForm onSubmit={addNewDialogs}/></div>
            </div>
        </div>
    )
}

export default MessagesItems;
