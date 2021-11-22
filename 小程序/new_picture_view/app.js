App({
    globalData: {
        env: 'devlopment',
        hosts: {
            devlopment: 'http://localhost:3000',
            production: 'http:pixinlei.ltd:3000',
        },
        preUrl: '' // url前缀
    },
    onLaunch: function () {
        this.globalData.preUrl = this.globalData.hosts[this.globalData.env]
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
    },
});