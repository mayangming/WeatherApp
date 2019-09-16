const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function importTest(){
  console.log('YM__导入成功')
}
class TimerOut {
  static timer = null
  static timeOut(func, wait, args) {
    var timer = TimerOut.timer;
    timer && clearTimeout(timer);
    timer = null;
    timer = setTimeout(func, wait, ...args);
    TimerOut.timer = timer;
  }

  static cancelTimer() {
    var timer = TimerOut.timer;
    timer && clearTimeout(timer);
  }

}
module.exports = {
  formatTime: formatTime,
  importTest,
  TimerOut
}
