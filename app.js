
App({
  onLaunch: function (options) {

  },
  onShow: function () {
    this.globalData.isRequireLoad = true;
  },
  onHide: function () {
    console.log('hide');
  },
  getSystemInfo: function (cb) {
    var that = this;

    if (that.globalData.systemInfo) {
      typeof cb == "function" && cb(that.globalData.systemInfo)
    } else {
      wx.getSystemInfo({
        success: function (res) {
          that.globalData.systemInfo = res;
          typeof cb == "function" && cb(that.globalData.systemInfo)
        }
      })
    }
  },

  globalData: {
    systemInfo: null,
    isRequireLoad: false,
    //主域名
    HostURL: 'https://icepointcloud.com',
    //小程序id
    miniAppId: 'wxa1f8bf0da6acab35',
    //小程序名
    miniAppName: '姜玉坤眼镜服务'
  }  
})