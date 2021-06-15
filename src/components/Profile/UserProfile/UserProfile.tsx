import React, {ChangeEvent, FC, useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import s from "./../Profile.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHook";
import userPhoto from './../../../axios/images/user.png';
import ProfileDataFormRedux from "./ProfileDataReduxForm";
import {contactsType, profileType} from "../../../type/type";
import {lifeEventType, sidebarType, socialIconsType} from "../../../Redux/profile-reducer";
import Tabs from "../Tabs/Tabs";
import CreatePost from "../CreatePost/CreatePost";
import Events from "../Event/Event";
import Friends from "../Friends/Friends";
import {Button} from "antd";

//типизация страницы профиля
type PropsType={
    profile:profileType |null
    isOwner:boolean
    status:string
    updateStatus:(newStatus:string)=>void
    savePhoto:(photoFile:File)=>void
    saveProfile:(profile:profileType)=>void
    updateStatusProfile:string
    socialIcons:Array <socialIconsType>
    lifeEvent: Array<lifeEventType>
    sidebar:Array <sidebarType>
}


const  UserProfile:FC <PropsType> = ({
                         profile, isOwner, status, updateStatus,
                         savePhoto, saveProfile, updateStatusProfile, socialIcons,lifeEvent, sidebar
                     }) => {

    //данный локальный state исп. для вкл и откл режима редактирования профиля
    const [editMode, setEditMode] = useState<boolean>(false);

    //данный лок state исполь. для скрытия и развертывания режима редактирования профиля
    const [editProfile, setEditProfile] = useState<boolean>(false);

    //если профиль еще не загрузился, то показывай загрузку
    if (!profile) {
        return <Preloader/>
    }

    //это простые иконки/изображения- из state (стартовые данные)
    const ArrsocialIcons = socialIcons.map(s => {
        return <div key={s.id} >
            <a href='#'><img src={s.src}/></a>
        </div>
    });


    //Это ф-я обработичка события, к-я направить сформулированные данные профиля на сервер
    //после успешного ответа из сервера устанавливаем в стайте и будет отрисовка этих данных на стр.
    const onSubmit = (FormData:profileType) => {
        saveProfile(FormData);
        if (updateStatusProfile === "Success") {
            setEditMode(false)
        }
    }


    //это ф-я обработчик события-для загрузки аватарки на профиль,
    // запускается thunk c выбранным одним изображением и направляется на сервер,
    // если сервер ответил успешно, то уст. его
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        < div className={s.content}>
            <div className={s.headerProfile}>
                <div className={s.banner}>
                        <img src="https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg" alt=""/>
                </div>
                <div className={s.profileAndIcons}>
                    <div className={s.social_icons}>
                        {ArrsocialIcons}
                    </div>
                    <div className={s.profile}>

                        {/*//этот блок для изображения и загрузки аватарки/изображения профиля,
                        //достаем загруженный в стайте img, если его нет, используй изображения по умолч.*/}
                        <div className={s.wrapperInput}>
                            <img src={profile.photos.large || userPhoto} className={s.photo}/>
                            {isOwner && <label htmlFor="file" className={s.labelChangePhoto}>
                                Change photo
                                <span><input type="file" id="file" name="myfile" className={s.photoFile}
                                             onChange={onMainPhotoSelected}/></span>
                            </label>}
                        </div>
                        <div className={s.statusProfile}>
                            <div><p>{profile.fullName}</p></div>
                            <div className={s.status1}>< ProfileStatusWithHooks status={status}
                                                                                updateStatus={updateStatus}/>
                            </div>
                               {editProfile ?
                                   <Button type="primary" onClick={() => {
                                       setEditProfile(false)
                                   }} className={s.editProfile}>Hide detailed information</Button>
                                   : <Button type="primary"  className={s.editProfile} onClick={() => {
                                       setEditProfile(true)
                                   }} >Show detailed information</Button>}

                        </div>
                        {/*//блок Редактирования данных пользователя
                        в профил показать или скрыть блок данных (режима редактир.) пользователя профиля*/}
                    </div>
                    <div></div>
                </div>
                <div className={s.wrapperEditProfile}>
                    {/* блок для заполнения Профиля и редактирования его,
                    показывается и скрывается с помощью выше кнопок, если true то покажи блок*/}
                    {editProfile && <div>

                        {editMode
                            ? <ProfileDataFormRedux initialValues={profile}
                                                    profile={profile}
                                                    onSubmit={onSubmit}/>
                            : <ProfileData profile={profile}
                                           isOwner={isOwner}
                                           goToEditMode={() => {setEditMode(true)}}
                            />}
                    </div>}
                    {/*   если true вкл режем редактирования и покажи ProfileDataFormRedux
                         если иначе то покажи просто ProfileData- здесь же его оставил внизу файла*/}
                </div>
            </div>
            <Tabs />{/*//используется для перенаправления на страницу*/}
            <CreatePost profile={profile}/>{/*//используется для создания поста, сперва орисовывается из стартовых данных,
            если данных нет из сервера*/}
            <Events lifeEvent={lifeEvent}/> {/*//блок события и отметка пользователя из жизни*/}
            <Friends sidebar={sidebar}/>
        </div>
    )
}



type ProfileDataProps={profile:profileType, isOwner:boolean, goToEditMode:()=>void}

/*//Блок показа данных пользователя в режиме выкл. setMode(false)*/

const ProfileData:FC <ProfileDataProps> = ({profile, isOwner, goToEditMode}) => {
    return <div >
        <div className={s.buttonEditMode}>{isOwner && <div>
            <button className={s.editMode + " " + s.active} onClick={goToEditMode}>Edit</button>
        </div>}</div>
        <div className={s.profileData}>
            <div>
                <div>
                    <h3>Full name:</h3>
                    <div className={s.form_control}>{profile.fullName}</div>
                </div>
                <div>
                    <h3>My professional skills:</h3>
                    <div className={s.form_control}>{profile.lookingForAJobDescription}</div>
                </div>
                <div>
                    <h3>About me:</h3>
                    <div className={s.form_control}>{profile.aboutMe}</div>
                </div>
            </div>
            <div>
                <div>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]}/>
                    })}
                </div>
            </div>
        </div>
    </div>
}


type PropsContacts={contactTitle:string, contactValue:string|null}

const Contact:FC <PropsContacts> = ({contactTitle, contactValue}) => {
    return <div>
        <div><h3>{contactTitle}:</h3>
            <div className={s.form_control}>{contactValue}</div>
        </div>
    </div>
}

export default UserProfile;