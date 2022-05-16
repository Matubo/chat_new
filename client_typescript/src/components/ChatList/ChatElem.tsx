import { url } from 'inspector';
import {FC} from 'react';
import './ChatElem.css';

type ChatElemProps={
    name:string,
    id:string,
    base64Image:string,
    callback:Function

}

const ChatElem:FC<ChatElemProps> = ({name,id,base64Image,callback})=>{
return (        
    <div className="chat-elem" key={id} onClick={()=>{callback()}}>
        <div className='chat-elem__img' style={{backgroundImage:`url("data:image/jpeg;base64,${base64Image}")`}}></div>
        <p className='chat-elem__name'>{id} - {name}</p>
    </div>
)
}

export default ChatElem