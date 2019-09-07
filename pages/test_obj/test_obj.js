// pages/test_obj/test_obj.js

var iffe = (function(){
  console.log('立即执行函数')
})()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /** 对象的继承 */
  objExtends: function(){
    var MyArray = function () { };

    MyArray.prototype = new Array();
    MyArray.prototype.constructor = MyArray;

    var mine = new MyArray();
    mine.push(1, 2, 3);
    mine.length // 3
   
    console.log('YM_是否属于Array', mine instanceof Array)
    console.log('YM_是否属于MyArray', mine instanceof MyArray)
    console.log('YM_构造函数名字', mine.constructor.name)

    function Sub(){

    }
    Sub.prototype = Error.prototype;
    Sub.prototype.constructor = Sub;
    Sub.prototype.method = '...';
    var sub = new Sub()
    console.log('YM_自定义原型',Object.getPrototypeOf(sub))
    
  },

  ie: (function($,a){
    console.log('类中的立即执行函数')
  })(),

  /** this的切换与绑定 */
  thisSwitchBind: function(){
    o:1
    var obj = {
      o:'o'
    }

    var fun = function(){
      console.log('YM',this.o)
    }
    var f = fun.bind(obj);
    f()
    var hello = function () {
      console.log(this.name);
    };

    var demo = {
      name: 'demo'
    };

    var h = hello.bind(demo);
    h(); // out 'demo'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.objExtends()
    this.thisSwitchBind()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})