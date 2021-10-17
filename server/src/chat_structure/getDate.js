function toXXformat(number) {
  if (number < 10) {
    return "0" + number;
  }
}

function getDate() {
  let date = new Date();
  let year = date.getFullYear(),
    month =
      date.getMonth() < 10 ? toXXformat(date.getMonth()) : date.getMonth(),
    day = date.getDay() < 10 ? toXXformat(date.getDay()) : date.getDay(),
    hours =
      date.getHours() < 10 ? toXXformat(date.getHours()) : date.getHours(),
    minutes =
      date.getMinutes() < 10
        ? toXXformat(date.getMinutes())
        : date.getMinutes(),
    seconds =
      date.getSeconds() < 10
        ? toXXformat(date.getSeconds())
        : date.getSeconds();

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

export default getDate;
