function toXXformat(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function getDate() {
  let date = new Date();
  let year = date.getFullYear(),
    month = toXXformat(date.getMonth() + 1),
    day = toXXformat(date.getDate()),
    hours = toXXformat(date.getHours()),
    minutes = toXXformat(date.getMinutes()),
    seconds = toXXformat(date.getSeconds());

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

export default getDate;
