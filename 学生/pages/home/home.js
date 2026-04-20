const app = getApp();
const s = new app.Shuju();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseimg: app.baseimg,
    TabCur: 0,
    scrollLeft:0,
    choose:['我加入的课程','未加入课程'],
    list:[]
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    this._Getlist();
  },

  _Getlist:function(){
    return new Promise((succ,err)=>{
      s.si("xid");
      if(this.data.TabCur == 0){
        s.g("p/myjiaru",{
          s:(d)=>{
            if(d.code == 200){
              this.setData({
                list:d.data
              })
            }
          }
        })
      }else{
        s.g("p/weijiaru",{
          s:(d)=>{
            if(d.code == 200){
              this.setData({
                list:d.data
              })
            }
          }
        })
      }
    })
  },

  _Chakan:function(e){
    wx.navigateTo({
      url: '../kecheng/detail?kid='+e.currentTarget.dataset.for+"&lid="+e.currentTarget.dataset.lid,
    })
  },

  _Tuichu:function(e){
    let kid = e.currentTarget.dataset.for;
    app.tm("是否确认退出课程？",()=>{
      s.si("xid");
      s.se('kid',kid);
      s.g("p/tuichu",{
        s:(d)=>{
          if(d.code == 200){
            app.ts('已退出');
            this._Getlist();
          }else{
            app.te('退出失败');
          }
        }
      })
    })
  },

  _Jiaru:function(e){
    let id = e.currentTarget.dataset.for;
    app.tm("是否确认加入？",()=>{
      s.se("kid",id);
      s.si("xid");
      s.sb('xuanke');
      s.g("c/info_charu",{
        s:(d)=>{
          if(d.code == 200){
            app.ts('加入成功');
            this._Getlist();
          }else{
            app.te('加入失败');
          }
        }
      })
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._Getlist();
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