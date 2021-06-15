import authUser from "../axios/images/i-min.jpg";
import {InferActionTypes} from "./redux-store";

export type FriendsListType = {
    id: number,
    src: string,
    name: string,
    name2: string,
    time1?: string,
    time2?: string,
    active?: string
}

export type messagesType = {
    id: number,
    message: string,
    src: typeof authUser | string,
    time: string
}
export type dialogsIconType = { id: number, src: string }


//стартовое значение стейта,пока не загрузились/обновились данные из сервера
let initialState = {
    PublicChannels: [
        {
            id: 1,
            src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
            name: 'Radik',
            name2: 'Team Leader',
            time1: '20',
            time2: '05 ',
        },
        {
            id: 2,
            src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg',
            name: 'Alina',
            name2: 'Design',
            time1: '20',
            time2: '12 ',
        },
        {
            id: 3, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg',
            name: 'Azamat',
            name2: 'Frontend developer',
            time1: '20',
            time2: '15',

        },
        {
            id: 4, src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg', name: 'Developer',
            name2: 'passages of Lorem',time1: '',
            time2: '',
        },
        {
            id: 5, src: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg', name: 'Testing Team',
            name2: 'Lorem Ipsum used',time1: '',
            time2: '',
        },
        {
            id: 6, src: 'https://iqonic.design/themes/socialv/html/images/user/03.jpg', name: 'Paul Molive',
            name2: 'translation by',time1: '',
            time2: '',
        },
        {
            id: 7, src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg', name: 'Paige Turner',
            name2: 'Lorem Ipsum which',time1: '',
            time2: '',
        },
        {
            id: 8, src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg', name: 'Barb Acku',
            name2: 'simply random text',time1: '',
            time2: '',
        },
        {
            id: 9, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg', name: 'Maya Didass',
            name2: 'but also the leap',time1: '',
            time2: '',
        },
        {
            id: 10, src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg', name: 'Monty Carlo',
            name2: 'Contry to popular',time1: '',
            time2: '',
        },
    ] as Array<FriendsListType>,
    messages: [
        {
            id: 1,
            message: 'How can we help? We are here for you!',
            src: authUser,
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
            src: authUser,
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
            src: authUser,
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
            src: authUser,
            time: '6:48'
        },
    ] as Array<messagesType>,
    dialogsIcons: [{id: 1, src: "https://cdn.icon-icons.com/icons2/272/PNG/128/Phone_30029.png"},
        {id: 2, src: "https://img.icons8.com/ultraviolet/2x/camera.png"},
        {
            id: 3,
            src: "https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-dustbin-bin-icon-isolated-on-abstract-background-png-image_1763535.jpg"
        },
        {id: 4, src: "https://img.icons8.com/fluent/2x/menu-2.png"}] as Array<dialogsIconType>,
    showListMessages:false as boolean
}

export type InitialStateType = typeof initialState

//добавь новое сообщение в массиве сообщения
const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'dialogs/ADD_SEND':
            return {
                ...state,
                messages: [...state.messages, {
                    id: 8,
                    message: action.newMessageBody,
                    src: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg',
                    time: '7:55'
                }],
            };
        case 'dialogs/SET_SHOW_LIST_MESSAGES':
            return {
                ...state,
                showListMessages:action.body
            };
        default:
            return state;
    }
}
export default dialogsReducer;

type ActionType = InferActionTypes<typeof actions>

//с экшн приходит новое значения textarea
export const actions = {
    addSendActionCreator: (newMessageBody: string) => ({
        type: 'dialogs/ADD_SEND',
        newMessageBody
    }as const),
    setShowListMessages: (body: boolean) => ({
        type: 'dialogs/SET_SHOW_LIST_MESSAGES', body
    }as const),
}



