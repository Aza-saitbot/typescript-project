import React from 'react';
import {connect} from "react-redux";
import {
    actions,
    getStatus,
    getUsersProfileCreator, lifeEventType, PostsnameType,
    savePhoto,
    saveProfile, sidebarType, smallIconsType, socialIconsType,
    updateStatus
} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {
    getAuth,
    getLifeEvent,
    getPostsname, getProfileState, getSitebar,
    getSmallIcons,
    getSocialIcons, getStatusState,
    getUpdateStatusProfile, getUserIdState
} from "../../Redux/profile-selectors";
import {appStateType} from "../../Redux/redux-store";
import {profileType} from "../../type/type";
import UserProfile from "./UserProfile/UserProfile";


export type ProfilePropsTypes = MapStatePropsType &
    MapDispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component <ProfilePropsTypes> {

    /*Данная ф-я, выполняет поиск авторизованного пол-ля по URL
    * если его нет то посмотри в стайте, сохранен ли там, если и там его нет то перенаправляем на стр. авторизации
    * */
    refreshProfile() {

        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;

            if (!userId) {
                this.props.history.push('/login');
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUsersProfileCreator(userId);//если все хорошо,то запрашиваем профиль с таким айди
            this.props.getStatus(userId);//и статус его на данный момент
        }

    }
/*Если пользователь не выходил с учетного запися, то делаем новый запрос на данные профиля и статуса, ему не нужно заново вводить логин и пароль*/
    componentDidMount() {

        this.refreshProfile()
    }

//узнаем изменились ли данные профиля по данному айди, методом сравнения предущих данных с текущем
    //если данные обновились, то запрос отправляется заново
    componentDidUpdate(prevProps: ProfilePropsTypes, prevState: ProfilePropsTypes) {

        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (<UserProfile profile={this.props.profile}
                             status={this.props.status} updateStatus={this.props.updateStatus}
                             isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                             saveProfile={this.props.saveProfile} updateStatusProfile={this.props.updateStatusProfile}
                             socialIcons={this.props.socialIcons} lifeEvent={this.props.lifeEvent}
                             sidebar={this.props.sidebar}
            />
        )
    }
}

let mapStateToProps = (state: appStateType) => {
    return ({
        profile: getProfileState(state),
        status: getStatusState(state),
        isAuth: getAuth(state),
        authorizedUserId: getUserIdState(state),
        updateStatusProfile: getUpdateStatusProfile(state),
        postsName: getPostsname(state),
        smallIcons: getSmallIcons(state),
        socialIcons: getSocialIcons(state),
        lifeEvent: getLifeEvent(state),
        sidebar: getSitebar(state)

    })
};


//конвейр обработчиков над ProfileContainer,выполняется снизу вверх, сначало connect затем результат к withRouter, дальше по аналогии
//withAuthRedirect,//дублирующая логика-авторизован или нет, создали hoc для переиспользования кода, кому это нужно
export default compose<React.ComponentType>(
    withRouter,//оборачиваем для знания маршрута, по какой айди сейчас находимся
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect(mapStateToProps, {
        addPostActionCreator: actions.addPostActionCreator, getUsersProfileCreator, updateStatus, savePhoto,
        saveProfile, getStatus
    }))(ProfileContainer)

type PathParamsType = { userId: string }
type MapStatePropsType = {
    profile: profileType
    status: string
    isAuth: boolean
    authorizedUserId: number
    updateStatusProfile: string
    postsName: Array<PostsnameType>
    smallIcons: Array<smallIconsType>
    socialIcons: Array<socialIconsType>
    lifeEvent: Array<lifeEventType>
    sidebar: Array<sidebarType>
}
type MapDispatchPropsType = {
    addPostActionCreator: (newPost: string) => void
    getUsersProfileCreator: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (filePhoto: File) => void
    saveProfile: (profile: profileType) => Promise<any>
    getStatus: (userId: number) => void
}
