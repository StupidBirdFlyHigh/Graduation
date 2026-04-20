const app = getApp();
const s = new app.Shuju();
var uid = app.uid();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
      password:'',
      password2:''
    }
  },


  _Form:function(e){
    let info = this.data.info;
    info[e.target.dataset.name] = e.detail.value;
    this.setData({
      info:info
    })
  },

  _Xiugai:function(){
    let info = this.data.info;
    if(app.check(info)){
      if(info.password != info.password2){
        app.te('两次密码不一致');
        return;
      }
      s.se('id',uid);
      s.se('biao','user');
      s.se('password',info.password);
      s.g('c/info_xiugai',{
        s:function(data){
          if(data.code == 200){
            app.ts('修改成功',function(){
              wx.navigateBack({
                delta: 0,
              })
            })
          }else{
            app.te('修改错误');
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    uid = app.uid();
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
 