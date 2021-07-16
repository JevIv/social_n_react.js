import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData
        .map( dialog=> <DialogItem name={dialog.name} key={dialog.name} id={dialog.name} /> );
    let messagesElements = state.messageData
        .map( message=> <Message message={message.name} key={message} /> );
    let newMessageBody = state.newMessageBody;

    let AddNewMessage = (values) => {
       props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth) return <Redirect to={"/login"} /> ;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                { dialogElements }

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={AddNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;