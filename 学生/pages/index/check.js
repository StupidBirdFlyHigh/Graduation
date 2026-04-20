// pages/index/check.js
const app = getApp();
const s = new app.Shuju();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let id = wx.getStorageSync('id');
    if (!id || id == "") {
      wx.navigateTo({
        url: 'login',
      })
    } else {
      s.se('id', id);
      s.g('c/user_detail', {
        s: (data)=>{
          if (data.code == 200) {
            let info = data.data;
            if (info.name == "" || info.name == null) {
              wx.navigateTo({
                url: 'info',
              })
            } else {
              wx.reLaunch({
                url: '../home/home',
              })
            }
          }
        }
      })
    }
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