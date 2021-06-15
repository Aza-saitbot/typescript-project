import React from "react";
import dialogsItems from "./dialogsItems";
import {connect} from "react-redux";
import {appStateType} from "../../../../Redux/redux-store";
import {profileType} from "../../../../type/type";
import {actions, FriendsListType} from "../../../../Redux/dialogs-reducer";



type MapStatePropsType={
    PublicChannels: Array <FriendsListType>
    profile: profileType|null,
    active:boolean
}
let mapStateToProps = (state:appStateType) => {
    return {
        PublicChannels: state.dialogsPage.PublicChannels,
        profile: state.postPage.profile,
        active:state.dialogsPage.showListMessages
    }
}
type MapDispatchPropsType = {
    setShowListMessages:(body:boolean)=>void
}


export default connect <MapStatePropsType,MapDispatchPropsType,{},appStateType> (mapStateToProps,
    {setShowListMessages:actions.setShowListMessages})(dialogsItems);