import {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ChatWindow from '../ChatWindow/ChatWindow';
import Authorization from '../Authorization/Authorization';
import './AppRoot.css';
import { SET_USERNAME_REQUEST } from '../../queries';
import { store } from '../../store/store';

const ChatApp:FC = () => {
    let {authorized} = useSelector((store:RootState)=>store.authorization)
    let {rooms,currentRoom} = useSelector((store:RootState)=>store.chatRoom);
    let dispatch = useDispatch();
    
    if(!authorized){
        return <Authorization callback={(data:string)=>dispatch(SET_USERNAME_REQUEST({username:data}))}/>
    }
    else{
    return  (
        <ChatWindow/>
    )
    }
};

export default ChatApp;