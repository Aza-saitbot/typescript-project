import React from "react";
import {
dialogsIconType,
    messagesType
} from "../../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import MessagesItems from "./messagesItems";
import {appStateType} from "../../../../Redux/redux-store";
import {actions} from "../../../../Redux/dialogs-reducer";

type MapStatePropsType = {
    messages: Array<messagesType>,
    dialogsIcons: Array<dialogsIconType>
    showListMessages:boolean
}
type MapDispatchPropsType = {
    addSendActionCreator:(newMessage:string)=>void
    setShowListMessages:(body:boolean)=>void
}


const mapStateToProps = (state: appStateType): MapStatePropsType => {
    return {
        messages: state.dialogsPage.messages,
        dialogsIcons: state.dialogsPage.dialogsIcons,
        showListMessages:state.dialogsPage.showListMessages
    }
}
export type PropsTypes=MapDispatchPropsType & MapStatePropsType

export default compose<React.ComponentType>( withAuthRedirect,
    connect <MapStatePropsType,MapDispatchPropsType ,{},appStateType> (mapStateToProps,
        {addSendActionCreator:actions.addSendActionCreator,
            setShowListMessages:actions.setShowListMessages
        }))(MessagesItems);
