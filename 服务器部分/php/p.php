<?php
include 'manifest.php';

if($method == "getkechengadminlist"){
    $sql = "SELECT l.name as lsname,k.* FROM laoshi l,kecheng k where k.lid = l.id and k.status = 0 order by k.id desc";
    echo chaxun($sql);
}
//查询老师姓名和课程信息

if($method == "getmykechenglaoshi"){
    $lid = $post['lid'];
    $sql = "SELECT k.*,(SELECT count(*) FROM xuanke where kid = k.id) as renshu FROM kecheng k where k.lid = $lid and k.status = 0";
    echo chaxun($sql);
}
//根据传递的lid（老师ID），查询该老师教授的所有课程

if($method == "getxuankexueshenglist"){
    $kid = $post['kid'];
    $sql = "SELECT u.name,u.id FROM xuesheng u ,xuanke k where k.kid = $kid and k.xid = u.id";
    echo chaxun($sql);
}
//根据传递的kid（课程ID），查询选择了该课程的所有学生姓名和ID

if($method == "addmorendidian"){
    $qid = $post['qid'];
    $kid = $post['kid'];
    $kecheng = $conn->query("SELECT * FROM kecheng where id = $kid")->fetch_assoc();
    $post['name'] = $kecheng['jiaoshi'];
    $post['lng'] = $kecheng['lng'];
    $post['lat'] = $kecheng['lat'];
    $post['juli'] = 50;
    echo charu("didian","qid,name,lng,lat,juli");
}
//首先根据课程ID查询课程信息，然后从POST数据获取其他字段，并将这些信息插入到didian

if($method == "checkallqiandao"){
    $time = $post['time'];
    $day  = $post['day'];
    $sql = "UPDATE qiandao set status = 1 where status = 0 and jieshu < '$time' and DATE(addtime) = '$day'";
    echo caozuo($sql);
}
//更新签到表


if($method == "getyiqiandao"){
    $qid = $post['qid'];
    $kid = $post['kid'];
    $sql = "SELECT x.name , j.addtime FROM xuesheng x,jilu j,kecheng k
                    where j.xid = x.id and j.qid = $qid and k.id = $kid and
                    (SELECT count(*) FROM xuanke where kid = k.id and xid = x.id) > 0";
    echo chaxun($sql);
}
//根据传递的学生ID（qid）和课程ID（kid），
//查询已选择该课程的学生姓名和签到时间。还使用了子查询来确保学生确实选择了该课程


if($method == "getweiqiandao"){
    $qid = $post['qid'];
    $kid = $post['kid'];
    $sql = " SELECT x.name FROM xuesheng x
                where (SELECT count(*) FROM xuanke where xid = x.id and kid = $kid) > 0
                and
                (SELECT count(*) FROM jilu where qid = $qid and xid = x.id) = 0";
    echo chaxun($sql);            
}
//查询未签到（未记录）的学生姓名。它首先检查学生是否选择了某个课程（通过子查询在xuanke表中），然后检查该学生是否在该课程中有签到记录（通过子查询在jilu表中）。如果没有签到记录，则学生的姓名会被返回。




if($method == "myjiaru"){
    $xid = $post['xid'];
    $sql = "SELECT l.name as lsname,k.* FROM laoshi l,kecheng k
                    where k.lid = l.id and k.status = 0 and k.id in (SELECT kid FROM xuanke where xid = $xid)";
    echo chaxun($sql);                
}
//查询某个学生（由xid指定）已选择的课程列表，以及对应的老师姓名。它连接了laoshi（老师）和kecheng（课程）两个表，并通过子查询在xuanke表中找出学生已选择的课程ID。


if($method == "weijiaru"){
    $xid = $post['xid'];
    $sql = "SELECT l.name as lsname,k.* FROM laoshi l,kecheng k
                    where k.lid = l.id and k.status = 0 and k.id not in (SELECT kid FROM xuanke where xid = $xid)";
    echo chaxun($sql);                
}
//查询某个学生（由xid指定）未选择的课程列表，以及对应的老师姓名。它同样连接了laoshi和kecheng两个表



if($method == "tuichu"){
    $xid = $post['xid'];
    $kid = $post['kid'];
    $sql = "DELETE FROM xuanke where xid = $xid and kid = $kid limit 1";
    echo caozuo($sql);
}
//从xuanke表中删除一条记录，表示某个学生（由xid指定）退出了某个课程（由kid指定）

$conn->close();
?>