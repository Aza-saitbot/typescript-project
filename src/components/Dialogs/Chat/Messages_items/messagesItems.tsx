import React, {FC, useEffect, useState} from "react";
import s from "./messagesItems.module.css"
import AddMessageReduxForm, {addNewFormValuesType} from "./AddMessageForm/AddMessageForm";
import {PropsTypes} from "./MessagesItemsContainer";
import {AlignRightOutlined, SmileOutlined, MessageOutlined} from "@ant-design/icons";
import {useParams} from "react-router-dom";
import cn from "classnames";
import {PaperClipOutlined} from "@ant-design/icons/lib";


const MessagesItems: FC<PropsTypes> = ({
                                           messages, dialogsIcons,
                                           addSendActionCreator, activeListMessages, setActiveListMessages,
                                           PublicChannels
                                       }) => {
//этот флажок, служит для показа Списка сообщений друзей в по клику скрывается и показывается, через стор true/false идет


    const SetActiveShowList = () => {
        setActiveListMessages(!activeListMessages)
    }


    const {userId}: any = useParams()

    const [user, setUser]: any = useState(null)

    const userSelect: any = PublicChannels.find(item => item.id == userId)

    useEffect(() => {
        if (typeof userSelect !== 'undefined') setUser(userSelect)
    }, [userSelect])


    let Chat = messages.map((m: any) => {
        return <div key={m.id} className={cn({
            [s.messageLeft]: m.name === 1
        }, s.messageRight)}>
            <div>
                <div className={cn({
                    [s.messageLeftColor]: m.name === 1
                }, s.messageRightColor)}
                >{m.message}</div>
                <div><h4>{m.time}</h4></div>
            </div>
        </div>
    })


    let addNewDialogs = (values: addNewFormValuesType) => {
        addSendActionCreator(values.newMessageBody);
    }

    const arrHeaderIcons = dialogsIcons.map(i => {
        return <div className={s.message_header_Icon} key={i.id}>
            <img src={i.src}/>
        </div>
    })

    if (user != null) {
        return (
            <div className={s.messages}>
                <div className={s.messageHeader}>
                    <div className={s.messageHeader__avatarName}>
                        <div className={s.message_burger}>
                            <AlignRightOutlined style={{fontSize: '20px', color: '#08c'}}
                                                onClick={SetActiveShowList}
                            />
                        </div>
                        <div className={s.messageHeader__avatar}>
                            <img src={user.src}/></div>
                        <div className={s.messageHeader__name}>
                            <h4>{user.name}</h4>
                            <div>{user.worked}</div>
                        </div>
                    </div>
                    <div className={s.message_header_icons}>
                        {arrHeaderIcons}
                    </div>
                </div>
                <div className={s.messageContent}>
                    {Chat}
                </div>
                <div className={s.messageFooter}>
                    <div className={s.footerIcons}>
                        <div><SmileOutlined style={{fontSize: '25px'}}/></div>
                        <div><PaperClipOutlined style={{fontSize: '25px'}}/></div>
                    </div>
                    <div><AddMessageReduxForm onSubmit={addNewDialogs}/></div>
                </div>
            </div>
        )
    }


    return (
        <div className={s.messagesEmpty}>
            <div className={s.messagesEmptyBlock}>
                 <MessageOutlined style={{fontSize: '5em', color: 'white'}}
                                                  onClick={SetActiveShowList}
                />
                <h3>Select user from list!</h3>
            </div>
        </div>
    )


}

export default MessagesItems;
