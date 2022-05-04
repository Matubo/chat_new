import { Socket } from "socket.io-client";
import { RequestParams, RequestTypes } from "../../types/queries/requests";

export default function request(socket: Socket) {
  return (type: RequestTypes) => {
    return (data?: RequestParams) => {
      socket.emit(type, { ...data });
    };
  };
}
