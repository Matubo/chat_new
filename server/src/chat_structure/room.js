import Message from "./message.js";

class RoomRoot {
  constructor(id) {
    this.messages = [];
    this.id = id;
  }
}

class GetRoomId extends RoomRoot {
  getRoomId() {
    return this.id;
  }
}

class GetRoomMessages extends GetRoomId {
  getMessages() {
    return this.messages;
  }
}

class GetRoomMessagesCount extends GetRoomMessages {
  getMessagesCount() {
    return this.messages.length;
  }
}

class GetLastRoomMessages extends GetRoomMessagesCount {
  getLastRoomMessages(count) {
    return this.messages.slice(-count);
  }
}

class MessagePrototype extends GetLastRoomMessages {
  constructor(id, message_proto) {
    super(id);
    this.Message = message_proto;
  }
}

class AddMessageToRoom extends MessagePrototype {
  addMessage(username,message) {
    this.messages.push(new this.Message(username, message));
  }
}

class Room extends AddMessageToRoom {}

export default Room;
