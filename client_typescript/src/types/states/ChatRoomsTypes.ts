export interface IMessage {
  username: string;
  text: string;
  date: string;
}

export interface IChatRoom {
  messages: IMessage[];
  id: string;
  base64Image: string;
  name: string;
}

export type IChatRooms = { [key: string]: IChatRoom };


export interface IChatRoomsState {
  rooms:IChatRooms,
  currentRoom: null | string;
}