import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import SettingsIcon from '../icons/settings';
import SendBtnIcon from '../icons/sendmsg';
import {Form,Button} from 'react-bootstrap';
import config from '../config';
import PersonIcon from '../icons/person'

const Wrap=styled.div`
    display: flex;
    flex-direction: column;
`;
const Row=styled.div`
    &.first,&.last {
        border: 1px solid ${config.themeColor};
        background-color: ${config.themeColor};
        height: 35px;
    }
    &.last {
        height: 40px;
        & input{
            height: 33px;
            width: 316px;
            margin: 2px;
            border: 1px solid ${config.themeColor};
            border-radius: 12px;
            &:focus {
                border: 1px solid red;
            }
        }
        & button {
            width: 100%;
            font-weight: 500;
            background-color: ${config.themeColor};
            &:hover {
                background-color: #007bff;
            }
        }
    }
    &.chat {
        overflow: auto;
        height: 600px;
        & .chat-row {
            width: 100%;
        }
        & .text {
            background-color: #adb5bd3d;
            margin: 5px;
            border-radius: 18px;
            padding: 4px;
            width: fit-content;
            max-width: 80%;
        }
        & .admin {
            padding-left: 8px;
            & .icon {
                color: ${config.themeColor};
                float: left;    
                clear: left;
                position: relative;
                top: 10px;
            }
            & .text {
                float: left;
            }
        }
        & .user {
            text-align: right;
            padding-right: 8px;
            float: right;
            & .icon {
                color: ${config.themeColor};
                float: right;
                clear: right;
                position: relative;
                top: 10px;
            }
            & .text {
                float: right;
            }
        }
    }

    & .contact {
        width: 100%;
        height: 48px;
        &:hover {
            cursor: pointer;
        }
        & .icon {
            color: ${config.themeColor};
            float: left;
            position: relative;
            top: 14px;
            left: 11px;
        }
        & .id-chat {
            margin-left: 42px;
        }
    }
    & .contact:nth-child(even) {
        background-color: #adb5bd3d;
    }
`;

const myChat=[
    'ahi what is your name',
    'uI am jacks, what is your name',
    'ai am keerthi, what is your age',
    'ai am 22y old, yours?',
    'ui am 25y old',
    'awhich company you are working?',
    'uunited online, yours?',
    'aamazon.',
    'ugreat! super talented person you are',
    'ayou can also try, some vacancies are there  in my company, you must try',
    'uhi what is your name',
    'aI am jacks, what is your name',
    'ui am keerthi, what is your age',
    'ai am 22y old, yours?',
    'ui am 25y old',
    'awhich company you are working?',
    'uunited online, yours?',
    'uamazon.',
    'agreat! super talented person you are',
    'ayou can also try, some vacancies are there  in my company, you must try',
];

export default function ChatView(){
    const [activeChatIndex,setActiveChatIndex]=useState(-1);
    const [totalChats,setTotalChats]=useState([myChat]);

    function onClickContact(){
        setActiveChatIndex(0);
    }

    const Btn=activeChatIndex<0 ? <Button variant="primary" >New Chat</Button>:
        <Fragment>
            <input type="msg" placeholder="Enter msg" />
            <SendBtnIcon />
        </Fragment>;
    const chat=activeChatIndex>=0 ?totalChats[activeChatIndex].map((d,index)=>{
        const i=d[0];
        if(i==='a'){
            return <div key={index} className='chat-row admin'><PersonIcon /><div className='text'>{d.slice(1)}</div></div>
        }else {
            return <div key={index} className='chat-row user'><PersonIcon /><div className='text'>{d.slice(1)}</div></div>
        }
    }):<div className='contact' onClick={onClickContact}><PersonIcon /><div className='id-chat'><div className='id'>user Name</div><div className='last-chat'>chat ...</div></div></div>;

    return <Wrap>
            <Row className="first"><SettingsIcon /></Row>
            <Row className="chat">
                {chat}{chat}
            </Row>
            <Row className="last">
                {Btn}
            </Row>
        </Wrap>
}