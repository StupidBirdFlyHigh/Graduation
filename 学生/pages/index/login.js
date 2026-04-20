
const app = getApp();
const s = new app.Shuju();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
      username:'',
      password:''
    }
  },

  _Form:function(e){
    let i = this.data.info;
    i[e.target.dataset.name] = e.detail.value;
    this.setData({
      info:i
    })
  },

  _Login:function(){
    let info = this.data.info;
    if(app.check(info)){
      s.sj(info);		
      s.g('c/user_login_u',{
        s:function(data){
          console.log(data);
          if(data.code == 200){
            wx.setStorageSync('id', data.data.id);  //登录后保存到本地
            app.ts('登录成功',function(){
              wx.navigateBack({
                delta: 0,
              })
            })
          }else{
            app.te('账号或密码错误');
          }
        }
      })
    }else{
      app.te('请输入账号与密码');
    }
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