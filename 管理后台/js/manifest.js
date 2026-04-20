/**
 * 说明:
 * 1.依赖jquery库,主要是ajax这块,不过反正现在jquery是必须的基本上,也就无所谓了
 * 2.根据实际项目扩展模块
 * 3.我英语不好……所以大部分是拼音……
 * v4.6
 * 2.1更新了在gettext的函数里对单选的支持
 * 2.2更新了shuju里面不去set也行
 * 2.3更新了clearinput里,不清除radio和checkbox
 * 2.4更新了input里面的setinput
 * 2.5更新了setinput里面的setall
 * 2.6新增获取日期
 * 2.7新增了获取多选的功能
 * 2.8将日期那里分开,分成了获取日期和获取两个日期之间相差的天数
 * 2.9在input的setall里面更新了一下,万一这个input数量和内容对不上也不影响起他的运行,提高容错率
 * 3.0gettext里面加了一个month的type
 * 3.1Day里面更新了三个函数
 * 3.2新增了loading动画效果
 * 3.3修改了loading中获取屏幕高度宽度的方式
 * 3.4新增了选择的各种情况(Xuanze)近做了单选的生成和获取
 * 3.5在Xuanze中做了修改，防止bug出现
 * 3.6新增了一种快捷的本地数据存储和读取方法
 * 3.7更新了选择的写法,新增了垂直居中的方法
 * 3.8新增了左右移动切换屏幕和侧边栏展开的方法
 * 3.9给侧边栏加了一个收回的方法,让外面可以调用
 * 4.0调整了侧边栏中灰色阴影出现和消失的时间
 * 4.1屏幕移动加入了回调
 * 4.2修复了Xuanze中新增时的bug
 * 4.3Xuanze中,设置好选择就有回调事件
 * 4.4Day中更新了获取当前时间
 * 4.5新增了一种比较丝滑的屏幕移动方式
 * 4.6把侧边栏的动画改成了css的,还加入了Toast
 * 4.7pingmu2新增了一个返回上一页的方法,也就是说返回的时候可以不指定页面
 * 4.8Data里面,get加了一个try因为有时候会返回null造成错误,另外个人建议Toast可以拿出来单独用
 * 4.9加了一个Biaodan功能,严格来说还没有测试过嘿嘿嘿,再加了一个map转json的
 * 5.0新增:input中,checkinput时对radio和checkbox的检查,以及如果有没有填写的,就把那个name存到sessionstorage里
 *    修改:input中,gettext时对于多选的内容获取,改成了数组形式而不是之前的只知道有没有选
 * 5.1Input的setinput中,增加了对于单选和多选的支持
 * 5.2Biaodan里加上对于提交按钮,能否禁用的选项
 * 5.3Biaodan里加上了清除的方法,并且修了bug
 * 5.4Shuju这里,在new的时候,就带上url,getshuju的时候只是加上api接口,比如var shuju=new ZY.Shuju('http://xxxxx');
 *    修改了bug,shuju这里用json了替代string拼接
 * 5.5表单这里，新增了提交时通过一个function动态获取数据的方法
 * 5.6新增了一个Dashuju的函数，听上去很高大上对不对，实际上就是获取大批量数据的时候做分页的，想不到吧哈哈哈
 * 5.7Dashuju里加入了进度
 * 5.8Dashuju弄了个2，去掉了本地，然后是每一步都给前面返回一下，而不是最后一次性返回
 * 5.9加了Fenye函数
 * 6.0修复了biaodan在自由调用的时候，找不到按钮，报错的bug
 * 6.1给Dashuju2加了一个结束的操作，json.end()
 * 6.2给input加了一个getshuru的方法，用来获取元素
 * 6.3加入Zishiying，用来自适应屏幕
 * 6.4加入Xunhuan，用来循环处理一件事情
 * 6.5修复了Xunhuan重的bug
 * 6.6修复了input.setall的时候，如果单选框，给的值是数字的话，没办法判断indexOf导致报错的bug
 * 6.7修复了input.setall的时候，如果单选框，给的值是数字且等于0，会被当作false处理的bug
 * 6.8修复了ipt中，getshuju的时候会把select漏掉的问题
 * 6.9针对微信h5情况下，微信会对rem因为设置字体大小导致的不支持，加了一段代码，要用的时候取消注释即可
 * 7.0在setinput的时候考虑了select的感受
 * 7.1修改了setall里面关于select的部分
 * 7.2input中checkinput，只check有name的对象
 * 7.3input中checkinput，如果input的data-checktj中规定的值符合要求，才检查，例如type=1，那么当name为type的表单值为1时才检查
 * 7.4新增了Url这个方法，用来获取url传参的参数，使用方法就是url.get('name')
 * 7.5shuju中，与公司化代码接轨，以后可以无缝衔接，所以method融入到API中
 * 7.6增加了picker的部分
 * 7.7修改了Tu的函数，真正实现异步加载
 * 7.8修复了clearinput中。。。拼写错误
 * 7.9shuju中加入了shuju.setjson，把json数据直接录入
 * 8.0首先是shuju加了一个s简写，然后对setjson用了新的写法，同时修改了input里type的问题，并加入了基于sweetalert的调用函数和常规设置代码
 * 8.1做的日历组件，但是日历组件的话，因为我觉得没法子搞通用的，所以就是注释掉了先，到时候开启就可以了，对于每个格子具体点击啊啥的要单独处理
 */



//6.9更新用
//
//
//(function() {
//
//    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
//        handleFontSize();
//    } else {
//        if (document.addEventListener) {
//            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
//        } else if (document.attachEvent) {
//            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
//            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
//    }
//    function handleFontSize() {
//        // 设置网页字体为默认大小
//        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
//        // 重写设置网页字体大小的事件
//        WeixinJSBridge.on('menu:setfont', function() {
//            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
//        });
//    }
//})();




