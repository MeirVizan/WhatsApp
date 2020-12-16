import React, {useState, useEffect} from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({id, name, addNewChat}) {

    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id) {
          db.collection('rooms')
            .doc(id).collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) =>
                doc.data())));
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createchat = () => {
        const roomName = prompt("Please enter name for chat room");

        if(roomName){
            // do something here
            db.collection('rooms').add({
                name: roomName,
            });
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarChat__info'>
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    )
    : (
        <div onClick={createchat}
        className='sidebarChat'>
        <h3>Add New Chat</h3>
        </div>
    )
}

export default SidebarChat
