//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  routerPage(){
    wx.redirectTo({
      url: '/packageA/pages/index/index',
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
