//app.js
App({
    onLaunch: function (options) {
        //console.log(options);
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);

        // 登录
        wx.login({
            success: res => {
                //console.log(res);
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            },
        });
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo;

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
    onShow: function (options) {
        //生命周期回调--监听小程序显示
        //小程序启动，或从后台切入前台显示时，触发
        //console.log(options);
    },
    onHide: function (options) {
        //生命周期回调--监听小程序隐藏
        //小程序启动，或从前台切入显示后台时触发
        console.log(options);
    },
    onError: function (options) {
        //错误监听函数
        //小程序发生脚本错误，或者API调用错误时触发
        console.log(options);
    },
    onPageNotFound: function (options) {
        //页面不存在的监听函数
        //小程序要打开的页面不存在时，触发
        console.log(options);
    },
    globalData: {
        userInfo: null,
    },
});
