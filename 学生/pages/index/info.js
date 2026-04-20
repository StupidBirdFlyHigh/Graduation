
const app = getApp();
const s = new app.Shuju();
var uid = app.uid();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
       name:'',
       phone:'',
       xuehao:""
    }
  },


  _Form:function(e){
    let info = this.data.info;
    info[e.target.dataset.name] = e.detail.value;
    this.setData({
      info:info
    })
  },

  _Queding:function(){
    let info = this.data.info;
    if(app.check(info)){
      s.si('id');
      s.sj(info);
      s.g('c/user_xiugai',{
        s:function(data){
          if(data.code == 200){
            app.ts('提交成功',function(){
              wx.navigateBack({
                delta: 0,
              })
            })
          }else{
            app.te('提交失败');
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
    let that = this;
    if(options.t && options.t == 'c'){
      s.si();
      s.g('c/user_detail',{
        s:function(data){
          if(data.code == 200){
			let info = data.data;
			delete info.wxid;
            that.setData({
              info
            })
          }
        }
      })
    }
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