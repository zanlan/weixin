//logs.js

Page({
    data: {
        logs: [1, 2, 3, 4],
        num1: 0,
        num2: 0,
        result: 'what???',
        status: 0,
        formresult: '',
    },
    formCompare: function (e) {
        var str = '相等';
        var num7 = Number(e.detail.value.num7);
        var num8 = Number(e.detail.value.num8);
        if (num7 > num8) {
            str = '第一个数字大';
        } else if (num7 < num8) {
            str = '第二个数字大';
        }
        this.setData({
            formresult: str,
        });
    },
    changeStatus: function () {
        var num;
        if (this.data.status == 0) {
            num = 1;
        } else if (this.data.status == 1) {
            num = 2;
        } else {
            num = 0;
        }
        this.setData({
            status: num,
        });
    },
    change1: function (e) {
        console.log(e.target.id, e.detail.value);
    },
    change2: function (e) {
        console.log(e.target.dataset.id, e.detail.value);
    },
    compare: function () {
        var str = '';
        if (this.num1 > this.num2) {
            str = 'num1大';
        } else {
            str = 'num2大';
        }
        this.setData({
            result: str,
        });
    },
    num1change: function (e) {
        this.num1 = Number(e.detail.value);
        console.log('this.num1: ', this.num1);
    },
    num2change: function (e) {
        this.num2 = Number(e.detail.value);
        console.log('this.num2: ', this.num2);
    },
    onLoad: function () {
        this.setData({
            logs: [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
            ],
        });
    },
    onShow: function () {
        console.log('onShow');
    },
    onReady: function () {
        console.log('onShow');
    },
    onhide: function () {
        console.log('onShow');
    },
    onUnload: function () {
        console.log('onShow');
    },
    onReachBottom: function () {
        console.log('到底了');
    },
    onPullDownRefresh: function () {
        console.log('下拉刷新');
    },
    onShareAppMessage: function () {
        console.log('分享给好友');
    },
    onPageScroll: function () {
        console.log('你滚动了');
    },
});
