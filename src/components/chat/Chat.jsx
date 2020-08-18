import React, { useState, useEffect } from 'react'
import './Chat.scss';
import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import MoodIcon from '@material-ui/icons/Mood';
import { useParams } from 'react-router';
import db from '../../firebase';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));

            db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(doc =>
                    ({
                        id: doc.id,
                        message: doc.data().message,
                        timestamp: doc.data().timestamp,
                        name: doc.data().name
                    })
                )
            ))
        }
        // return () => {
        //     cleanup
        // }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput('');
        db.
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seant at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <div className={`chat__message ${true && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp.toUTCString()}</span>
                    </div>
                ))}
            </div>
            <div className="chat__footer">
                <MoodIcon />
                <form onSubmit={sendMessage}>
                    <input 
                        type="text" 
                        placeholder="Type a message"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
