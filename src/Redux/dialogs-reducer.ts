
import {InferActionTypes} from "./redux-store";

export type FriendsListType = {
    id: number,
    src?: string,
    name: string,
    worked: string,
    timeHouse?: string,
    timeMin?: string,
}

export type messagesType = {
    id: number,
    message: string,
    name: string|number,
    time: string
}
export type messagesUserType = {
    id: number,
    message: string,
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
            worked: 'Team Leader',
            timeHouse: '20',
            timeMin: '05 ',
        },
        {
            id: 2,
            src: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg',
            name: 'Alina',
            worked: 'Design',
            timeHouse: '20',
            timeMin: '12 ',
        },
        {
            id: 3, src: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg',
            name: 'Azamat',
            worked: 'Frontend',
            timeHouse: '20',
            timeMin: '15'
        },
        {
            id: 4, src: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg',
            name: 'Leysan',
            worked: 'tester',
            timeHouse: '20',
            timeMin: '15'
        },
        {
            id: 5, src: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg',
            name: 'Karim',
            worked: 'Dev Ops',
            timeHouse: '20',
            timeMin: '15'
        },
        {
            id: 6, src: 'https://iqonic.design/themes/socialv/html/images/user/10.jpg',
            name: 'Alsu',
            worked: 'design',
            timeHouse: '20',
            timeMin: '15'
        },
        {
            id: 7, src: 'https://iqonic.design/themes/socialv/html/images/user/11.jpg',
            name: 'Alina',
            worked: 'Frontend',
            timeHouse: '20',
            timeMin: '15'
        },

    ] as Array<FriendsListType>,
    messages: [
        {
            id: 1,
            message: 'Привет!Как дела?',
            name: 1,
            time: '15:00'
        },
        {
            id: 2,
            message: 'Здорова! нормально, как сам поживаешь!?',
            name: 'FriendUser',
            time: '15:03'
        },
        {
            id: 3, message: 'Все отлично, почему вчера на футбол не пришел?',
            name: 1,
            time: '15:10'
        },
        {
            id: 4,
            message: 'Не смог прийти, работал, как прошел футбол?',
            name: 'FriendUser',
            time: '15:15'
        },
        {
            id: 5,
            message: 'Отлично!',
            name: 1,
            time: '15:18'
        },
        {
            id: 6,
            message: 'Следуйщий раз я прийду обязательно!',
            name: 'FriendUser',
            time: '15:20'
        },

    ] as Array<messagesType>,
    dialogsIcons: [{id: 1, src: "https://cdn.icon-icons.com/icons2/272/PNG/128/Phone_30029.png"},
        {id: 2, src: "https://img.icons8.com/ultraviolet/2x/camera.png"},
        {
            id: 3,
            src: "https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-dustbin-bin-icon-isolated-on-abstract-background-png-image_1763535.jpg"
        },
        {id: 4, src: "https://img.icons8.com/fluent/2x/menu-2.png"}] as Array<dialogsIconType>,
    activeListMessages:false as boolean
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
                    name: 'authUser',
                    time: '15:27'
                }],
            };
            case 'dialogs/SET_SHOW_LIST_MESSAGES':
            return {
                ...state,
                activeListMessages:action.body,
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
    setActiveListMessages: (body:boolean) => ({
        type: 'dialogs/SET_SHOW_LIST_MESSAGES',
        body
    }as const)
}



