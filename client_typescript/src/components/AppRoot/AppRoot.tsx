import {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import Authorization from '../Authorization/Authorization';
import './AppRoot.css';
import { JOIN_TO_ROOM_REQUEST, SET_USERNAME_REQUEST } from '../../queries';
import ConnectField from '../ConnectField/ConnectField';

const ChatApp:FC = () => {
    let {authorized} = useSelector((store:RootState)=>store.authorization)
    let {rooms,currentRoom} = useSelector((store:RootState)=>store.chatRoom);
    let dispatch = useDispatch();
    
    if(!authorized){
        return <Authorization callback={(data:string)=>dispatch(SET_USERNAME_REQUEST({username:data}))}/>
    }
    else{
    return  (
    <>
    <ConnectField callback={(data:string)=>dispatch(JOIN_TO_ROOM_REQUEST({id:data}))}></ConnectField>
    </>
    )
    }
};

export default ChatApp;