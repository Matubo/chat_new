import { Socket } from "socket.io-client";
import { ResponsesParams, ResponsesTypes } from "../../types/queries/responses";

export default function accept_join_to_room(socket:Socket) {
    return function (type:ResponsesTypes) {
        return function (callback_fun:Function) {
            socket.on(type, (data:ResponsesParams) => {
            callback_fun(data);
        });
    };
 } 
}