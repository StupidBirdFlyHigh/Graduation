// app.js
var Genurl = "http://121.37.247.95/bs2024/0519/";
var Houduan = "php";
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },


  globalData: {
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  },
  baseimg:Genurl+'files/',
  upfilephp:Genurl+(Houduan == "php" ? 'php/c.php' : 'upload'),
  Shuju: function () {
    let that = this;
    let shuju = {};
    const get_ajax = function (api, callback) {
      let succ = callback['success'] || callback['s'];
      let err = callback['error'] || callback['e'];
      shuju.method = api.split('/')[1];
      console.log(shuju, api);
      wx.request({
        url: Genurl+(Houduan == 'php' ? (Houduan+'/') :'') + api.split('/')[0] + (Houduan == "php" ? '.php' : ''),
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        data: shuju,
        success: function (data) {
          shuju = {};
          succ(data.data);
        },
        error: function (e) {
          shuju = {};
          console.log(e);
          err(e)
        }
      })
    };

    return {
      getshuju: get_ajax,
      set: function (name, value) {
        shuju[name] = value;
      },
      setjson: function (json) {
        shuju = {...shuju,...json};
      },
      g: get_ajax,
      se: function (name, value) {
        shuju[name] = value;
      },
      sj: function (json) {
        shuju = {...shuju,...json};
      },
      sb: function (biao) {
        shuju['biao'] = biao
      },
      si: function (t) {
        shuju[t || 'id'] = wx.getStorageSync('id')
      }
    }

  },
  ts: function (text, call, time) {
    wx.showToast({
      title: text,
      duration: 2000
    })
    if (call) {
      setTimeout(() => {
        call();
      }, time || 1500);
    }
  },
  te: function (text, call, time) {
    wx.showToast({
      title: text,
      duration: 2000,
      icon: 'none'
    })
    if (call) {
      setTimeout(() => {
        call();
      }, time || 1500);
    }
  },
  tm: function (text, call) {
    wx.showModal({
      title: '提示',
      content: text,
      success(res) {
        if (res.confirm) {
          call();
        }
      }
    })
  },
  Day: function () {
    var getday = function (to, fs) {
      var cha;
      if (arguments.length >= 1) {
        cha = ~~to;
      } else {
        cha = 0;
      }

      if (arguments.length != 2) {
        fs = true;
      }

      var day1 = new Date();
      day1.setTime(day1.getTime() + 24 * 60 * 60 * 1000 * cha);
      var s1 = day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();

      if (fs == true) {
        var dd1 = s1.split('-');
        for (var i = 0; i < dd1.length; i++) {
          var obj = dd1[i];
          if (obj.length == 1) {
            obj = "0" + obj;
          }
          dd1[i] = obj;
        }
        s1 = dd1.join('-');
      }
      return s1;

    };

    var chaday = function (sDate1, sDate2) {
      var dateSpan,
          tempDate,
          iDays;
      if (arguments.length == 1) {
        sDate2 = getday();
      }
      sDate1 = Date.parse(sDate1);
      sDate2 = Date.parse(sDate2);
      dateSpan = sDate2 - sDate1;
      dateSpan = Math.abs(dateSpan);
      iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
      return iDays
    };

    var whichday = function (date, days) {
      var nd = new Date(date);
      nd = nd.valueOf();
      nd = nd + days * 24 * 60 * 60 * 1000;
      nd = new Date(nd);
      var y = nd.getFullYear();
      var m = nd.getMonth() + 1;
      var d = nd.getDate();
      if (m <= 9) m = "0" + m;
      if (d <= 9) d = "0" + d;
      var cdate = y + "-" + m + "-" + d;
      return cdate;
    };

    var benzhou = function (date) {
      var startday = whichday(date, (1 - inweek(date)));
      var endday = whichday(date, (7 - inweek(date)));
      return {
        "start": startday,
        "end": endday
      }
    };

    var gettime = function () {
      var date = new Date();
      var h = date.getHours(); //获取小时
      var m = date.getMinutes(); //获取分钟
      return h + ':' + m
    };

    var inweek = function (date) {
      var day = new Date(Date.parse(date.replace(/-/g, '/'))); //将日期值格式化
      var today = new Array("7", "1", "2", "3", "4", "5", "6");
      return today[day.getDay()]; //day.getDay();根据Date返一个星期中的某一天，其中0为星期日
    };

    return {
      get: getday,
      cha: chaday,
      which: whichday,
      week: inweek,
      benzhou: benzhou,
      gettime: gettime
    }
  },
  Suiji: function (min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
  },
  uid: function () {
    return wx.getStorageSync('id');
  },
  check: function (form) {
    for (let key in form) {
      console.log(key, form[key])
      if (form[key] === "" || form[key] == undefined || form[key] == null) {
        return false;
      }
    }
    return true;
  },
  time:function(){
    const now = new Date();  
    // 3小时等于3 * 60 * 60 * 1000毫秒  
    const threeHoursLater = new Date(now.getTime());  
    const hours = String(threeHoursLater.getHours()).padStart(2, '0');  
    const minutes = String(threeHoursLater.getMinutes()).padStart(2, '0');  
    return `${hours}:${minutes}`;  
  }
})