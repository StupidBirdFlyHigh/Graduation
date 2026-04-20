
var _Setmenu = function(lanmu,page){
    document.getElementById('sidebar').innerHTML=`
               <li ${lanmu=='laoshi'?`class="active"`:''}> <a href="laoshi.html">老师管理</a></li>
               <li ${lanmu=='kecheng'?`class="active"`:''}> <a href="kecheng.html">课程管理</a></li>
               <li ${lanmu=='xuesheng'?`class="active"`:''}> <a href="xuesheng.html">学生管理</a></li>
               <li><a href="javascript:_Mima()">修改密码</a></li>
               <li><a href="javascript:_exit()">退出登录</a></li>

    `;
};



const _exit = function(){
    //localStorage.clear();
    window.location.href='login.html';
};


const _Mima = function(){
    let str = window.prompt('请输入新密码');
    if(str && str!=""){
        shuju.set('password',str);
        shuju.set('id',mydata.get('aid'));
        shuju.set('biao','admin');
        shuju.getshuju('c/info_xiugai',{
            success:function(data){
                if(data.code==200){
                    toastr.success('修改成功');
                }else{
                    toastr.error('修改失败');
                }
            },
            error:function(e){
                toastr.error('网络错误');
            }
        })
    }
};

