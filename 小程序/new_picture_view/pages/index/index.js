"use strict";
var app = getApp();
Page({
    data: {
        coverList: [],
        listParams: {
            start: 0,
            end: 10
        }
    },
    gotoDetail(e) {
        console.log(e.currentTarget.dataset.href);
        let href = e.currentTarget.dataset.href
        wx.navigateTo({
            url: `/pages/detail/detail?href=${href}`,
            success: (result)=>{
                console.log("success");
            },
            fail: ()=>{
                console.log("失败了");
            },
            complete: ()=>{}
        });
    },
    async getList() {
        let that = this
        await wx.request({
            url: `${app.globalData.preUrl}/picture/cover`,
            data: {
                start: that.data.listParams.start,
                end: that.data.listParams.end
            },
            success: function (res) {
                that.setData({
                    coverList: [...that.data.coverList, ...res.data.data],
                    listParams: {
                        start: that.data.listParams.start + 10,
                        end: that.data.listParams.end,
                    }
                })
                console.log(res);
            }
        });
    },
    onReachBottom() {
        this.getList()
    },
    onLoad: function () {
        this.getList()
    },
});