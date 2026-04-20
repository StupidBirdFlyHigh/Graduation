// pages/kecheng/detail.js
const app = getApp();
const s = new app.Shuju();
var kid = 0,
  lid = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseimg: app.baseimg,
    laoshi: {},
    qiandao: [],
    jilu:[]
  },

  _Getlaoshi: function () {
    return new Promise((succ, err) => {
      s.sb("laoshi");
      s.se("id", lid);
      s.g("c/common_detail", {
        s: (d) => {
          if (d.code == 200) {
            this.setData({
              laoshi: d.data
            })
            succ();
          }
        }
      })
    })
  },

  _Checkqiandao: function () {
    return new Promise((succ, err) => {
      s.se("time", app.time() + ":00");
      s.se("day", app.Day().get());
      s.g("p/checkallqiandao", {
        s: (d) => {
          succ();
        }
      })
    })
  },

  _Getqiandao: function () {
    return new Promise((succ, err) => {
      s.sb("qiandao");
      s.se("kid", kid);
      s.se("tj", "kid");
      s.g("c/common_list_status", {
        s: (d) => {
          if (d.code == 200) {
            this.setData({
              qiandao: d.data
            })
            succ();
          }
        }
      })
    })
  },

  _Dingwei: function () {
    let that = this;
    return new Promise((succ, err) => {
      wx.getLocation({
        isHighAccuracy: true,
        type: 'gcj02',
        success(res) {
          console.log(res)
          const latitude = res.latitude;
          const longitude = res.longitude;
          succ({
            lat: latitude,
            lon: longitude
          })
        },
        error: function (e) {
          console.log(e)
        }
      })
    })
  },

  _Getdidian: function (qid) {
    return new Promise((succ, err) => {
      s.sb("didian");
      s.se("tj", "qid");
      s.se("qid", qid);
      s.g("c/common_list", {
        s: (d) => {
          if (d.code == 200) {
            succ(d.data);
          }
        }
      })
    })
  },

  _Getjilu:function(){
    return new Promise((succ,err)=>{
      s.si("xid");
      s.sb("jilu");
      s.se("tj","xid");
      s.se("order","id");
      s.g("c/common_list",{
        s:(d)=>{
          if(d.code == 200){
            this.setData({
              jilu:d.data
            })
            succ();
          }
        }
      })
    })
  },

  _Qiandao: function (e) {
    let qid = e.currentTarget.dataset.for;
    let myloc = null;
    s.si("xid");
    s.se("qid", qid);
    s.se('tj', "xid,qid");
    s.sb("jilu");
    s.g("c/common_detail", {
      s: (d) => {
        if (d.code == 200) {
          app.te("你已签到");
        } else [
          this._Dingwei().then((d) => {
            myloc = d;
            this._Getdidian(qid).then((arr) => {
              for (let i = 0; i < arr.length; i++) {
                let o = arr[i];
                let ddloc = {
                  lat: o.lat,
                  lon: o.lng
                }
                let jl = getDistance(myloc, ddloc);
                console.log(`距离：${o.name}${jl}米`);
                if (o.juli >= jl) {
                  s.se("qid", qid);
                  s.si('xid');
                  s.sb("jilu");
                  s.g('c/info_charu', {
                    s: (d) => {
                      if (d.code == 200) {
                        app.ts('在' + o.name + "处签到");
                        this._Getjilu();
                      }
                    }
                  })
                  return;
                }
              }
              app.te("不符合距离要求");
            })
          })
        ]
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    kid = options.kid || 2;
    lid = options.lid || 1;
    this._Getlaoshi().then(() => {
      return this._Checkqiandao();
    }).then(() => {
      return this._Getqiandao();
    }).then(()=>{
      return this._Getjilu();
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})

function getDistance(coord1, coord2) {
  console.log(coord1,coord2)
  const R = 6371000; // 地球半径，单位：米  
  const dLat = deg2rad(coord2.lat - coord1.lat);
  const dLon = deg2rad(coord2.lon - coord1.lon);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(coord1.lat)) * Math.cos(deg2rad(coord2.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}