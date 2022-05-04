import {FC} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ChatWindow from '../ChatWindow/ChatWindow';
import Authorization from '../Authorization/Authorization';
import logo from '../../assets/img/bubble-chat.png';
import './AppRoot.css';

const ChatApp:FC = () => {
    let {authorized} = useSelector((store:RootState)=>store.authorization)
    return (
            <>
            <div className='chatApp_header'>
            {/* <div className='chatApp_header__icon'></div> */}
            <img className='chatApp_header__icon' src={logo}></img>
            <h1 className='chatApp_header__text'>Chat APP</h1>
            </div>
            {authorized?<ChatWindow/>:<Authorization/>}
            </>
    );
};

export default ChatApp;