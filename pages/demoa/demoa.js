//logs.js

Page({
    data: {
        logs: [1, 2, 3, 4],
    },
    onLoad: function () {
        this.setData({
            logs: [4, 5, 6, 7, 8, 9, 10,4, 5, 6, 7, 8, 9, 10,4, 5, 6, 7, 8, 9, 10,4, 5, 6, 7, 8, 9, 10],
        });
    },
    onReachBottom:function(){
        console.log(11111);
    }
});
