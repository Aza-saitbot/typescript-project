import React from "react";
import {
    dialogsIconType, FriendsListType,
    messagesType
} from "../../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import MessagesItems from "./messagesItems";
import {appStateType} from "../../../../Redux/redux-store";
import {actions} from "../../../../Redux/dialogs-reducer";

type MapStatePropsType = {
    PublicChannels: Array<FriendsListType>
    messages: Array<messagesType>,
    dialogsIcons: Array<dialogsIconType>
    activeListMessages:boolean
}
type MapDispatchPropsType = {
    addSendActionCreator:(newMessage:string)=>void
    setActiveListMessages:(body:boolean)=>void
}


const mapStateToProps = (state: appStateType): MapStatePropsType => {
    return {
        PublicChannels: state.dialogsPage.PublicChannels,
        messages: state.dialogsPage.messages,
        dialogsIcons: state.dialogsPage.dialogsIcons,
        activeListMessages:state.dialogsPage.activeListMessages,

    }
}
export type PropsTypes=MapDispatchPropsType & MapStatePropsType

export default compose<React.ComponentType>( withAuthRedirect,
    connect <MapStatePropsType,MapDispatchPropsType ,{},appStateType> (mapStateToProps,
        {addSendActionCreator:actions.addSendActionCreator,
            setActiveListMessages:actions.setActiveListMessages
        }))(MessagesItems);