(function() {

    if(!window.ZY) {
        window.ZY = {};
    }

    window.ZY = {

        /**
         *
         * @returns {{getshuju: get_ajax, set: set}}
         * @constructor
         * 说明:
         * 用来从后台查询数据哒
         * 1.方式是写死的POST
         * 2.url是项目根目录的url,这个可以自己改的
         * 3.标准写法是:
         * shuju.set('变量名',变量);
         * shuju.set....
         * shuju.getshuju(url,{
		 *    success:function(data){
		 *
		 *    },
		 *    error:function(e){
		 *
		 *
		 *    }
		 *  });
         */
        Shuju: function(url) {
            var shuju={};
            var get_ajax = function(api, callback) {
                console.log(shuju, api);
                var succ = callback['success'] || callback['s'];
                var err = callback['error'] || callback['e'];
                shuju['method']=api.split('/')[1];
                $.ajax({
                    type: 'POST',
                    //url是项目根目录的url
                    url: houduan == "php" ? (url+'/'+(api.split('/')[0])+'.php') : (url+(api.split('/')[0])),
                    //url: url+'/'+api,
                    async: true,
                    data: houduan == "php" ? shuju : JSON.stringify(shuju),
                    contentType: 'application/'+(houduan == "php" ? "x-www-form-urlencoded" : "json"),
                    dataType: 'json',
                    timeout: 5000,
                    beforeSend: function(xhr) {

                    },
                    success: function(data, textStatus, jqXHR) {
                        console.log(data);
                        shuju={};
                        if(houduan == "php"){
                            succ(data);
                        }else{
                            succ(data);
                        }
                        //sessionStorage.removeItem('ssssss');
                    },
                    error: function(xhr, textStatus) {
                        shuju={};
                        err(textStatus)
                    },
                    complete: function(XMLHttpRequest, status) {
                        if(status == 'timeout') {
                            err("超时")
                        }

                    }
                })

            };

            return {
                getshuju: get_ajax,
                set: function(name, value) {
                    shuju[name]=value;
                },
                setjson:function(json){
                    shuju = {...shuju,...json};
                },
                g: get_ajax,
                se: function(name, value) {
                    shuju[name]=value;
                },
                sj:function(json){
                    shuju = {...shuju,...json};
                },
                si:function(key){
                    if(key){
                        shuju[key] = mydata.get('id');
                    }else{
                        shuju['id'] = mydata.get('id');
                    }
                },
                sb:function(name){
                    shuju['biao'] = name;
                }

            }

        },



        /**
         *
         * @returns {{checkinput: checkinput, gettext: getinput, danxuan: getradio, setradio: setradio}}
         * @constructor
         * 说明:
         * 主要用来输入框方面的,包括输入内容和单选多选
         *
         * checkinput:
         * 说明:
         * 1.用来看到底哪个输入框没有输入
         * 2.标准写法是:
         * checkinput(array,start,end)
         * 参数说明:array是input的数组(中间可以包括单选,多选等),start是从哪个开始,end是到几结束
         * start和end可以不传,不传就默认全部
         * 返回值:true或false,true表示全部输入了,如果是false,会onfocus到那个没有输入的部分
         *
         * getinput
         * 说明:
         * 1.用来获取输入框的值
         * 2.标准写法是:
         * var  xxx=gettext(array,start,end)
         * 参数说明:array是input的数组(中间可以包括多行输入),start是从哪个开始,end是到几结束
         * start和end可以不传,不传就默认全部
         * 返回的值是一个map,所以每个input都必须有一个name属性,通过xxx.get(name)来获取这个input的值
         * 当然建议是和checkinput一起用,先check再get
         *
         * danxuan
         * 说明:
         * 1.用来获取到底哪个单选框被选中了
         * 2.标准写法是:
         * var xxx=danxuan(array,start,end)
         * 参数说明:array是input的数组(中间可以包括多行输入等,反正只看单选框),start是从哪个开始,end是到几结束
         * start和end可以不传,不传就默认全部
         * 返回的值是一个map,获取的时候是var xx=xxx.get(name),name是这一组单选的name
         *
         * setradio
         * 说明:
         * 1.用来给几个符合要求的单选框增加选中的事件
         * 2.标准写法是:
         * setradio(array,value,start,end)
         * 参数说明:array是input的数组(中间可以包括多行输入等,反正只看单选框),value是需要判断的值,start是从哪个开始,end是到几结束
         * start和end可以不传,不传就默认全部
         *
         * clearinput
         * 说明:
         * 1.用来清除固定的输入框中的数据,就是清空操作
         * clearinput(array,start,end)
         * 参数说明:array是input的数组,start是从哪个开始,end是到几结束
         * start和end可以不传,不传就默认全部
         *
         * setinput
         * 说明
         * 1.给input中添加信息
         * setinput(array,method)
         * 参数说明:array是input的数组,method是通过什么获取这个input
         * method默认是name,可以用id
         * setinput.set(where,text,meth)
         * where就是写name或者id,text就是内容,meth可以写,name或id,保证灵活
         * setinput.setall(text,type)
         * 这个是用来给一堆input一起输入信息的
         * text是数据,数据可以是map或者json格式,默认map,type不输入就是map
         */
        Input: function() {

            //array是传进来的数组,start表示从几开始,end表示到几结束,如果后面两个没有,默认全部
            const checkinput = function(arrayold, start, end) {

                var array = [];
                var startnum = start;
                var endnum = end;
                if(arguments.length == 1) {
                    startnum = 0;
                    endnum = arrayold.length - 1;
                    if(arrayold.length == undefined) {
                        array.push(arrayold);
                        endnum = 0;
                    } else {
                        array = arrayold;
                    }
                } else {
                    array = arrayold;
                }

                var radiojson={};
                for(let i = startnum; i <= endnum; i++) {
                    let dx = array[i];
                    if(dx.getAttribute('name')==null)continue;
                    let t = false;
                    if(dx.dataset.checktj && dx.dataset.checktj!=""){
                        t = true;
                        let tj = dx.dataset.checktj.split('=')[0];
                        let zhi = dx.dataset.checktj.split('=')[1];
                        for(let a=0;a<array.length;a++){
                            if(array[a].name==tj && array[a].value == zhi){
                                t = false;
                                break;
                            }
                        }
                    }

                    if(t)continue;
                    if(dx.tagName == 'TEXTAREA') {
                        let object = dx;
                        if(object.value == "") {
                            object.focus();
                            sessionStorage.setItem('input_none',object.name);
                            return false;
                        }
                    } else {
                        let type = dx.type;
                        if(type=="radio" || type=='checkbox'){
                            radiojson[dx.name]=(radiojson[dx.name]==true?true:dx.checked);
                        }else{
                            if(dx.value == "") {
                                dx.focus();
                                sessionStorage.setItem('input_none',dx.name);
                                return false;
                            }

                        }
                    }
                }


                if(JSON.stringify(radiojson).indexOf(':false')>=0){
                    for(let a in radiojson){
                        if(!radiojson[a]){
                            sessionStorage.setItem('input_none',a);
                            return false;
                        }
                    }
                }


                return true;
            };

            const getinput = function(array, start, end) {
                var startnum = start;
                var endnum = end;
                if(arguments.length == 1) {
                    startnum = 0;
                    endnum = array.length - 1;
                }

                var m = new Map;
                for(let i = startnum; i <= endnum; i++) {

                    var type = array[i].type;
                    var obj=array[i];
                    if(obj.tagName == 'INPUT') {
                        if(type == "checkbox") {
                            if(obj.checked){
                                var sj= m.get(obj.name);
                                if(sj){
                                    sj.push(obj.value);
                                    m.set(obj.name, sj);
                                }else{
                                    m.set(obj.name,[obj.value]);
                                }
                            }
                        }else if(type == "radio") {
                            if(obj.checked) {
                                m.set(obj.name, obj.value);
                            }
                        }else{
                            m.set(obj.name, obj.value);
                        }

                    }

                    if(obj.tagName == 'TEXTAREA') {
                        m.set(obj.name, obj.value);
                    }

                    if(obj.tagName == 'SELECT'){
                        m.set(obj.name,obj.value);
                    }

                }

                return m;
            };

            const getradio = function(array, start, end) {
                let startnum = start;
                let endnum = end;
                if(arguments.length == 1) {
                    startnum = 0;
                    endnum = array.length - 1;
                }

                let text = new Map;
                for(let i = startnum; i <= endnum; i++) {
                    var type = array[i].type;
                    if(type == "radio") {
                        if(array[i].checked) {
                            text.set(array[i].name, array[i].value);
                        }
                    }
                }

                return text;
            };

            const getcheckbox = function(array, start, end) {
                let startnum = start;
                let endnum = end;
                if(arguments.length == 1) {
                    startnum = 0;
                    endnum = array.length - 1;
                }

                let text = [];
                for(let i = startnum; i <= endnum; i++) {
                    var type = array[i].type;
                    if(type == "checkbox") {
                        if(array[i].checked) {
                            text.push(array[i].value);
                        }
                    }
                }

                return text;
            };

            const setradio = function(array, value, start, end) {
                var startnum = start;
                var endnum = end;
                if(arguments.length == 2) {
                    startnum = 0;
                    endnum = array.length - 1;
                }

                for(let i = startnum; i <= endnum; i++) {
                    var type = array[i].type;
                    if(type == "radio") {
                        if(array[i].value == value) {
                            array[i].checked = true;
                            return;
                        }
                    }
                }
            };

            const clearinput = function(array, start, end) {

                var startnum = start;
                var endnum = end;
                if(arguments.length == 1) {
                    startnum = 0;
                    endnum = array.length - 1;
                }

                for(let i = startnum; i <= endnum; i++) {
                    if(array[i].type != "radio" && array[i].type != "checkbox") {
                        array[i].value = "";
                    }else{
                        array[i].checked = false;
                    }
                }
            };

            const setinput = function(array, method) {

                var meth;
                if(arguments.length == 2) {
                    meth = method;
                } else {
                    meth = 'name';
                }

                var settext = function(where, text, me) {

                    if(arguments.length == 3) {
                        meth = me;
                    }

                    if(!text) {
                        console.log("err! text:" + text + "from:" + where);
                        return
                    }
                    if(meth == "id") {
                        document.getElementById(where).value = text;
                    }

                    if(meth == "name") {
                        for(var i = 0; i < array.length; i++) {
                            if(array[i].name == where) {
                                array[i].value = text;
                                break;
                            }
                        }
                    }
                };

                var setall = function(text, t) {
                    let type = arguments.length==2?t:'map';
                    let obj ;
                    let from;
                    let nr;
                    if(type == "map") {
                        for(let i = 0; i < array.length; i++) {
                            obj = array[i];
                            if(obj != null && obj.type != 'checkbox' && obj.type != "radio") {
                                if(meth == "name") {
                                    from = obj.name;
                                }
                                if(meth == "id") {
                                    from = obj.id;
                                }
                                nr = text.get(from);
                                if(obj.tagName=='SELECT') {
                                    obj.value = nr;
                                    let option = obj.querySelectorAll('option');
                                    for (let a = 0; a < option.length; a++) {
                                        option[a].setAttribute('selected', option[a].value == nr ? 'selected' : '');
                                    }
                                    continue;
                                }
                                if(nr) {
                                    obj.value = nr;
                                } else {
                                    console.log("err! text:" + nr + "from:" + from);
                                }
                            } else {
                                nr=text.get(from);
                                if(nr && (nr==obj.value || nr.indexOf(obj.value)>=0)) {
                                    obj.checked=true;
                                }
                            }
                        }
                    }

                    if(type == "json") {
                        for(let i = 0; i < array.length; i++) {
                            obj = array[i];
                            if(meth == "name") {
                                from = obj.name;
                            }
                            if(meth == "id") {
                                from = obj.id;
                            }
                            nr=text[from];
                            if(obj.tagName=='SELECT') {
                                obj.value = nr;
                                let option = obj.querySelectorAll('option');
                                for (let a = 0; a < option.length; a++) {
                                    if(option[a].value == nr){
                                        option[a].setAttribute('selected','');
                                    }
                                }
                                continue;
                            }
                            if(obj != null && obj.type != 'checkbox' && obj.type != "radio") {
                                if(nr) {
                                    obj.value = nr;
                                } else {
                                    console.log("err! text:" + nr + "from:" + from);
                                }
                            } else
                            {
                                if(nr!=undefined && nr!=null && (nr==obj.value || (""+nr).indexOf(obj.value)>=0)) {
                                    obj.checked=true;
                                }
                            }
                        }
                    }
                };

                return {
                    set: settext,
                    setall: setall
                }

            };


            const getshuru = function(id,array){
                let div = document.getElementById(id);
                let arr = [];
                array = array=='all'?['input','select','textarea']:array;
                for(let i=0;i<array.length;i++){
                    let type = array[i];
                    if(type!='input' && type!="select" && type!='textarea')continue;
                    let ele = div.getElementsByTagName(type);
                    for(let n=0;n<ele.length;n++){
                        arr.push(ele[n]);
                    }
                }
                return arr;
            };


            return {
                checkinput: checkinput,
                gettext: getinput,
                danxuan: getradio,
                duoxuan: getcheckbox,
                setradio: setradio,
                clearinput: clearinput,
                setinput: setinput,
                getshuru:getshuru
            }

        },

        /**
         *
         * @returns {*}
         * @constructor
         * Shuzu说明
         * 1.用来把一堆object啊,单元素啊,array啊,统统拼接成一个数组,当然这个数组最后的形式只能是一堆元素的集合
         * 2.标准写法是:
         * var xxx=Shuzu(xxx,array,xxx,xxx)之类的,数量没限制,只要求必须是元素
         * 返回的是一个数组
         */
        Shuzu: function() {

            var length = arguments.length;
            if(length == 0) {
                return false;
            }
            var array = [];
            for(var i = 0; i < arguments.length; i++) {
                var object = arguments[i];
                if(Object.prototype.toString.call(object) == "[object HTMLCollection]" || Object.prototype.toString.call(object) == "[object Array]") {
                    for(var a = 0; a < object.length; a++) {
                        array.push(object[a]);
                    }
                } else {
                    array.push(object);
                }
            }

            return array;
        },

        /**
         *
         * @returns {{yujiazai: yujiazai, jiazai: jiazai}}
         * @constructor
         * yujiazai
         * 说明:
         * 1.图片预加载
         * 2.标准写法是:
         * yujiazai(src,id)
         * 参数说明:
         * src是图片链接
         * id是img的id
         * 这两个要么同时是array,要么是单一的,但是要求必须对应
         */
        Tu: function() {
            let s = true;
            let len = 0;
            let nownum = 0;
            let arrsrc = [];
            let arrid = [];
            let yujiazai = function(src, id) {
                s = true;
                let type = Object.prototype.toString.call(src);
                if(type == "[object Array]") {
                    arrsrc = src;
                    arrid = id;
                    len = arrsrc.length;
                    nownum = 0;
                    this.jiazai(arrsrc[0],arrid[0]);
                } else {
                    this.jiazai(src, id);
                }

            };

            let jiazai = function(src, id) {
                if(!s)return;
                let img = new Image();
                img.src = src;

                let that = this;
                if(img.complete) {
                    document.getElementById(id).src = src;
                    nownum ++;
                    if(nownum < len){
                        that.jiazai(arrsrc[nownum],arrid[nownum]);
                    }
                }else{
                    img.onload = function() {
                        document.getElementById(id).src = src;
                        nownum ++;
                        if(nownum < len){
                            that.jiazai(arrsrc[nownum],arrid[nownum]);
                        }
                    };
                }



            };

            let stop = function(){
                s = false;
                len = 0;
                nownum = 0;
                arrsrc = [];
                arrid = [];
            };

            return {
                yujiazai: yujiazai,
                jiazai: jiazai,
                stop:stop
            }
        },

        /**
         *
         * @param phone
         * @returns {boolean}
         * 说明:
         * 1.用来检查手机号的,包括位数和一些数字格式
         * 2.标准写法是:
         * checkPhone(phone)
         * 返回true或者false
         */
        checkPhone: function(phone) {

            var phoneVal = phone,
                myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;

            if(phoneVal == '') {
                return false;
            } else if(phoneVal.length != 11) {
                return false;
            } else if(!myreg.test(phoneVal)) {
                return false;
            }

            return true;
        },

        /**
         *
         * @returns {{tocolorgb: tocolorgb, tocolor16: tocolor16}}
         * @constructor
         */
        Yanse: function() {

            var tocolorgb = function(color) {
                var rgb = [0, 0, 0];
                if(/#(..)(..)(..)/g.test(color)) {
                    rgb = [~~(RegExp.$1, 16), ~~(RegExp.$2, 16), ~~(RegExp.$3, 16)];
                }
                return "rgb(" + rgb.join(",") + ")";
            };

            var tocolor16 = function(color) {
                var rgb = color.split(',');
                var r = ~~(rgb[0].split('(')[1]);
                var g = ~~(rgb[1]);
                var b = ~~(rgb[2].split(')')[0]);

                var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                return hex;
            };

            return {
                tocolorgb: tocolorgb,
                tocolor16: tocolor16
            }
        },

        /**
         *
         * @constructor
         * 随机数
         */
        Suiji: function(min, max) {

            return ~~(Math.random() * (max - min + 1) + min);
        },

        /**
         *
         * @returns {{bangding: bangding, yichu: yichu}}
         * @constructor
         * 拖拽控件
         */
        Tuozhuai: function() {

            var bangding = function(obj, callback) {
                var div1 = obj;
                obj.style.position = "absolute";
                obj.onmousedown = function(ev) {
                    console.log(ev);

                    //if(obj.getAttribute('data-move')=='true') {
                    var oevent = ev || event;

                    var distanceX = oevent.clientX - div1.offsetLeft;
                    var distanceY = oevent.clientY - div1.offsetTop;

                    document.onmousemove = function(ev) {
                        var oevent = ev || event;
                        div1.style.left = oevent.clientX - distanceX + 'px';
                        div1.style.top = oevent.clientY - distanceY + 'px';
                        if(callback) {
                            callback(oevent.clientX - distanceX, oevent.clientY - distanceY);
                        }
                        obj.setAttribute('data_click', 'false');

                    };
                    document.onmouseup = function() {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };

                    document.onmouseout = function() {
                        obj.setAttribute('data_click', 'true');

                    };
                    //}
                };
            };

            var yichu = function(obj) {

                obj.onmousedown = function(ev) {

                }

            };

            return {
                bangding: bangding,
                yichu: yichu
            }

        },

        /**
         *
         * @param array
         * @param tiaojian
         * @returns {*}
         * @constructor
         * 用来检查某个数组中哪些元素符合条件
         * 比如一堆span标签哪个颜色是蓝色这样子
         * tiaojian的对象名统一obj,方便多条件
         * 举例
         * (array,"obj.style.backgroundColor=='white'")
         * 如果是直接返回某个值,例如背景是白色的span的文字内容
         * {array,"obj.style.backgroundColor=='white'","obj.innerHTML")
		 */

        Checkarray: function(array, tiaojian, xvyao) {
            var html = [],
                oldarray = array;
            try {
                for(var i = 0; i < oldarray.length; i++) {

                    var obj = oldarray[i];

                    if(arguments.length == 2) {
                        eval("if(" + tiaojian + "){" +
                            "html.push(obj)" +
                            "}")
                    }

                    if(arguments.length == 3) {
                        eval("if(" + tiaojian + "){" +
                            "html.push(" + xvyao + ")" +
                            "}")
                    }
                }
            } catch(e) {
                console.log('条件有错');
                return false
            }

            return html;

        },

        /**
         *
         * @param to
         * @param fs
         * @returns {string}
         * @constructor
         * Day用来获取日期相关数据
         * 1.get(to,fs)
         * to表示和今天差几天,不传默认是0,0表示今天
         * 当fs为true的时候,那么类似于2018-3-2的日期会变成2018-03-02
         * 默认是true
         * 2.cha(day1,day2)
         * day1和day2是2006-12-18格式
         * 如果只传一个值的话默认是这个日期与今天的相差天数
         * 3.whichday(date,days)
         * 这个是比如今天date是9月1号,days指几天以后,比如3天以后,返回的就是9月4号,如果days是负值,就是往前数
         * 4.benzhou(date)
         * 这个是用来说,比如今天是9月1号,那么这一周的周一和周日是几号
         * 5.inweek(date)
         * 这个是用来告诉你今天是星期几的,返回的是数字
         */
        Day: function() {

            var getday = function(to, fs) {
                var cha;
                if(arguments.length >= 1) {
                    cha = ~~to;
                } else {
                    cha = 0;
                }

                if(arguments.length != 2) {
                    fs = true;
                }

                var day1 = new Date();
                day1.setTime(day1.getTime() + 24 * 60 * 60 * 1000 * cha);
                var s1 = day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();

                if(fs == true) {
                    var dd1 = s1.split('-');
                    for(var i = 0; i < dd1.length; i++) {
                        var obj = dd1[i];
                        if(obj.length == 1) {
                            obj = "0" + obj;
                        }
                        dd1[i] = obj;
                    }
                    s1 = dd1.join('-');
                }
                return s1;

            };

            var chaday = function(sDate1, sDate2) {
                var dateSpan,
                    tempDate,
                    iDays;
                if(arguments.length == 1) {
                    sDate2 = getday();
                }
                sDate1 = Date.parse(sDate1);
                sDate2 = Date.parse(sDate2);
                dateSpan = sDate2 - sDate1;
                dateSpan = Math.abs(dateSpan);
                iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
                return iDays
            };

            var whichday = function(date, days) {
                var nd = new Date(date);
                nd = nd.valueOf();
                nd = nd + days * 24 * 60 * 60 * 1000;
                nd = new Date(nd);
                var y = nd.getFullYear();
                var m = nd.getMonth() + 1;
                var d = nd.getDate();
                if(m <= 9) m = "0" + m;
                if(d <= 9) d = "0" + d;
                var cdate = y + "-" + m + "-" + d;
                return cdate;
            };

            var benzhou = function(date) {
                var startday = whichday(date, (1 - inweek(date)));
                var endday = whichday(date, (7 - inweek(date)));
                return {
                    "start": startday,
                    "end": endday
                }
            };

            var gettime=function(){
                var date = new Date();
                var h = date.getHours(); //获取小时
                var m = date.getMinutes(); //获取分钟
                return h+':'+m
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
                gettime:gettime
            }
        },

        /**
         * @returns {{set: setshuzhi, start: start, end: end}}
         * @constructor
         * 这个是用来显示加载中的动画的
         * var loading =new ZY.Loading();
         * 然后去set,
         * loading.set({
		 *  这里面set数值(具体哪些数值可以set看setshuzhi函数)
		 *  img_src是必须要的,其他都是非必需的,可以直接set一个start:true来启动,也可以loading.start()来启动
		 * })
         */
        Loading: function() {

            var xishu = 0.15;
            var img_src = "";
            var height = 0.15 * document.documentElement.clientWidth;
            var top = (document.documentElement.clientHeight - 0.15 * document.documentElement.clientWidth) / 2;
            var imgheight = "30%";
            var imgwidth = "80%";
            var imgleft = "10%";
            var div_back = true;

            var setshuzhi = function(value) {

                if(value.div_width) {
                    xishu = value.div_width;
                    height = xishu * document.documentElement.clientWidth;
                    top = (document.documentElement.clientHeight - xishu * document.documentElement.clientWidth) / 2;
                }

                if(!value.back && value.back == false) {
                    div_back = value.back;
                }

                if(value.img_src) {
                    img_src = value.img_src;
                }

                if(value.img_height) {
                    imgheight = (value.img_height * 100) + "%";
                }

                if(value.img_width) {
                    imgwidth = (value.img_width * 100) + "%";
                    imgleft = (((1 - value.img_width) * 100) / 2) + "%";
                }

                if(value.start && value.start == true) {
                    start();
                }

            };

            var start = function() {
                //console.log('loading start');
                var loading = document.getElementById('loadingdiv');
                if(loading) {
                    //如果已经有了,为了防止重复,先删掉
                    document.body.removeChild(loading);
                }

                //先创建背景div

                var back_div = document.createElement('div');
                back_div.style.position = 'fixed';
                back_div.style.width = height + 'px';
                back_div.style.height = height + 'px';
                back_div.style.left = (document.documentElement.clientWidth - height) / 2 + 'px';
                back_div.style.top = top + 'px';
                if(div_back == true) {
                    back_div.style.backgroundColor = "rgba(0,0,0,0.5)";
                }
                back_div.style.zIndex = '9999';
                back_div.style.display = 'flex';
                back_div.style.justifyContent = "center";
                back_div.style.flexDirection = "column";
                back_div.id = 'loadingdiv';
                document.body.appendChild(back_div);

                var loading_img = document.createElement('img');
                loading_img.src = img_src;
                loading_img.style.width = imgwidth;
                loading_img.style.marginLeft = imgleft;
                loading_img.style.height = imgheight;
                document.getElementById('loadingdiv').appendChild(loading_img);

            };

            var end = function() {
                //console.log('loading end');
                var loading = document.getElementById('loadingdiv');
                if(loading) {
                    //如果已经有了,为了防止重复,先删掉
                    document.body.removeChild(loading);
                }
            };

            return {
                set: setshuzhi,
                start: start,
                end: end
            }
        },

        /**
         *
         * @returns {{set: setxuanze, get: getxuanze}}
         * @constructor
         * 这个是用来比如几个选项切换的时候用的
         * set是输入,get是获取,实时获取的话就是在set里面设置callback
         * 我不想这里按照正常的去设置回调函数,因为我觉得这个没必要,代码不会放在一起
         * 不会又要生成html同时有去对后续的进行处理
         * set传的是一个数组,其中,在哪里生成的id,生成元素的类型(可选A和BUTTON),选择和未被点击时的class,有哪些选项
         * 以上是必须的
         * 默认哪个是被选中的,特殊的style(也可以在class里指定)和点击以后的事件是非必需的
         * get传的是id和元素的类型
         * 2018.9.28先做单选的,多选的情况以后用到了再做
         * call是回调
         * 范例格式:
         *  var xuanze = new ZY.Xuanze();
         xuanze.set({
        'ele': 'xuanxiang',  //对应的id
        'type': 'button',
        'choose': 'btn btn-large btn-success', //选中的class
        'unchoose': 'btn btn-large btn-danger', //未选中的class
        'content': ['基础参数设置', '商品管理', '物流信息', '支付记录'],
        'moren': '商品管理',
        'callback': function(i){
        //回调事件
            document.getElementById(nowchoose).style.display = 'none';
            document.getElementById(i).style.display = 'block';
            nowchoose = i;
        },

        'style': 'margin-right:20px',
        'value': ['jichu', 'shangpin', 'wuliu', 'zhifu']
    });

         */
        Xuanze: function() {
            var setxuanze = function(data) {
                //必选项
                var ele = data.ele,
                    type = data.type,
                    chooseclass = data.choose,
                    unchooseclass = data.unchoose,
                    content = data.content;

                //非必需
                var moren = data.moren;
                var elestyle = "";
                var value=data.content;
                if(data.style) {
                    elestyle = data.style;
                }
                if(data.value){
                    value=data.value;
                }

                var html = [];
                var nowchoose = "";
                for(var i = 0; i < content.length; i++) {
                    if(moren && moren == content[i]) {
                        nowchoose = moren;
                        html.push("<" + type + " data-type='choose' data-for='"+value[i]+"' class='" + chooseclass + "' style='" + elestyle + "'>" + content[i] + "</" + type + ">");
                        continue
                    }
                    html.push("<" + type + " data-type='unchoose'  data-for='"+value[i]+"'  class='" + unchooseclass + "' style='" + elestyle + "'>" + content[i] + "</" + type + ">")
                }

                if (data.callback) {
                    var call = data.callback;
                    call(value[content.indexOf(moren)]);
                }

                var element = document.getElementById(ele);
                element.innerHTML = html.join('');

                var chooseele = [];
                chooseele = element.getElementsByTagName(type);

                for (var i = 0; i < chooseele.length; i++) {
                    chooseele[i].onclick = function () {
                        var obj = this;
                        if (obj.getAttribute('data-type') == 'unchoose') {
                            if (nowchoose != "") {
                                try {
                                    chooseele[content.indexOf(nowchoose)].setAttribute('data-type', 'unchoose');
                                    chooseele[content.indexOf(nowchoose)].setAttribute('class', unchooseclass);
                                } catch (e) {
                                    for (var n = 0; n < chooseele.length; n++) {
                                        chooseele[n].setAttribute('data-type', 'unchoose');
                                        chooseele[n].setAttribute('class', unchooseclass);
                                    }

                                }
                            }

                            obj.setAttribute('data-type', 'choose');
                            obj.setAttribute('class', chooseclass);
                            nowchoose = obj.innerHTML;

                            if (data.callback) {
                                var call = data.callback;
                                call(obj.getAttribute('data-for'))
                            }
                        }
                    }
                }
            };

            var getxuanze = function(ele, type) {
                var element = document.getElementById(ele).getElementsByTagName(type);
                for(var i = 0; i < element.length; i++) {
                    if(element[i].getAttribute('data-type') == 'choose') {
                        return element[i].innerHTML;
                    }
                }
                return null;
            };

            return {
                set: setxuanze,
                get: getxuanze
            }
        },


        /**
         *
         * @returns {{set: setdata, set2: setdata2, version: version, get: getdata, getall: getall}}
         * @constructor
         */

        Data: function(){

            var setdata=function(key,data){
                localStorage.setItem(key,(typeof data=='string')?data:JSON.stringify(data));

                var s=localStorage.getItem('mydata');
                if(!s || s==""){
                    s={
                        version:'1.0'
                    }
                }

                //console.log(key,data)
                s=(typeof s=='string')?JSON.parse(s):s;
                var json=data;
                if(typeof data=='string' ||Array.isArray(data) || typeof data=='number'){
                    json={

                    };
                    //(arguments.length==3)?json[name]=data:json[key]=data;
                    json[key]=data;
                }

                for(var i in json){
                    s[i] = json[i];
                }

                //console.log(s)

                localStorage.setItem('mydata',JSON.stringify(s));
            };

            var version=function(data){
                setdata('version',data);
            };


            var setdata2=function(key1,key2,data){
                var s=JSON.parse(localStorage.getItem('mydata'));
                s[key1][key2]=data;
                localStorage.setItem('mydata',JSON.stringify(s));
            };

            var getdata=function(key,name){
                var s;
                try {
                    s = (arguments.length == 2) ? JSON.parse(localStorage.getItem('mydata'))[key][name] : JSON.parse(localStorage.getItem('mydata'))[key];
                }catch(e){
                    s=null;
                }
                return s;
            };


            var getall=function(){
                return JSON.parse(localStorage.getItem('mydata'));
            };

            //var getdata


            return{
                set:setdata,
                set2:setdata2,
                version:version,
                get:getdata,
                getall:getall
            }
        },


        /**
         *
         * @param doc1
         * @param doc2
         * @constructor
         * 传入两个元素
         * 元素1在元素2中,相对于元素2垂直居中
         */
        Juzhong: function(doc1,doc2){
            var ele1,ele2;
            ele1=doc1;
            if(arguments.length==1){
                ele2=ele1.parentElement;
            }else{
                ele2=doc2;
            }
            var height1=ele1.offsetHeight,
                height2=ele2.offsetHeight;
            var cha=(height2-height1)/2;
            ele1.style.marginTop=cha+'px';
        },

        /**
         *
         * @param json
         * @returns {{bangding: bangding, yidong: yidong, biansu: biansu}}
         * @constructor
         * 写法范例:
         *  var pingmu = new ZY.Pingmu({
          id: ['index', 'denglu','zhuce','zhaohui','xiugai','renzheng'],
          moren:'index',
        sudu:7,
        zindex:100,
        callback:function(toid){

        }
    });
         pingmu.bangding();
         */


        Pingmu: function (json) {
            var nowpingmu = json.moren;
            var sudu;
            if (json.sudu) {
                sudu = json.sudu
            } else {
                sudu = 7;
            }
            var succ=json.callback;

            var zindex;
            if (json.zindex) {
                zindex = json.zindex
            } else {
                zindex = 1
            }
            var bangding = function () {
                var array = json.id;
                for (var i = 0; i < array.length; i++) {
                    var obj = document.getElementById(array[i]);
                    obj.style.position = 'fixed';
                    obj.style.zIndex = zindex;
                    obj.style.height = '100vh';
                    obj.style.width = '100vw';
                    obj.style.top = '0';
                    if (array[i] == nowpingmu) {
                        obj.style.left = '0';
                    } else {
                        obj.style.left = '100vw';
                    }

                }
            };

            var yidong = function (toid, fx, call) {
                var len = arguments.length;
                var fromobj = document.getElementById(nowpingmu);
                var toobj = document.getElementById(toid);
                if (fx == 'zuo') {
                    toobj.style.left = '100vw';
                    var timer = setInterval(function () {
                        fromobj.style.left = (fromobj.offsetLeft - 10) + "px";
                        toobj.style.left = (toobj.offsetLeft - 10) + 'px';

                        if (toobj.offsetLeft <= 10) {
                            toobj.style.left = 0;
                            fromobj.style.left = '-100vw';
                            clearInterval(timer);
                            if (len == 3) {
                                call();
                            }
                            succ(toid);
                        }
                    }, sudu)
                }

                if (fx == 'you') {
                    toobj.style.left = '-100vw';
                    var timer = setInterval(function () {
                        fromobj.style.left = (fromobj.offsetLeft + 10) + "px";
                        toobj.style.left = (toobj.offsetLeft + 10) + 'px';

                        if (toobj.offsetLeft >= -10) {
                            toobj.style.left = 0;
                            fromobj.style.left = '100vw';
                            clearInterval(timer);
                            if (len == 3) {
                                call();
                            }
                            succ(toid);
                        }
                    }, sudu)
                }

                nowpingmu = toid;

            };


            var biansu = function (newsudu) {
                sudu = ~~newsudu;
            };

            return {
                bangding: bangding,
                yidong: yidong,
                biansu: biansu
            }
        },



        /**
         * @param json
         * @returns {{yidong: yidong}}
         * @constructor
         * 1.只适用于有具体层级的,不然还是用上面那个吧
         * 必须有一个moren作为主的不动,而且现在只支持单方向的,毕竟有一个不动的
         * 实测这个比较丝滑
         * 然后这个不用绑定
         * 方向就是go或者back
         */
        Pingmu2: function(json){
            var nowpingmu = json.moren;
            var sudu;
            if (json.sudu) {
                sudu = json.sudu
            } else {
                sudu = 1;
            }
            var succ=json.callback;

            var zindex;
            if (json.zindex) {
                zindex = json.zindex;
            } else {
                zindex = 1
            }


            var dh='all '+sudu+'s ease-in-out';

            var allpingmu=json.id;
            for(var i=0;i<allpingmu.length;i++){
                var pm=document.getElementById(allpingmu[i]);

                pm.style.position='fixed';
                if(allpingmu[i]==nowpingmu){
                    pm.style.left='0';
                }else {
                    pm.style.left='100vw';
                }
                pm.style.top='0';
                pm.style.zIndex=zindex;
                pm.style.display='block';
                pm.style.overflow='auto';
                pm.style.height='100vh';
                pm.style.width='100vw';
                pm.style.transition=dh;
            }


            var lastpingmu=[];
            var yidong=function(toid,fx){
                if(fx=='go') {
                    var toobj = document.getElementById(toid);
                    toobj.style.transform='translate3d(-100%,0,0)';
                    toobj.style.transition=dh;
                    lastpingmu.push(nowpingmu);
                }
                if(fx=='back'){
                    var nowobj=document.getElementById(nowpingmu);
                    nowobj.style.transform='';
                    nowobj.style.transition=dh;
                    lastpingmu.pop();
                }
                nowpingmu = toid;
                succ(nowpingmu);
            };

            var backButtonPress = 0;
            var back=function(){
                if(lastpingmu.length>=1){
                    yidong(lastpingmu[lastpingmu.length-1],'back');
                }else{
                    //这里可以做推退出应用


                    //backButtonPress++;
                    //if(backButtonPress > 1) {
                    //    plus.runtime.quit();
                    //} else {
                    //    Toast('再按一次退出应用');
                    //}
                    //setTimeout(function() {
                    //    backButtonPress = 0;
                    //}, 1000);
                }
            };





            return{
                yidong:yidong,
                back:back
            }
        },



        /**
         *
         * @param data
         * @constructor
         * 写法范例:
         * 这个一定要配合一个class,然后button的意思是点击东西哪个展开
         *  var cebianlan=new ZY.Cebianlan({
        ele:'cebianlan',
        width:'70vw',
        speed:4,
        classname:'cebianlan',
        button:'zhankai'
    })
         */

        /**
         *
         * @param data
         * @constructor
         * class的举例
         * .cebianlan{
    height: 100vh;
    position: fixed;
    z-index: 9999;
    top: 0;
    background-color: #2e6cda;
    color: white;
    font-size: 50px;
}

         */

        Cebianlan: function (data) {

            if (!data.classname || !data.width || !data.speed || !data.button || !data.ele) {
                console.log('缺少设置项');
                return;
            }

            var id = data.ele;
            var obj = document.getElementById(id);
            obj.classList.add(data.classname);
            obj.style.left = "-" + data.width;
            obj.style.width = data.width;
            var speed = data.speed;
            var closespeed = data.speed;
            if (data.closespeed) {
                closespeed = data.closespeed;
            }
            var newdiv = document.createElement('DIV');
            newdiv.setAttribute('style', 'position:fixed;width:100vw;height:100vh;z-index:9998;left:0;top:0;background-color:rgba(0,0,0,0.6)');
            document.getElementById(data.button).onclick = function () {
                obj.style.transform='translate3d(100%,0,0)';
                obj.style.transition='transform '+speed+'s ease-in-out';
                document.body.appendChild(newdiv);
            };


            newdiv.onclick = function () {
                shouhui();
            };

            var shouhui = function () {
                obj.style.transform='translate3d(-100%,0,0)';
                obj.style.transition='transform '+closespeed+'s ease-in-out';
                document.body.removeChild(newdiv);
            };

            return {
                shouhui: shouhui
            }

        },

        /**
         *
         * @param neirong
         * @param time
         * @constructor
         *
         .toast{
    position: fixed;
    z-index: 9999;
    bottom: 8vh;
    padding: 10px 20px;
    background-color: transparent;
    width: 100%;
    left: 0;
    text-align: center;
    line-height:8vh;
}


         .toast a{
    padding: 13px 24px;
    background-color: rgba(0,0,0,0.8);
    text-align: center;
    color: white;
    border-radius: 5px;
}


         这个是class
         */

        Toast:function(neirong, time){
            var nowtoast=document.getElementsByClassName('toast');
            if(nowtoast.length>0){
                nowtoast[0].style.bottom='15vh';
            }

            var js = 1500;
            if (arguments.length == 2) {
                js = time;
            }
            var div = document.createElement('DIV');
            div.innerHTML = "<a>" + neirong + "</a>";
            div.className = 'toast';
            div.style.opacity = 1;
            document.body.appendChild(div);

            setTimeout(function () {
                var timer = setInterval(function () {
                    div.style.opacity = div.style.opacity - 0.05;
                    if (div.style.opacity == 0) {
                        clearInterval(timer);
                        document.body.removeChild(div);
                    }
                }, 60)
            }, js)
        },



        MaptoJson:function(strMap){
            let obj = Object.create(null);
            for (let [k,v] of strMap) {
                obj[k] = v;
            }
            return obj;
        },

        /**
         *
         * @type {Biaodan}
         * 表单的作用是普通的表单的一个插件...
         * 我也不知道到底有没有用因为刚做
         *  var bd=new Biaodan();
         bd.setnew({
        id:'form',
        name:['name','age','d'],
        ipt:new ZY.Input(),
        upshuju:{
            shuju:new ZY.Shuju(),
            method:'url',
            fun:chuli
        },
        check:{
            check:true,
            error:function(){

            }
        }
    });
         *  这是基本的结构
         *  id的意思是整个表单的id,比如div的id
         *  name是里面数据的name
         *  ipt是直接指定的ZY.Input()方法,可以外面调用以后这里直接放那个变量
         *  upshuju是提交的相关配置
         *  method,代表提交的方法,有两个值
         *  url代表是在这个插件里提交,out表示插件不处理数据,数据扔出来
         *  如果是url的话,就要多加一个shuju字段,shuju和前面的ipt一个情况,也要多加一个url字段,表示提交的路径
         *  如果是url的话,可以加fun,表示上传以后的结果处理在这个fun里面
         *  如果是out的话,那么fun就必须加,这时候的fun就是点击提交以后数据的处理
         *  如果是out的话,就没必要加shuju字段了
         *  check也是一定要加的,check是一个json,表示在提交的时候要不要检查有没有输入完整
         *  check里面包含了check字段,true表示需要检查,false表示不需要
         *  如果是true,那么就需要加一个error字段,表示如果没有输入完整有没有什么提示操作
         *
         *  以上是必填的
         *  --------------------------------------------------------------------
         *  后面的选填的
         *
         *  data是指定数据的方法,比如说你肯定要指定token吧
         *  如果你想从另一个表单里获取数据呢
         *  那么就是
         *  字段名:{
     *  type:'shuju',
     *  form:从哪个表单里过来的,表单的id,
     *  name:那个表单里的哪个name
     *  }
         *  如果你想在提交时,从localstorage里获取数据呢
         *  那么就是
         *  字段名:{
     *  type:'storage',
     *  key:localstorage里的key
     *  }
         *  如果你想从一个function里的return 数据
         *  那么就是
         *  字段名：{
         *    type;"method",
         *    method:function(){
         *       return 那个方法
         *
         *    }
         *  }
         *
         *  上面是配置
         *  --------------------------------------------------------------------
         *  然后有两个操作
         *
         *  1. xxx.diaoyong,就是在外面去触发这个表单的提交事件
         *  2. setshuju就是给一个表单的某个字段单独修改内容
         *  setshuju(form,name,value,tongbu)
         *  其中前三个是必填
         *  form表示对应表单的id,name是那个字段的name,value是要修改的值
         *  如果tongbu有而且是true的话,那么在html里的这个输入框内数据也会相应修改掉
         *  3. 切记切记,对于点击哪个东西提交,就给他配上data-zy=tijiao,反正永远对第一个有效
         *  4. 如果需要禁用提交按钮的,配置中加入disable:true,启用的时候就是调用qiyong(这里是表单id)方法
         *  5. 如果要在结束以后,清空数据,就是clear(表单id)方法
         */
        Biaodan: function () {
            var bdlist = [];
            var bddata = {};
            var setnew = function (json) {
                var ipt = json.ipt;
                if (bdlist.indexOf(json.id) >= 0) {
                    console.log(json.id + '重复了');
                    return
                }
                bddata[json.id] = {};
                bdlist.push(json.id);
                var formdiv = document.getElementById(json.id);
                console.log(formdiv);
                //这里很奇怪,因为直接formdiv.getElementsByName不行会报错,不知道为什么
                var allinput = ZY.Shuzu(formdiv.getElementsByTagName('input'), formdiv.getElementsByTagName('textarea'));
                var myinput = [];
                var upshuju = json.upshuju;

                for (var i = 0; i < allinput.length; i++) {
                    if (json.name.indexOf(allinput[i].name) >= 0) {
                        myinput.push(allinput[i]);
                    }
                }

                var check = json.check;

                var tjanniu = formdiv.querySelector('[data-zy=tijiao]');
                if (json.disable === true) {
                    tjanniu.setAttribute('disabled', '');
                    tjanniu.setAttribute('data-dis', 'true');
                }
                if (tjanniu) {
                    tjanniu.onclick = function () {
                        diaoyong();
                    };
                }

                var diaoyong = function () {
                    if (check.check && !ipt.checkinput(myinput)) {
                        check.error(sessionStorage.getItem('input_none'));
                        return;
                    }
                    if (tjanniu && tjanniu.dataset.dis === 'true') {
                        console.log("禁止点击");
                        return;
                    }

                    var nr = ipt.gettext(myinput);
                    var myshuju = ZY.MaptoJson(nr);
                    if (json.data) {
                        for (var key in json.data) {
                            var d = json.data[key];
                            if (typeof d == "object" && d.type == 'shuju') {
                                var nd = bddata[d.form][d.name];
                                if (!nd) {
                                    console.log('没有这个数据:' + d.name);
                                    continue;
                                }
                                myshuju[key] = nd;
                            } else if (typeof d == "object" && d.type == 'storage') {
                                myshuju[key] = localStorage.getItem(d.key);
                            } else if (typeof d == "object" && d.type == 'method'){
                                var s=d.method;
                                myshuju[key] = s();
                            } else {
                                myshuju[key] = json.data[key];
                            }
                        }
                    }

                    if (JSON.stringify(bddata[json.id]) == "") {
                        bddata[json.id] = myshuju;
                    } else {
                        for (var key2 in myshuju) {
                            bddata[json.id][key2] = myshuju[key2];
                        }
                    }


                    var callback = upshuju.fun;
                    if (upshuju.method == 'url') {
                        var shuju = upshuju.shuju;
                        var data = bddata[json.id];
                        for (var i in data) {
                            shuju.set(i, data[i]);
                        }
                        shuju.getshuju(upshuju.url, {
                            success: function (data) {
                                if (callback) {
                                    callback(data)
                                }
                            },
                            error: function (e) {
                                if (callback) {
                                    callback('error');
                                }
                            }
                        })

                    }

                    if (upshuju.method == 'out') {
                        callback(bddata[json.id]);
                    }

                };


                var setanniu = function () {
                    tjanniu = formdiv.querySelector('[data-zy=tijiao]');
                };


                return {
                    diaoyong: diaoyong,
                    setanniu: setanniu
                }

            };

            var qiyong = function (id) {
                var qiyongform=document.getElementById(id);
                var qiyonganniu=qiyongform.querySelector('[data-zy=tijiao]');
                qiyonganniu.removeAttribute('disabled');
                qiyonganniu.removeAttribute('data-dis');
            };


            var setshuju = function (form, name, value, tongbu) {
                var f = bddata[form];
                if (!f) {
                    console.log('没有这个表单:' + form);
                    console.log('创建了一个新的');
                    bddata[form] = {};
                    bddata[form][name] = value;
                } else {
                    f[name] = value;
                }

                if (tongbu == true) {
                    var formdiv = document.getElementById(form);
                    var input = document.getElementsByName(name);
                    try {
                        var s = ZY.Shuzu(formdiv.children, '');
                        for (var i = 0; i < input.length; i++) {
                            var obj = input[i];
                            if (s.indexOf(obj) >= 0) {
                                obj.value = value;
                                return;
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }
                }

            };


            var clear=function(id){
                var clearform=document.getElementById(id);
                var clearinput = ZY.Shuzu(clearform.getElementsByTagName('input'), clearform.getElementsByTagName('textarea'));
                for(var i=0;i<clearinput.length;i++){
                    clearinput[i].value="";
                }
            };

            return {
                setnew: setnew,
                setshuju: setshuju,
                qiyong:qiyong,
                clear:clear
            }
        },

        /**
         *
         * @param json
         * @constructor
         * 这个的用途是用来做分页读取数据的，那么基本的原理就是，分页查询，多次提交数据请求
         * 那么也可以存到localstorage里
         * 字段说明：
         * pagename和stepname指的是发送ajax的时候的字段名，默认是page和step
         * page 和 step指的是获取从第几页开始的数据和每一页数据多少，默认1和20，也就是从第一页开始获取数据，每页20条
         * baocun 表示要不要保存在本地，默认是false即不要，但是如果是true的话，就必须搭载一个配套的变量，bcname，就是保存的名字
         * useshuju 这个字段表示用的zhangyue.js的shuju的变量是，默认shuju,
         * callback 么就是一个结束的方法，是必须要有的
         * start 么就是一个开始获取数据的时候要返回的东西，可以有，可以没有,error就是万一有错
         * data 是获取数据的时候有什么变量要传哇，是一个json格式的数据,默认就是空,
         * url 就是获取数据的那个。。。getshuju第一个字段,
         * maxpage是指最多要获取多少页，不是有多少页
         * bendi的意思就是要不要优先从本地获取，默认false
         * 如果bendi是true，那么就是说。。。和baocun用的一个名字
         *
         * php的代码
         *
         * 	$page=$_POST['page']-1;
         $step=$_POST['step'];
         $sql="SELECT * FROM xuesheng_caiwu limit $page,$step";
         *
         * 这个例子就是，如果优先从本地获取，且获取后保存本地的
         *   var shuju=new ZY.Shuju('https://m.shtsn.com/website/php');
         ZY.Dashuju({
        url:'ceshi.php',
        step:10,
        maxpage:3,
        baocun:'shuju',
        bendi:true,
        data:{
            method:'get'
        },
        start:function(){
            console.log('start')
        },
        error:function(e){
            console.log(e);
        },
        callback:function(data){
            console.log(data)
        }

    })
         */
        Dashuju : function(json){
            let pagename=json.pagename?json.pagename:'page';
            let stepname=json.stepname?json.stepname:'step';
            let page=json.page?json.page:1;
            let step=json.step?json.step:20;
            let baocun=json.baocun?json.baocun:false;
            let useshuju=json.useshuju?json.useshuju:shuju;
            let maxpage=json.maxpage?json.maxpage:100000;
            let data=json.data?json.data:{};
            let url=json.url?json.url:'';
            let callback=json.callback;
            let bendi=json.bendi?json.bendi:false;
            let res=[];//这是最终结果
            let startshuju=function(){
                //开始获取数据，如果有start变量就告诉他开始了
                if(json.start)json.start();
                if(bendi) {
                    getshujubendi();
                }else{
                    getshuju();
                }
            };

            let getshuju=function(){
                shuju.set(pagename,page);
                shuju.set(stepname,step);
                for(var key in data){
                    shuju.set(key,data[key])
                }
                shuju.getshuju(url,{
                    success:function(data){
                        //这里是要根据实际情况自己来改的
                        //console.log(data);
                        var info=data.data;
                        for(let i=0;i<info.length;i++){
                            res.push(info[i]);
                        }
                        if(baocun){
                            //如果要求保存到本地,这里要注意，如果数据不是json格式，那么要改一下代码，不要json.stringify
                            localStorage.setItem(baocun+""+page,JSON.stringify(info));
                        }

                        if(info.length<step || page== maxpage){
                            //即当前数据已经比每一页数字小了，或者到了最大页数，就结束
                            //加上页数
                            if(baocun){
                                localStorage.setItem(baocun+'page',page);
                            }
                            //最后返回一次
                            if(json.jindu)json.jindu(page);
                            callback(res);
                            page=1;
                        }else{
                            //这里根据实际需求，如果实际情况返回了总页数的话，可以加上总页数
                            if(json.jindu)json.jindu(page);
                            page++;
                            getshuju();
                        }
                    },
                    error:function(e){
                        if(json.error)json.error(e);
                    }
                })
            };

            let getshujubendi=function(){
                //先检查一下，万一本地其实没数据呢。。。那就走getshuju的那一步
                if(!localStorage.getItem(baocun+'1')){
                    console.log('本地没这组数据啊，从网上获取');
                    getshuju();
                }
                let pagesize=~ ~localStorage.getItem(baocun+'page');
                for(let p=1;p<=pagesize;p++){
                    //这里也要根据实际情况来，如果不是json数据的话就不能用这个json.parse
                    let d=JSON.parse(localStorage.getItem(baocun+p));
                    for(let i=0;i<d.length;i++){
                        res.push(d[i]);
                    }
                    if(json.jindu)json.jindu(p+'/'+pagesize);
                }
                callback(res);
            };



            startshuju();


        },



        /**
         *
         * @param json
         * @constructor
         * 这两个的区别是，2号是获取一点，就给到前面一点，前面处理完了，告诉后面，后面再继续
         * 然后这个本地的话，我觉得本地没有必要在这里写了，反正就是一个检查而已
         * 顶多就是
         * if localStorage(name+'1')xxxxxxx的，如果本地有么就循环走本地，没有么就再大数据好了
         * 所以
         * 2号没有bendi这个数据，也没有res
         * ZY.Dashuju2({
        url:'ceshi.php',
        step:10,
        data:{
            method:'get'
        },
        start:function(){
            console.log('start')
        },
        error:function(e){
            console.log(e);
        },
        callback:function(data,next){
            console.log(data);
            setTimeout(function(){
                next();
            },3000);
        },
        jindu:function(e){
            console.log(e)
        },
        end:function(){

        }

    });
         *
         */
        Dashuju2 : function(json){
            let pagename=json.pagename?json.pagename:'page';
            let stepname=json.stepname?json.stepname:'step';
            let page=json.page?json.page:1;
            let step=json.step?json.step:20;
            let baocun=json.baocun?json.baocun:false;
            let useshuju=json.useshuju?json.useshuju:shuju;
            let maxpage=json.maxpage?json.maxpage:100000;
            let data=json.data?json.data:{};
            let url=json.url?json.url:'';
            let callback=json.callback;
            let startshuju=function(){
                //开始获取数据，如果有start变量就告诉他开始了
                if(json.start)json.start();
                getshuju();
            };

            let getshuju=function(){
                shuju.set(pagename,page);
                shuju.set(stepname,step);
                for(var key in data){
                    shuju.set(key,data[key])
                }
                shuju.getshuju(url,{
                    success:function(data){
                        //这里是要根据实际情况自己来改的
                        //console.log(data);
                        var info=data.data;
                        //for(let i=0;i<info.length;i++){
                        //    res.push(info[i]);
                        //}
                        if(baocun){
                            //如果要求保存到本地,这里要注意，如果数据不是json格式，那么要改一下代码，不要json.stringify
                            localStorage.setItem(baocun+""+page,JSON.stringify(info));
                        }

                        if(info.length<step || page== maxpage){
                            //即当前数据已经比每一页数字小了，或者到了最大页数，就结束
                            //加上页数
                            if(baocun){
                                localStorage.setItem(baocun+'page',page);
                            }
                            //最后返回一次
                            if(json.jindu)json.jindu(page);
                            callback(info,function(){
                                page=1;
                            });
                            json.end();
                        }else{
                            //这里根据实际需求，如果实际情况返回了总页数的话，可以加上总页数
                            if(json.jindu)json.jindu(page);
                            callback(info,function(){
                                page++;
                                getshuju();
                            });
                        }
                    },
                    error:function(e){
                        if(json.error)json.error(e);
                    }
                })
            };



            startshuju();


        },

        /**
         *
         * @param json
         * @returns {{getshuju: gs}}
         * @constructor
         *  示例代码
         *  var fenye=new ZY.Fenye({
        page:1,
        step:50,
        url:'ceshi2.php',
        button:document.getElementById('a'),
        data:{
          method:'get'
        },
        callback:function(data){
            console.log(data);
        },
        start:function(){
            console.log('start')
        },
        end:function(){
            console.log('end')
        }
    });
         *
         * 如果不用按钮，外面调用
         *   fenye.getshuju({
            callback:function(data){
                console.log(data)
            },
            start:function(){
                console.log('s')
            },
            end:function(){
                console.log('e')
            }
        })
         */
        Fenye:function(json){
            let pagename=json.pagename?json.pagename:'page';    //同上
            let stepname=json.stepname?json.stepname:'step';    //同上
            let page=json.startpage?json.startpage:1;   //从第几页开始
            let step=json.step?json.step:20;         //每次多少页
            let useshuju=json.useshuju?json.useshuju:shuju;
            let data=json.data?json.data:{};         //额外数据
            let url=json.url;                        //链接 *
            let first=json.first?json.first:false;   //一开始要不要加载
            let button=json.button;      //对应的那个点击元素，不一定是button
            let totalpage=0;             //总页数
            let callback=json.callback;  //每次结束以后的返回 *
            let start=json.start;  //开始获取数据的时候干嘛 *
            let end=json.end;   //本次数据获取结束干嘛 *


            const getshuju=function(s,er){
                return new Promise(function(succ,err){
                    if(s)s();
                    shuju.set(pagename,page);
                    shuju.set(stepname,step);
                    for(var key in data){
                        shuju.set(key,data[key])
                    }
                    shuju.getshuju(url,{
                        success:function(data){
                            //这里要根据实际情况写
                            totalpage=parseInt(data.total);
                            if(er)er();
                            succ(data.data);

                        },
                        error:function(e){
                            if(er)er();
                            err(e);
                        }
                    });
                })
            };

            const nextpage=function(){
                getshuju(start,end).then(function(data){
                    if(page>totalpage){
                        callback('end');
                    }else{
                        callback({
                            data:data,
                            page:page
                        });
                        page++;
                    }
                }).catch(function(e){
                    callback(e);
                })
            };


            const gs=function(j){
                let call= j.callback,s= j.start,e= j.end;
                getshuju(s,e).then(function(data){
                    if(page>totalpage){
                        call('end');
                    }else{
                        call({
                            data:data,
                            page:page
                        });
                        page++;
                    }
                }).catch(function(e){
                    call(e);
                })
            };

            if(first){
                nextpage();
            }

            if(button) {
                button.onclick = function () {
                    nextpage();
                };
            }


            return{
                getshuju:gs
            }
        },


        /**
         *
         * @param kuandu
         * @constructor
         * 用来自适应屏幕
         * 传入一个设计稿的宽度
         */

        Zishiying :function(kuandu){
            let deviceWidth;
            setHtmlFontSize();

            if (window.addEventListener) {
                window.addEventListener('resize', function () {
                    setHtmlFontSize()
                }, false)
            }
            function setHtmlFontSize () {
                // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以19.20
                deviceWidth = document.documentElement.clientWidth > kuandu ? kuandu : document.documentElement.clientWidth;
                document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / (kuandu/100) + 'px !important'
            }
        },

        /**
         *
         * @param fun  //方法，必须Prmoise
         * @param arr  //数据，数组格式
         * @param call //回调，可以用来搞进度
         * @param cw   //如果promise返回err，要不要停止，false就是停止
         * @constructor
         * 用来异步做一件需要重复好几次的事情，fun必须是Promise写的
         */
        Xunhuan :function(fun,arr,call,cw){
            let f = fun;
            let from = 0;
            const xh = function(){
                let data = arr[from];
                f(data).then(function(){
                    let jd = from+1;
                    call(jd);
                    jixv();
                }).catch(function(){
                    //cw表示如果有错就终止
                    if(cw && cw==false){
                        call('error');
                    }else{
                        jixv();
                    }
                })
            };

            const jixv = function(){
                from++;
                if(from==arr.length){
                    call('end');
                }else{
                    xh();
                }
            };

            xh();
        },


        /**
         *
         * @returns {{get: Get}}
         * @constructor
         */

        Url:function(){
            const Get=function(name){
                let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                let r = window.location.search.substr(1).match(reg);
                return r!=null?decodeURIComponent(r[2]):null;
            };
            return{
                get:Get
            }
        },

        /**
         *
         * @param id
         * @param call
         * @returns {{bangding: bangding, name: getres, show: show, init: init}}
         * @constructor
         *
         * 用法：
         * HTML部分举例
         *
         <div class="zy_picker" id="zy_picker">
         <div class="p1">
         <div class="p2">
         <div>关闭</div>
         <div>确定</div>
         </div>

         <div class="ceng">
         <div class="p3" id="p3">

         </div>
         </div>


         </div>
         <hr class="line1">
         <hr class="line2">

         </div>


         <div class="zy_picker" id="zy_picker2">
         <div class="p1">
         <div class="p2">
         <div>关闭</div>
         <div>确定</div>
         </div>

         <div class="ceng">
         <div class="p3" id="p2_1">

         </div>

         <div class="p3" id="p2_2">

         </div>
         </div>


         </div>
         <hr class="line1">
         <hr class="line2">

         </div>
         * 保证每一列的id唯一，主要是为了后面更新数据方便
         *
         * JS部分
         * 绑定
         *
         const picker = new Picker('zy_picker',function(data){
        document.getElementById('type').innerHTML = data.renwu.text;   // 这里是处理返回的数据
    });
         // 这部分是绑定
         picker.bangding({    // 如果是更新数据，只要把bangding改成init就可以
        id:'p3',   // 这里的p3就是id为p3的那一列
        name:'renwu',  //返回的时候这条数据的key
        data:['主线任务','支线任务','特殊任务','休闲任务','紧急任务']   //值
    });

         // css部分

         */
        //
        //    .zy_picker{
        //    position: fixed;
        //    height: 100vh;
        //    width: 100vw;
        //    background-color: rgba(0,0,0,0.3);
        //    z-index: 999;
        //    top: 0;
        //    left: 0;
        //    visibility: hidden;
        //}
        //
        //.zy_picker .p1{
        //    height: 50vh;
        //    background-color: white;
        //    position: absolute;
        //    bottom: -50vh;
        //    width: 100vw;
        //    left: 0;
        //    padding-top: 0.3rem;
        //}
        //
        //.zy_picker .p2{
        //    height: 0.8rem;
        //    display: flex;
        //    align-items: center;
        //    justify-content: space-between;
        //    padding: 0 0.4rem;
        //}
        //
        //.zy_picker .p2 > div{
        //    font-size: 0.35rem;
        //    padding: 0.1rem 0.35rem;
        //    color: white;
        //}
        //
        //.zy_picker .p2 > div:nth-of-type(1){
        //    background-color: #f00030;
        //}
        //
        //.zy_picker .p2 > div:nth-of-type(2){
        //    background-color: #00c0ea;
        //}
        //
        //.zy_picker .ceng{
        //    width: 100vw;
        //    height: calc(40vh - 0.8rem);
        //    overflow: auto;
        //    display: flex;
        //    justify-content: space-between;
        //}
        //
        //.zy_picker .p3{
        //    width: 100vw;
        //    height: calc(40vh - 0.8rem);
        //    overflow: auto;
        //    font-size: 0.3rem;
        //}
        //
        //.zy_picker .p3:first-child:nth-last-child(2),
        //.zy_picker .p3:first-child:nth-last-child(2) ~ .p3{
        //    width: 50vw;
        //    font-size: 0.28rem;
        //
        //}
        //
        //.zy_picker .p3:first-child:nth-last-child(3),
        //.zy_picker .p3:first-child:nth-last-child(3) ~ .p3{
        //    width: 33vw;
        //    font-size: 0.25rem;
        //}
        //
        //.zy_picker .p3 > div{
        //    height: calc(10vh - 0.2rem);
        //    display: flex;
        //    align-items: center;
        //    justify-content: center;
        //    /*font-size: 0.3rem;*/
        //}
        //
        //.zy_picker .line1{
        //    position: absolute;
        //    width: 90vw;
        //    left: 5vw;
        //    background-color: grey;
        //    height: 1px;
        //    /*top: calc(80vh - 1.1rem);*/
        //    top: calc(130vh - 1.1rem);
        //}
        //
        //.zy_picker .line2{
        //    position: absolute;
        //    width: 90vw;
        //    left: 5vw;
        //    background-color: grey;
        //    height: 1px;
        //    top: calc(140vh - 1.3rem);
        //}


        Picker:function(id,call){
            let res = {};
            let sbool = false;
            const zdom = document.getElementById(id);
            const l1 = zdom.querySelector('.line1');
            const l2 = zdom.querySelector('.line2');
            const p1 = zdom.querySelector('.p1');
            let speed = 0;

            //关闭
            zdom.querySelector('.p2').querySelectorAll('div')[0].onclick = function(){
                hide();
            };

            //确定
            zdom.querySelector('.p2').querySelectorAll('div')[1].onclick = function(){
                hide();
                call(res);
            };

            const hide = function(){
                zdom.style.visibility='hidden';
                p1.style.transform='translate3d(0,100%,0)';
                p1.style.transition='transform ' + speed + 's ease';
                l1.style.transform='translate3d(0,50vh,0)';
                l1.style.transition='transform ' + speed + 's ease';
                l2.style.transform='translate3d(0,50vh,0)';
                l2.style.transition='transform ' + speed + 's ease';
                sbool = false;
            };

            const show = function(s){
                speed = s || 0.6;
                if(sbool)return;
                //zdom.style.display='block';
                zdom.style.visibility='visible';
                p1.style.transform='translate3d(0,-100%,0)';
                p1.style.transition='transform ' + speed + 's ease';
                l1.style.transform='translate3d(0,-50vh,0)';
                l1.style.transition='transform ' + speed + 's ease';
                l2.style.transform='translate3d(0,-50vh,0)';
                l2.style.transition='transform ' + speed + 's ease';
                sbool = true;
            };


            const init = function(js){
                let id2 = js.id;
                let arr = js.data;
                let name = js.name;
                let html = [`<div></div>`,`<div></div>`];
                for(let i=0;i<arr.length;i++){
                    html.push(`<div>${arr[i]}</div>`);
                }
                html.push(`<div></div>`);
                document.getElementById(id2).innerHTML=html.join('');

                res[name] = {};
                res[name].text = arr[0];
                res[name].num  = 0;
            };

            const bangding = function(js){
                let id2 = js.id;
                let arr = js.data;
                let name = js.name;
                let html = [`<div></div>`,`<div></div>`];
                for(let i=0;i<arr.length;i++){
                    html.push(`<div>${arr[i]}</div>`);
                }
                html.push(`<div></div>`);

                //默认是第一个
                res[name] = {};
                res[name].text = arr[0];
                res[name].num  = 0;

                const dom = document.getElementById(id2);
                dom.innerHTML = html.join('');
                //我们要计算得出，每一行的高度
                const domheight = dom.offsetHeight;
                const height = domheight/4;  //那么这就是每一行应该有的高度

                let domlast  = null;
                let domtimer = null;
                dom.onscroll = function(e){
                    //console.log(e.target.scrollTop);
                    if(domtimer==null){
                        domtimer = setInterval(function(){
                            stop1();
                        },500);
                    }
                    domlast = e.target.scrollTop;
                };


                let stop1 = function(){
                    if(dom.scrollTop == domlast){
                        clearInterval(domtimer);
                        domtimer = null;

                        //计算当前应该是哪一个
                        let num = Math.floor(domlast/height);
                        let yu = domlast%height;
                        if(yu > height/2){
                            num++;
                        }

                        // 开始修正
                        let yinggai = height * num;
                        $(dom).animate({scrollTop:yinggai}, 300);

                        res[name].text = arr[num];
                        res[name].num  = num;
                        //console.log(res);
                    }
                }
            };

            const getres = function(name){
                return json[name];
            };



            return {
                bangding:bangding,
                name:getres,
                show:show,
                init:init
            }
        }
    };
})();


//
//var _Richeng  = [];  // 这个是给他全局的一个变量，里面保存日程信息
//// 先加载日历
//const Rili = function(){
//    let today = ZY.Day().get();
//    let t = today.split('-');
//    let nian = t[0];
//    let yue = t[1];
//
//    const Xieru = function() {
//
//        document.getElementById('zrili_date').innerHTML = nian + '年' + yue + '月';
//
//        let riqi = nian + '-' + yue + '-' + '01';
//        let inweek = ZY.Day().week(riqi);
//        //然后往前倒退，获得第一个的日期
//        let firstriqi = ZY.Day().which(riqi, -inweek);
//        if (inweek == 7) {
//            firstriqi = riqi; // 如果他就是第一天。。。那么就直接处理
//        }
//
//
//        let arr = [];
//        let l = 35;
//        for (let i = 0; i < l; i++) {
//            let day = ZY.Day().which(firstriqi, i);
//            let by = true; // 是不是本月的日期
//            if (day.split('-')[1] != yue) {
//                by = false;
//            }
//            arr.push({
//                day: day,
//                by: by,
//                num: ~~day.split('-')[2]
//            });
//            if (i == 34) {
//                //检查，这一天是不是这个月的最后一天
//                let tomorrow = ZY.Day().which(day, 1);
//                if (tomorrow.split('-')[1] == day.split('-')[1]) {
//                    if (tomorrow.split('-')[1] == yue) {
//                        l = l + 7;
//                    }
//                }
//            }
//        }
//
//
//        // 这里就是根据每个项目单独的渲染了
//        let rchtml = arr.map(function(obj){
//            let bg = 'white';
//            let d = obj.day;
//            for(let i=0;i<_Richeng.length;i++){
//                let o = _Richeng[i];
//                if(d>= o.start && d<= o.end){
//                    bg = 'green';
//                    break;
//                }
//            }
//            if(bg == 'white'){
//                return `
//                <div class="text-${obj.by?'black':'gray'}">${obj.num}</div>
//                `;
//            }else{
//                return `
//                <div class="bg-green">${obj.num}</div>
//                `;
//            }
//
//        });
//        document.getElementById('zrili_d2').innerHTML = rchtml.join('');
//
//        console.log(arr);
//    };
//
//    const _Shang = function () {
//        if (yue == 1) {
//            yue = 12;
//            nian = nian - 1;
//        } else {
//            yue = yue - 1;
//        }
//        if (yue < 10) {
//            yue = "0" + "" + yue;
//        }
//
//        Xieru();
//    };
//
//    const _Xia =  function () {
//
//        if (yue == 12) {
//            yue = 1;
//            nian = nian + 1;
//        } else {
//            yue = ~ ~yue + 1;
//        }
//        if (yue < 10) {
//            yue = "0" + "" + yue;
//        }
//        Xieru();
//    };
//
//    return {
//        xieru:Xieru,
//        shang:_Shang,
//        xia:_Xia
//    }
//};
//
//
//var rili = new Rili();

//
//
//
//
const ts = function(text,call){
    Swal.fire({
        title: "成功",
        text: text,
        type: "success"
    }).then(function(){
        if(call){
            call()
        }
    })
};

const te = function(text,call){
    Swal.fire({
        title: "失败",
        text: text,
        type: "error"
    }).then(function(){
        if(call){
            call()
        }
    })
};

const tw = function(text,call){
    Swal.fire({
        title: "提示",
        text: text,
        type: "warning"
    }).then(function(){
        if(call){
            call()
        }
    })
};

const tm = function(text,call,call2){
    Swal.fire({
        title: text,
        text: '',
        type: "warning",
        showCancelButton: !0,
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        confirmButtonClass: "btn btn-success mt-2",
        cancelButtonClass: "btn btn-danger ml-2 mt-2",
        buttonsStyling: !1
    }).then(function (t) {
        if(t.value && call){
            call();
        }else{
            if(call2){
                call2();
            }
        }
    })
};




const Page = function(id,max,size,callback){
    let div = document.getElementById(id);
    let allpage = Math.ceil(max/size);
    let type = allpage<7; //true标示总共就不到7页，不用。。。
    let _nowpage = 1; //总归是从第一页开始的咯

    const sethtml = function(){
        let html = [];
        html.push(` <li><a>«</a></li>`);
        if(type){
            for(let i=1;i<=allpage;i++){
                if(i==_nowpage){
                    html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                }else{
                    html.push(`<li><a>${i}</a></li>`);
                }
            }
        }else{
            for(let i=1;i<=5;i++){
                if(i==_nowpage){
                    html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                }else{
                    html.push(`<li><a>${i}</a></li>`);
                }
            }
            html.push(`<li class="disabled"><a>...</a></li>`);
            html.push(`<li><a>${allpage}</a></li>`);
        }
        html.push(`<li><a>»</a></li>`);
        div.innerHTML=html.join('');
    };

    let firstpage = 0;
    div.addEventListener('click',function(e){
        if(e.target && (e.target.nodeName=='SPAN' || e.target.nodeName=='A') ){
            let obj = e.target;
            let p = obj.innerHTML;
            console.log(p);
            if(p=='...'){
                //点击省略号那么跳过
                return;
            }
            if(~ ~p>0){
                p=~ ~p;
                _nowpage = p;
                if(p==allpage){
                    //直接选了最后一页
                    let num = Math.ceil(allpage/5);
                    let first = 5*(num-1);
                    if(first<=0){
                        first=1;
                    }
                    firstpage = first;
                    let html = [];
                    html.push(` <li><a>«</a></li>`);
                    for(let i=first;i<=_nowpage;i++){
                        if(i==_nowpage){
                            html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                        }else{
                            html.push(`<li><a>${i}</a></li>`);
                        }
                        //html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                    }
                    html.push(`<li><a>»</a></li>`);
                    document.getElementById('fenye').innerHTML=html.join('');
                }else {
                    //是数字而且不是最后一个
                    console.log(obj.innerHTML);
                    //如果type是true，那么只要改class就行
                    //如果说，当前页的位置，不是最后一个，那么也不用去设置。最后一个的话，肯定是5的倍数

                    if (type || (p % 4) != 1) {
                        resetclass(p);
                        //sethtml();
                    } else {
                        //如果很多页，那么要重新去设置这个html
                        //这个时候就要算一下，剩下的页数减掉当前选择的，还剩多少，有没有超过7
                        fanye();
                    }
                }

                callback(_nowpage);
            }

            if(p=="»"){
                if(_nowpage==allpage)return;
                _nowpage++;
                if(_nowpage%4==1){
                    fanye();
                }else{
                    sethtml();
                }
                callback(_nowpage);
            }

            if(p=='«'){
                if(_nowpage<=1)return;
                if((_nowpage%4==1 && _nowpage!=1) || _nowpage == firstpage){
                    _nowpage--;
                    let html = [];
                    html.push(` <li><span>«</span></li>`);
                    for(let i=_nowpage-3;i<=_nowpage+1;i++){
                        //html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                        if(i==_nowpage){
                            html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                        }else{
                            html.push(`<li><a>${i}</a></li>`);
                        }
                    }
                    html.push(`<li class="disabled"><a>...</a></li>`);
                    html.push(`<li><a>${allpage}</a></li>`);
                    html.push(`<li><a>»</a></li>`);
                    document.getElementById('fenye').innerHTML=html.join('');
                }else{
                    _nowpage--;
                    sethtml();
                }
                callback(_nowpage);
            }

        }
    });

    const fanye = function(){
        let shengxia = allpage - _nowpage;
        let html = [];
        html.push(` <li><span>«</span></li>`);
        if(shengxia<7){
            for(let i=_nowpage;i<=allpage;i++){
                //html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                if(i==_nowpage){
                    html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                }else{
                    html.push(`<li><a>${i}</a></li>`);
                }
            }
        }else{
            for(let i=_nowpage;i<=_nowpage+4;i++){
                //html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                if(i==_nowpage){
                    html.push(`<li ${i==_nowpage?'class="active"':''}><span>${i}</span></li>`);
                }else{
                    html.push(`<li><a>${i}</a></li>`);
                }
            }
            html.push(`<li class="disabled"><a>...</a></li>`);
            html.push(`<li><a>${allpage}</a></li>`);
        }
        html.push(`<li><a>»</a></li>`);
        document.getElementById('fenye').innerHTML=html.join('');
    };

    const resetclass = function(){
        let alla = ZY.Shuzu(div.getElementsByTagName('a'),div.getElementsByTagName('span'));
        for(let i=0;i<alla.length;i++){
            let obj = alla[i];
            if(obj.innerHTML=='...')continue;
            if(obj.innerHTML == _nowpage){
                console.log(alla[i].parentNode)
            }
            alla[i].parentNode.setAttribute('class',obj.innerHTML==_nowpage?'active':'');
        }
    };

    sethtml();
};



