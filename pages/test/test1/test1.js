// pages/test1/test1.js
var timerId = -1;

function timeOut() {
  return setTimeout(() => {
    console.log('---');
  }, 1000);
}

import {
  importTest as a, TimerOut
} from '../../../utils/util.js'


function print(value,as) {
  console.log('YM_打印日志', value,as)
}


// const TimerOut = {};
// TimerOut.timer = null;
// TimerOut.timeOut = (func) => {
//   var timer = TimerOut.timer;
//   timer && clearTimeout(timer);
//   timer = null;
//   timer = setTimeout(func, 1000 * 3);
//   TimerOut.timer = timer;
// }
// TimerOut.timeOut(print)
// TimerOut.timeOut(print)

function print(value1, value2) {
  console.log('YM_打印日志', value1, value2)
}
TimerOut.timeOut(print, 1000, [1, 2]) // YM_打印日志 1 2
TimerOut.cancelTimer()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [
      {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      },
    ]
  },

  /** 对象的拓展 */
  objExpand: function() {
    // 清除两边的空格  
    String.prototype.ma = function() {
      return this.replace(/(^\s*)|(\s*$)/g, '');
    };

    var result = ' nia '.ma();
    console.log('YM_过滤的数据', '_' + result)
  },

  /** 解构的使用 */
  deconstruction: function() {
    var user = {
      name: 'ym',
      age: 18
    }

    let {} = user
    setTimeout()
    // console.log('YM_解构',temp)
    // let { foo: t, bar: s } = { foo: 'aaa', bar: 'bbb' };
    // console.log('YM_foo',t);
    // console.log('YM_bar', s);
  },


  /** 延时测试 */
  timeOut: function() {
    if (timerId > 0) {
      var temp = clearTimeout(timerId);
      console.log('YM_取消定时器', timerId)
      timerId = -1;
    } else {
      timerId = timeOut();
      console.log('YM_设置定时器', timerId)
    }
  },

  /** 对象的继承 */
  classExtendTest: function() {

    function Parent() {

    }

    function Child() {}
    Parent.prototype.p = function() {
      console.log('YM_父组件')
    }
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.prototype.c = function() {
      console.log('YM_子组件')
    }
    var childTest = new Child();
    childTest.c();
    var cName = childTest.constructor.name;
    console.log('YM_构造方法名字', cName)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.classExtendTest();
    // this.deconstruction()
    // setInterval(this.timeOut, 3000)

    // var id = setTimeout(function (){
    //   console.log('延迟方法')
    // },2000);
    // console.log('id',id)

    var debug = false;

    var obj = {
      appId: debug ? '1' : '2'
    }

    console.log('YM_获取appId', obj.appId)
    a()

    function test(a,b){
      console.log('YM_计时器',a,b)
    }

    setTimeout(test, 1000, ...[1, 2])

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})