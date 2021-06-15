import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-Reducer";
import navbarReducer from "./navbarReducer";
import onlineReducer from "./onlineReducer";
import headerReducer from "./headerReducer";


let rootReducers=combineReducers({
    postPage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
    online:onlineReducer,
    navbar:navbarReducer,
    header:headerReducer,
})

type rootReducersType=typeof rootReducers;
export type appStateType=ReturnType<rootReducersType>//global state

export type InferActionTypes <T,> = T extends {[key:string]:(...args:any[])=>infer U} ? U:never
//именно функция возращаемая типизируем

export type BaseThunkType <A extends Action,R=Promise<void>> = ThunkAction<R, appStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__=store;

export default store;

