import profileReducer, {
    actions,
    PostsnameType
} from "./profile-reducer";
import Iam from "../axios/images/min_small.jpg";
import football from "../axios/images/football.jpg";
import travel from "../axios/images/Friends_list2.png";
import jobAtApple from "../axios/images/jobAtApple.jpg";
import Photographer from "../axios/images/Photographer.jpg";


let state = {
    Postsname: [
        {
            id: 1,
            src1: Iam,
            name: 'Bni Cust',
            name1: 'Add New Post',
            name2: '3 hour ago',
            src2: 'https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5d1b95137782bf00adbe3694_5d1b9522f221ef00adfa605d/scale_1200',
            p3: '',
            src3: football,
            src4: 'https://iqonic.design/themes/socialv/html/images/icon/01.png',
            span1: '140 Likes',
            time1: '20',
            src5: 'https://e7.pngegg.com/pngimages/299/561/png-clipart-share-icon-computer-icons-share-button-black-and-white-share-button.png',
            text1: '99 Share',
            src6: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg',
            text2: 'Monty Carlo',
            text3: 'Loren ipsum dolor sit amet',
            span2: '5 min',
            src7: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg',
            text4: 'Paul Molive',
            text5: 'Loren ipsum dolor sit amet',
            span3: '5 min'
        },
        {
            id: 2,
            src1: Iam,
            name: 'Bni Cust',
            name1: 'Share Anna Mull\'s Post',
            name2: '5 hour ago',
            src2: 'https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5d1b95137782bf00adbe3694_5d1b9522f221ef00adfa605d/scale_1200',
            p3: '',
            src3: travel,
            src4: 'https://iqonic.design/themes/socialv/html/images/icon/01.png',
            span1: '140 Likes',
            time1: '20 Comment',
            src5: 'https://e7.pngegg.com/pngimages/299/561/png-clipart-share-icon-computer-icons-share-button-black-and-white-share-button.png',
            text1: '99 Share',
            src6: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg',
            text2: 'Monty Carlo',
            text3: 'Loren ipsum dolor sit amet',
            span2: '5 min',
            src7: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg',
            text4: 'Paul Molive',
            text5: 'Loren ipsum dolor sit amet',
            span3: '5 min',
        },
        {
            id: 3,
            src1: './../axios/images/i-min.JPG',
            name: 'Bni Cust',
            name1: 'Update his Status',
            name2: '7 hour ago',
            src2: 'https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5d1b95137782bf00adbe3694_5d1b9522f221ef00adfa605d/scale_1200',
            p3: 'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing.[7][8] React Router[9] is an example of such a library. And also large and complicated applications are required to make AJAX calls to fetch or mutate data. You can use any library you like with React such as Axios, JQuery AJAX or the browser built-in window.fetch',
            src3: null,
            src4: 'https://iqonic.design/themes/socialv/html/images/icon/01.png',
            span1: '140 Likes',
            time1: '20 Comment',
            src5: 'https://e7.pngegg.com/pngimages/299/561/png-clipart-share-icon-computer-icons-share-button-black-and-white-share-button.png',
            text1: '99 Share',
            src6: 'https://iqonic.design/themes/socialv/html/images/user/02.jpg',
            text2: 'Monty Carlo',
            text3: 'Loren ipsum dolor sit amet',
            span2: '5 min',
            src7: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg',
            text4: 'Paul Molive',
            text5: 'Loren ipsum dolor sit amet',
            span3: '5 min',
        },
    ] as Array<PostsnameType>,
    sidebar: [
        {
            id: 1,
            src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            name: 'Anna Rexia',
        },
        {
            id: 2,
            src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg',
            name: 'Tara Zona'
        },
        {
            id: 3, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg',
            name: 'Polly Tech'
        },
        {
            id: 4, src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg',
            name: 'Bill Emia'
        },
        {
            id: 5, src: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg',
            name: 'Moe Fugga'
        },
        {
            id: 6, src: 'https://iqonic.design/themes/socialv/html/images/user/10.jpg',
            name: 'Hal Appeno'
        },
        {
            id: 7, src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            name: 'Zack Lee'
        },
        {
            id: 8, src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg',
            name: 'Terry Aki'
        },
        {
            id: 9, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg',
            name: 'Greta Life'
        }
    ],
    updateStatusProfile: "none",
    profile:null ,
    status: '',
    smallIcons: [
        {id: 1, src: "https://iqonic.design/themes/socialv/html/images/small/07.png", p: "Photo/Video"},
        {id: 2, src: "https://iqonic.design/themes/socialv/html/images/small/08.png", p: "Tag Friend"},
        {id: 3, src: "https://iqonic.design/themes/socialv/html/images/small/09.png", p: "Feeling/Activity"}
    ] ,
    socialIcons: [
        {id: 1, src: 'https://iqonic.design/themes/socialv/html/images/icon/09.png'},
        {id: 2, src: 'https://iqonic.design/themes/socialv/html/images/icon/10.png'},
        {id: 3, src: 'https://iqonic.design/themes/socialv/html/images/icon/11.png'},
        {id: 5, src: 'https://iqonic.design/themes/socialv/html/images/icon/12.png'},
        {id: 6, src: 'https://iqonic.design/themes/socialv/html/images/icon/13.png'}
    ] ,
    lifeEvent: [
        {id: 1, src: jobAtApple, text: "Started New Job at Apple", time: "31 March 2021"},
        {id: 2, src: Photographer, text: "Frontend developer", time: "31 March 2021"}
    ]
};

it('length of post should be incremented', () => {
    //1.test data
    let action = actions.addPostActionCreator('AkunaMatata')
    //2.action
    let newState = profileReducer(state, action)
//3.expectation
    expect(newState.Postsname.length).toBe(4);
});

it(' after deleting length od message should be decrement', () => {
    //1.test data
    let action = actions.deletePost(1);//удаляем пост с id: 1 или дай новый массив без id:1
    //2.action
    let newState = profileReducer(state, action);
//3.expectation

    expect(newState.Postsname.length).toBe(2);//проверяем длину нового поста Postname было 3, ожидаем 2
});

it(' after deleting length od message should be incorrect', () => {
    //1.test data
    let action = actions.deletePost(1000);//удаляем пост с айдишником 1000
    //2.action
    let newState = profileReducer(state, action);
//3.expectation

    expect(newState.Postsname.length).toBe(3);//проверяем длину , так как нету в массе с таким айди длина массима должна остаться таким же
});
