import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/app-Reducer";
import store, {appStateType} from "./Redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";
import Header from "./components/Header/Header";
import {UsersPage} from "./components/Users/UsersPage";
import {Navbar} from "./components/Navbar/Navbar";
import 'antd/dist/antd.css';
import {Online} from './components/Online/Online';

import Preloader from "./components/common/Preloader/Preloader";
import {Alert} from 'antd';


const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));


const DialogsSuspense = withSuspense(Dialogs)


class App extends React.Component <MapPropsType & MapDispatchType> {

    catchAllUnhandleError = (event: PromiseRejectionEvent) => {
        return <Alert message={"Внимание: Необработанная ошибка Promise:" + event.reason} type="error"/>
    }

    //добавляем слушателя любых ошибок, если есть то выдаем в алерт
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleError);
    }

//удаляем слушателя при размонтировки
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleError);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="container">
                <Header/>
                <Navbar/>
                <Online/>
                <div className="content__wrapper">
                    <Route path="/profile/:userId?"><ProfileContainer/></Route>
                    <Route path="/dialogs/:userId?"><DialogsSuspense/></Route>
                    <Route path="/users"><UsersPage/></Route>
                    <Route exact path="/login"><Login/></Route>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: appStateType) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
    }
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MyApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MyApp;

type MapPropsType = {
    initialized: boolean
    isAuth: boolean
}
type MapDispatchType = {
    initializeApp: () => void
};

