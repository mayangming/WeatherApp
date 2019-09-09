// pages/test_sticky/test_sticky.js

const contacts = [
  {
    title:'A',
    names:[
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  },
  {
    title: 'B',
    names: [
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  },
  {
    title: 'C',
    names: [
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  },
  {
    title: 'D',
    names: [
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  },
  {
    title: 'E',
    names: [
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  },
  {
    title: 'F',
    names: [
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  },
  {
    title: 'G',
    names: [
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  },
  {
    title: 'H',
    names: [
      '第一行',
      '第二行',
      '第三行',
      '第四行',
      '第五行',
      '第六行',
      '第七行',
      '第八行',
    ]
  }
]

const titles = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
]



Page({

  /**
   * 页面的初始数据
   */
  data: {
    contacts: contacts,
    titles: titles,
    checkIndex:0,
    lastIndex:1,
    currentTitle:'A'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._observer = wx.createIntersectionObserver(this)
    this._observer
      .relativeTo('page')
      .relativeToViewport({ top: 10 })//进入页面顶部时触发回调
      // .observe('#' + this.data.checkIndex[lastIndex], (res) => {
      .observe('#A', (res) => {
        console.log(res);
        this.data.lastIndex += 1; 
      })
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
    if (this._observer) this._observer.disconnect()
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