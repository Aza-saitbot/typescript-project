import React, {FC} from 'react';
import s from '../CreatePost.module.css'
import smile from "../../../../axios/images/smiley.png"
import {PostsnameType} from "../../../../Redux/profile-reducer";
import {EllipsisOutlined, LikeOutlined, ShareAltOutlined} from "@ant-design/icons/lib";



const Post:FC  <PostsnameType> = ({src3,name2,name,name1,p3,span1,span2,span3,
                                 src1,src2,src4,src5,src6,src7,text1,
                                 text2,text3,text4,text5,time1,id}) => {

    return (
        <div className={s.post}>
            <div key={id} className={s.post1}>
                <div className={s.header}>
                    <div className={s.header1}>
                        <img src={src1} alt=""/>
                    </div>
                    <div className={s.header2}>
                        <div>
                            <a href="#"><h3>{name}</h3></a></div>
                        <div>{name1}</div>
                        <div>{name2}</div>
                    </div>
                    <div className={s.header3}>
                        <EllipsisOutlined style={{ fontSize: '24px' }}/>
                    </div>
                </div>
                <div className={s.content}>
                    <img src={src3} alt=""/>
                    <div>{p3}</div>
                </div>
                <div className={s.footer}>
                    <div className={s.like}>
                        <div >
                            <LikeOutlined style={{ fontSize: '24px', color: '#08c',margin:'10px' }}/>
                            <div>{span1}</div>
                        </div>
                        <div className={s.like_comment}>
                            <a href="#">{time1}</a>
                        </div>
                        <div className={s.like3}>
                            <ShareAltOutlined style={{ fontSize: '24px', color: '#08c' }}/>
                        </div>
                    </div>
                    <div className={s.post1_comment}>
                        <div className={s.comment}>
                            <div>
                                <img src={src6} alt=""/>
                            </div>
                            <div>
                                <div className={s.user1}>
                                    <h4>{text2}</h4>
                                    <p>{text3}</p>
                                    <div className={s.user1_a}>
                                        <a href="#">Like</a>
                                        <a href="#">Reply</a>
                                        <a href="#">Translate</a>
                                        <span>{span2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div>
                                <img src={src7} alt=""/>
                            </div>
                            <div>
                                <div className={s.user1}>
                                    <h4>{text4}</h4>
                                    <p>{text5}</p>
                                    <div className={s.user1_a}>
                                        <a href="#">Like</a>
                                        <a href="#">Reply</a>
                                        <a href="#">Translate</a>
                                        <span>{span3}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.add_comment + ' ' + s.active}>
                        <div className={s.add_comment1}>
                            <input type="text" className={s.add_comment1}/>
                        </div>
                        <div className={s.add_comment2}>
                            <a href="#"><img src="https://img.icons8.com/fluent-systems-regular/2x/attach.png"/></a>
                            <a href="#"><img
                                src={smile}/></a>
                            <a href="#"><img
                                src="https://cdn.icon-icons.com/icons2/37/PNG/128/slr_camera_application_slr_3037.png"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Post;