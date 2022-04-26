import { RequestParams, RequestTypes } from "../../types/queries/requests";
import {Socket} from "socket.io-client";

export default function(socket:Socket){
return (type:RequestTypes)=>{ 
return (data?:RequestParams)=>{
socket.emit(type, { ...data });
}}}