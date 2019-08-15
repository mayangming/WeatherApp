// pages/test_grid/test_grid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHidden: 'hidden'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const query = wx.createSelectorQuery()
    query.select('#grid').boundingClientRect(rect => {
      // rect.id      // 节点的ID
      // rect.dataset // 节点的dataset
      // rect.left    // 节点的左边界坐标
      // rect.right   // 节点的右边界坐标
      // rect.top     // 节点的上边界坐标
      // rect.bottom  // 节点的下边界坐标
      // rect.width   // 节点的宽度
      // rect.height  // 节点的高度
      var top = rect.top;
      var windowH =wx.getSystemInfoSync().windowHeight;
      var windowW = wx.getSystemInfoSync().windowWidth;
      console.log('YM_屏幕可使用高度', windowH)
      console.log('YM_屏幕可使用宽度', windowW)
      console.log('YM_grid上边界坐标', top)
      if (top >= windowH){
        console.log('不在屏幕可视范围内');
        this.setData({
          isHidden: 'visible'
        })
      }else{
        console.log('在屏幕可视范围内');
        this.setData({
          isHidden: 'hidden'
        })
      }
    }).exec()
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