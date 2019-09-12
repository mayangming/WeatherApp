var items = [1, 2, 3, 4, 5, 6];
var results = [];
import debounce from '../../../utils/debounce.js';

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
    let [a,b,c] = [1,2,3]

    console.log('b',b);

    let q = 1,w = 2;
    console.log('w', w);
    var time
    var i = 1
    var timer = setInterval(testdoun, 300)
  
    function testdoun(){
      i++;
      console.log('YM---',i)
      if (i == 5) {
        clearInterval(timer)
      }
      
      // debounce(ma, 500)()
      tete(ma, 500,i)
    }
    function ma(item){
      console.log('--------', item)
    }
    function tete(func, wait,...values){
      console.log('YM_arguments', values)
      var context = this;
      time && clearTimeout(time);
      time = setTimeout(function () {
        func.apply(context, values);
      }, wait);
    }
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
  onShow: function () {
    // 微信参考代码 https://developers.weixin.qq.com/community/develop/doc/0002c892fb80a8326bf70f56d5bc04?highLine=%25E5%2587%25BD%25E6%2595%25B0%25E9%2598%25B2%25E6%258A%2596
    var i = 1
    var timer = setInterval(testdoun, 300)
    var that = this;
    function testdoun() {
      i++;
      console.log('YM---', i)
      if (i == 5) {
        clearInterval(timer)
      }

      that.test(i)
    }
  },
  /** 函数防抖动 */
  test: debounce(e => {
    console.log('e', e)
  }, 1000, {
      leading: false,
      trailing: true
    }),
  /**
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