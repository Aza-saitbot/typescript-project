
import min from "../axios/images/min_small.jpg";
import dialogsReducer, {
 messagesType,actions
} from "./dialogs-reducer";


let state={
    PublicChannels: [
        {
            id: 1,
            src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            name: 'Radik',
            name2: 'Lorem Ipsum is',
            time1: '20',
            time2: '05 min',
            active: '.active'
        },
        {
            id: 2,
            src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg',
            name: 'Announcement',
            name2: 'This Sunday we',
            time1: '20',
            time2: '05 min',
            active: '.active'
        },
    ],
    PrivateChannels: [
        {
            id: 1, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg', name: 'Designer',
            name2: 'This Sunday we',
        },
        {
            id: 2, src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg', name: 'Developer',
            name2: 'passages of Lorem',
        },
        {
            id: 3, src: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg', name: 'Testing Team',
            name2: 'Lorem Ipsum used',
        },
    ],
    DirectMessage: [
        {
            id: 1, src: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg', name: 'Paul Molive',
            name2: 'translation by',
        },
        {
            id: 2, src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg', name: 'Paige Turner',
            name2: 'Lorem Ipsum which',
        },
        {
            id: 3, src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg', name: 'Barb Acku',
            name2: 'simply random text',
        },
        {
            id: 4, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg', name: 'Maya Didass',
            name2: 'but also the leap',
        },
        {
            id: 5, src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg', name: 'Monty Carlo',
            name2: 'Contry to popular',
        },
    ],
    messages: [
        {
            id: 1,
            message: 'How can we help? We are here for you!',
            src: min,
            time: '6:48'
        },
        {
            id: 2,
            message: 'Hey John, I am looking for the best admin template.Could you please help me to find it out?',
            src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            time: '6:48'
        },
        {
            id: 3, message: 'Abolutely! SociaIV Dashboard is the responsive bootstrap 4 admin template.',
            src: min,
            time: '6:48'
        },
        {
            id: 4,
            message: 'Looks clean and fresh UI.',
            src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            time: '6:48'
        },
        {
            id: 5,
            message: 'Thanks, from ThemeForest.',
            src: min,
            time: '6:48'
        },
        {
            id: 6,
            message: 'I will purchase it for sure.',
            src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            time: '6:48'
        },
        {
            id: 7,
            message: 'Okay Thanks',
            src: min,
            time: '6:48'
        },
    ] as Array<messagesType>,
    dialogsIcons: [{id: 1, src: "https://cdn.icon-icons.com/icons2/272/PNG/128/Phone_30029.png"},
        {id: 2, src: "https://img.icons8.com/ultraviolet/2x/camera.png"},
        {
            id: 3,
            src: "https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-dustbin-bin-icon-isolated-on-abstract-background-png-image_1763535.jpg"
        },
        {id: 4, src: "https://img.icons8.com/fluent/2x/menu-2.png"}]
}

it('length of message should be incremented', () => {
    //1.test data
    let action = actions.addSendActionCreator('jambo')
    //2.action
    let newState =dialogsReducer(state, action)
//3.expectation
    expect(newState.messages.length).toBe(5);
});