//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World122',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  outerTap:function(e){
    console.log(e)
  },
  middleTap:function(e){
    console.log(e)
  },
  innerTap:function(e){
    console.log(e)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTapa:function(){
    wx.navigateTo({
      url:'../demoa/demoa'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      /**
       * 判断page.onload 中是否定义了this.userInfoReadyCallback

        ❗️注:因为wx.getUserInfo是异步的，不知道异步先执行完毕还是page.onload先执行完毕

        1. 方法如果定义了，则说明page.onload比当前方法运行的早（page已经完成初始化），app的globalData还没有数据，通过此回调可以及时的刷新数据
        2. 方法如果没有定义，则说明page.onload比当前方法运行的晚（page还没有初始化），app的globalData是有值的，可以在page.onload中取globalData里面的值
       * 
      */
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
