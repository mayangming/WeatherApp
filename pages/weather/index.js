// pages/weather/index.js
const weatherMap = {
  'sunny': '晴天',
  'cloudy': '多云',
  'overcast': '阴',
  'lightrain': '小雨',
  'heavyrain': '大雨',
  'snow': '雪'
}
const weatherColorMap = {
  'sunny': '#cbeefd',
  'cloudy': '#deeef6',
  'overcast': '#c6ced2',
  'lightrain': '#bdd5e1',
  'heavyrain': '#c5ccd0',
  'snow': '#aae1fc'
}
const QQMapWX = require('../../libs/qqmap-wx-jssdk.js')

const UNPROMPTED = 0
const UNAUTHORIZED = 1
const AUTHORIZED = 2

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTemp: '14°',
    nowWeather: '阴天',
    nowWeatherBackground: "",
    city: '上海市',
    locationAuthType: UNPROMPTED
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.qqmapsdk = new QQMapWX({
      key: 'EAXBZ-33R3X-AA64F-7FIPQ-BY27J-5UF5B'
    })
    wx.getSetting({
      success: res => {
        let auth = res.authSetting['scope.userLocation']
        let locationAuthType = auth ? AUTHORIZED
          : (auth === false) ? UNAUTHORIZED : UNPROMPTED
        this.setData({
          locationAuthType: locationAuthType
        })

        if (auth)
          this.getLocation()
        else
          this.getNowWeather() //使用默认城市广州
      },
      fail: () => {
        this.getNowWeather() //使用默认城市广州
      }
    })
    // this.getNowWeather()
  },
  getNowWeather: function (callBack) {
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: this.data.city
      },
      success: res => {
        console.log('YM', res)
        let result = res.data.result
        let temp = result.now.temp
        let weather = result.now.weather
        console.log(temp, weather)
        let forecast = result.forecast
        let nowHour = new Date().getHours()
        for (let i = 0; i < 24; i += 3) {
          let index = i / 3;
          forecast[index].time = (i + nowHour) % 24 + '时';
          forecast[index].temp = forecast[index].temp + '°';
          forecast[index].iconPath = '/images/' + forecast[index].weather + '-icon.png'
        }
        this.setData({
          nowTemp: temp + '°',
          nowWeather: weatherMap[weather],
          nowWeatherBackground: '/images/' + weather + '-bg.png',
          forecast
        })
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: weatherColorMap[weather],
        })
        this.setToday(result)
      },
      complete() {
        callBack && callBack()// 0 、''、null、undefined、NaN 表示false，&&操作符，如果前面为false则执行后面的
      }
    })
  },
  setToday(result) {
    let date = new Date()
    this.setData({
      todayTemp: `${result.today.minTemp}° - ${result.today.maxTemp}°`,
      todayDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 今天`
    })
  },
  onTapDayWeather: function () {
    wx.navigateTo({
      url: '/pages/list/list?city=' + this.data.city,
    })
  },
  onTapLocation: function () {
    if (this.data.locationAuthType == UNAUTHORIZED) {
      wx.openSetting({
        success: res => {
          let auth = res.authSetting['scope.userLocation']
          if (auth) {
            this.getLocation()
          }
        }
      })
    } else {
      this.getLocation()
    }
  },
  getLocation: function () {
    wx.getLocation({
      success: res => {
        this.qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            let city = res.result.address_component.city
            console.log(city)
            this.setData({
              city: city,
              locationTipsText: ''
            })
            this.getNowWeather()
          }
        })
      },
      fail: () => {
        this.setData({
          locationAuthType: UNAUTHORIZED
        })
      }
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
    wx.getSetting({
      success: res => {
        let auth = res.authSetting['scope.userLocation']
        if (auth && this.data.locationAuthType != AUTHORIZED) {
          //权限从无到有
          this.setData({
            locationAuthType: AUTHORIZED
          })
          this.getLocation()
        }
        //权限从有到无未处理
      }
    })
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
    this.getNowWeather(() => wx.stopPullDownRefresh())
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