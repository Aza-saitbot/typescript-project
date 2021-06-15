import {getAuthUserData} from "./authReducer";
import { InferActionTypes} from "./redux-store";


const initialState = {
    initialized: false,
};
type initialStateType = typeof initialState;


const appReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case "savetooths/appReducer/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({
        type:'savetooths/appReducer/INITIALIZED_SUCCESS'}
        )}

type ActionType = InferActionTypes<typeof actions>

//делаем первоначальную авторизацию пользователя, делаем запрос на сервер
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])//после всех параллельных операции мы можем только запустить наш диспатч
        .then(dispatch(actions.initializedSuccess()))
}//если успешно, то мы авторизованы и actionCreator- initializedSuccess установить в state значение true,

export default appReducer;


