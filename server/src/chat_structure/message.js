import getDate from "./getDate.js";

class MessageRoot {
  constructor(username, text) {
    this.username = username;
    this.text = text;
    this.date = getDate();
  }
}
class Message extends MessageRoot {}

export default Message;
