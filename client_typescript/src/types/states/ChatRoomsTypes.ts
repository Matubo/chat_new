export interface IMessage {
  username: string;
  text: string;
  date: string;
}

export interface IChatRoom {
  messages: IMessage[];
  id: string;
}

export interface IChatRooms {
  rooms: { [key: string]: IChatRoom };
  currentRoom: null | string;
}
