/**
 * Created by zhangyue on 19/7/22.
 */



var UpTu=function(){


    var tuobj;
    var tusrc;


    var up=function(o){
        var tu=document.getElementById('tu');
        tu.click();
        tuobj=o;
    };



    var tupian=function(obj){
        var prevDiv=tuobj;
        console.log(obj.files[0]);



        if (obj.files && obj.files[0]) {
            var reader = new FileReader();
//
            reader.onload = function (evt) {
                tusrc = evt.target.result;
                var result=this.result;
                tuobj.src=tusrc;
                console.log(result);
                shangchuan(tusrc);

            };
            reader.readAsDataURL(obj.files[0]);

        }
    };


    var shangchuan=function(b){
        var form=document.getElementById("form");

        lrz($("#tu")[0].files[0], //通过id获取file
            {quality:0.5} //压缩配置，具体还有哪些参数下文解释
        ).then(function (rst) {
                loading.start();
                console.log(rst.base64);
                shuju.set('name',Date.parse(new Date()));
                shuju.set('base64',rst.base64);

            shuju.getshuju('c/uptu',{
                    success:function(data){
                        loading.end();
                        console.log(data.data);
                        tuobj.setAttribute('data-src',data.data);
                    },
                    error:function(e){
                        loading.end();
                        console.log(e)
                    }
                })

            })
            .catch(function (err) {
                //console.log(err)
                //alert("第一步失败");

            })
            .always(function () {
            });

    };

    return {
        tupian:tupian,
        up:up
    }
};
