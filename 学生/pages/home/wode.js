
const app = getApp();
const s = new app.Shuju();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{}
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
    let that = this;
    // 获取个人信息并写入
    s.si();
    s.g('c/user_detail',{
      s:function(d){
        if(d.code == 200){
          that.setData({
            info:d.data
          })
        }
      }
    })
  },

  
  _Exit:function(){
    app.tm('是否确认退出登录？',function(){
      wx.clearStorageSync();  // 清空本地存储的信息
      wx.reLaunch({
        url: '../index/check',
      })
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