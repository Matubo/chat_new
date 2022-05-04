import { Socket } from "socket.io-client";
import { ResponsesParams, ResponsesTypes } from "../../types/queries/responses";

export default function response(socket: Socket) {
  return function (type: ResponsesTypes) {
    return function (callbackFun: Function) {
      socket.on(type, (data: any) => {
        callbackFun(data);
      });
    };
  };
}
