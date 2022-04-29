export enum RequestTypes {
  SET_USERNAME_REQUEST = "set_username",
  JOIN_TO_ROOM_REQUEST = "join_to_room",
  SEND_MESSAGE = "add_new_message",
  CREATE_ROOM_REQUEST = "create_room",
}

interface SetUsernameRequestParams{
  username:string
}

interface JoinToRoomRequestParams{
  id:string
}

interface SendMessageParams{
  id:string,
  message:string
}

interface CreateRoomRequestParams{}

export type SetUsernameFunction = (params:SetUsernameRequestParams)=>void ;
export type JoinToRoomFunction = (params:JoinToRoomRequestParams)=>void ;
export type SendMessageFunction = (params:SendMessageParams)=>void
export type CreateRoomFunction = (params:CreateRoomRequestParams)=>void

export type RequestParams=SetUsernameRequestParams|JoinToRoomRequestParams|SendMessageParams|CreateRoomRequestParams