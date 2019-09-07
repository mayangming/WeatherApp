// pages/test/test.js
var items = [1, 2, 3, 4, 5, 6];
var results = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '1',
    value2: null,
    message: {
      name: 'YM'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      'message.name': 'change'
    })

    var t1 = '0'
    var t2 = '1'
    var t3 = t2 == '1' ? '首诊免费' : t1 == '0' ? '免费' : 66
    console.log('YM', t3)

    var ar = [];

    if (ar.length > 0) {
      console.log('不为空')
    } else {
      console.log('为空')
    }



    this.series(items.shift());
  },


  asyncT: function(arg, callback) {
    console.log('参数为 ' + arg + ' , 1秒后返回结果');
    setTimeout(function() {
      callback(arg * 2);
    }, 1000);
  },

  final: function(value) {
    console.log('完成: ', value);
  },

  series: function(item) {
    var that = this;
    console.log('开始: ');
    if (item) {
      this.asyncT(item, function(result) {
        results.push(result);
        return that.series(items.shift());
      });
    } else {
      return this.final(results[results.length - 1]);
    }
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