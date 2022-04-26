export enum RequestTypes {
  SET_USERNAME = "set_username",
  JOIN_TO_ROOM = "join_to_room",
  ADD_NEW_MESSAGE = "add_new_message",
  CREATE_ROOM = "create_room",
}

interface SetUsernameParams{
  username:string
}

interface JoinToRoomParams{
  id:number
}

interface AddNewMessage{
  id:number,
  message:string
}

interface CreateRoomParams{}

export type RequestParams=SetUsernameParams|JoinToRoomParams|AddNewMessage|CreateRoomParams