const houduan = "php"
const mydata = new ZY.Data();
// const baseurl = "http://localhost:9091/";
const baseurl = "http://121.37.247.95/bs2024/0519/";
const shuju=new ZY.Shuju(houduan == "php" ? (baseurl + 'php') : baseurl);
const s=new ZY.Shuju(houduan == "php" ? (baseurl + 'php') : baseurl);
const basefile = baseurl + 'files/';
const upfileurl = houduan == "php" ? (baseurl + "php/c.php") : (baseurl+"upload");
const ipt=new ZY.Input();
mydata.set('version','1.0.0');
const loading=new ZY.Loading();
loading.set({
    img_src:'img/loading.gif'
});
const url = new ZY.Url();


//
//var $lj = window.location.href.split('.html')[0].split('/').pop();
//if($lj!='login' && !mydata.get('id')){
//    alert('请先登录');
//    window.location.href='login.html';
//}

function zifu (sj){
    let string = sj;
    string = string.replace(/\r\n/g,"<br>&nbsp;&nbsp;&nbsp;&nbsp;");
    string = string.replace(/\n/g,"<br>&nbsp;&nbsp;&nbsp;&nbsp;");
    return string;
}



const _Checkinfo = function(json){
    for(let key in json){
        if(json[key] == ""){
            return false;
        }
    }
    return true;
}


try{
    Vue.directive('clock',{
        bind(el,binding,vnode){
            console.log(el);
            el.style.display = "block"
        }
    })
}catch(e){

}
