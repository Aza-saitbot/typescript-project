import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Online} from "./components/Online/Online";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {withSuspense} from "./components/hoc/withSuspense";
import {Login} from "./components/Login/Login";
import {UsersPage} from "./components/Users/UsersPage";


const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const DialogsSuspense = withSuspense(Dialogs)

export type routesType={
    initialized:boolean
}

export const useRouters:React.FC<routesType> = ({initialized}) => {
    if (initialized) {
        return (
            <Switch>
                <div className="container">
                    Content
                    <Header/>
                    <Navbar/>
                    <Online/>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?"><ProfileContainer/></Route>
                        <Route path="/dialogs"><DialogsSuspense/></Route>
                        <Route path="/users"><UsersPage/></Route>
                        <Redirect to="/profile/:userId?"/>
                    </div>
                </div>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route exact path="/login"><Login/></Route>
            <Redirect to="/login"/>
        </Switch>
    )
}


