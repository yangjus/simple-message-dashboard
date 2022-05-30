import React from "react";
import Edit from "./Edit.js";
import {Divider} from '@mui/material';

const MessageBoard = (props) => {
    let key_increment = 0;
    let epoch_date = new Date(1970, 0, 1);
    return (
        <>
        <h3>Message Board History</h3>
        {props.allMessages && props.allMessages.map((message) => {
            key_increment = key_increment + 1;
            let date = epoch_date;
            let seconds = message.dateCreated.seconds - 14400;
            date.setSeconds(seconds);
            return (
            <div key={key_increment}>
              <Edit user={message.user}/>
              <p>[{message.user}] posted at [{date.toLocaleTimeString()}]: {message.content}</p>
              <Divider/>
            </div>
            )
        })}
        </>
    );
}

export default MessageBoard;