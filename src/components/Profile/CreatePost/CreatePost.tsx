import React, {FC} from 'react';
import s from './CreatePost.module.css';
import Post from './Postt/Post'
import {AddNewPostFormValuesType, AddPostReduxForm} from "./AddPostForm/AddNewPost";
import userPhoto from "../../../axios/images/user.png"
import {actions, PostsnameType, smallIconsType} from "../../../Redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../Redux/redux-store";
import {profileType} from "../../../type/type";

type PropsType = {
    profile:profileType
}


const CreatePost: FC<PropsType> = ({profile}) => {

    const smallIcons = useSelector((state: appStateType) => state.postPage.smallIcons.map(s => {
        return <div key={s.id}>
            <img src={s.src}/>
            <p>{s.p}</p>
        </div>
    }))


    const dispatch = useDispatch()

    let newPost = (values: AddNewPostFormValuesType) => {
        dispatch(actions.addPostActionCreator(values.newPost))
    };


    let postsElements = useSelector((state: appStateType) => state.postPage.Postsname.map
    (p => <Post key={p.id}
                id={p.id} src1={p.src1}
                name={p.name} name1={p.name1}
                name2={p.name2}
                src2={p.src2}
                p3={p.p3}
                src3={p.src3}
                src4={p.src4}
                span1={p.span1}
                time1={p.time1}
                src5={p.src5}
                text1={p.text1}
                src6={p.src6}
                text2={p.text2}
                text3={p.text3}
                span2={p.span2}
                src7={p.src7}
                text4={p.text2}
                text5={p.text3}
                span3={p.span2}
    />))


    return <div className={s.posts}>
        <div className={s.createPost}>
            <div className={s.contentForm}>
                <div className={s.contentForm__avatar}>
                    <img src={profile.photos.large || userPhoto}/>
                </div>
                <AddPostReduxForm onSubmit={newPost}/>
            </div>
            <div className={s.footerCreatePost}>
                {smallIcons}
            </div>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
}


export default CreatePost;