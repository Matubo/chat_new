import getDate from "./getDate.js";

class MessageRoot {
  constructor(userId, text) {
    this.userId = userId;
    this.text = text;
    this.date = getDate();
  }
}
class Message extends MessageRoot {}

export default Message;
