import Room from "./room.js";
import Message from "./message.js";

class ChatRoot {
  constructor() {
    this.rooms = [];
  }
}

class InitPrototypes extends ChatRoot {
  constructor(room_proto, message_proto) {
    super();
    this.Message = message_proto;
    this.Room = room_proto;
  }
}
class GetRoomById extends InitPrototypes {
  getRoomById(id) {
    for (let room of this.rooms) {
      if (room.getRoomId() == id) {
        return { status: true, room: room };
      }
    }
    return { status: false };
  }
}
class GetRoomsCount extends GetRoomById {
  getRoomsCount() {
    return this.rooms.length;
  }
}

class AddNewRoom extends GetRoomsCount {
  addNewRoom() {
    let newRoom = new this.Room(this.getRoomsCount() + 1, this.Message);
    this.rooms.push(newRoom);
    return { status: true, room: newRoom };
  }
}

class AddMessageToRoom extends AddNewRoom {
  addMessageToRoom(id, username, message) {
    let queryResult = this.getRoomById(id);
    if (queryResult.status == true) {
      queryResult.room.addMessage(username, message);
      return { status: true, room: queryResult.room };
    } else return { status: false };
  }
}

class Chat extends AddMessageToRoom {}

export default Chat;
