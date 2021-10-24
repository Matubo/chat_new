import RootCarousel from "../room_carousel/room_carousel"

const RCitems=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},] 

function ChatBody(props){
return(<div className='chat-body'>
    <p className='chat-body__header'>Chat</p>
    <RootCarousel items={RCitems}></RootCarousel>    
</div>)
}

export default ChatBody