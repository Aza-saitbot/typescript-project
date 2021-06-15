import React from "react";
import s from "./Dialogs.module.css";
import DialogsItemsContainer from "./Chat/Dialogs_items/DialogsItemsContainer";
import MessagesItemsContainer from "./Chat/Messages_items/MessagesItemsContainer";


const Dialogs = () => {

    return (
           <div className={s.dialogs}>
               <DialogsItemsContainer/>
               <MessagesItemsContainer/>
           </div>
    )
}

export default Dialogs;

