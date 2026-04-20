//一个简单的PHP脚本，用于与MySQL数据库进行交互。它设置了几个CORS（跨源资源共享）头部，以便允许跨域请求。然后，它连接到MySQL数据库，并定义了三个函数来处理查询：
//chaxun($sql): 这个函数接受一个SQL查询字符串，执行查询，并将结果作为JSON返回。它使用全局变量$conn（数据库连接）和$post（从请求中提取的数据）。如果查询返回任何行，它们将被添加到数组$arr中，并最终作为JSON返回。
//chaxunall($biao, $json = null): 这个函数接受一个表名和一个可选的JSON对象。它构建一个SQL查询字符串，该字符串从指定的表中选择所有行，并根据提供的条件进行筛选、排序和限制。筛选条件、排序和限制从$json对象中提取，并使用$post数组中的值进行填充。查询的结果被作为JSON返回。
//chaxun_num($biao, $json = null): 这个函数似乎与chaxunall函数类似，但从代码片段中看，它似乎是不完整的。它接受一个表名和一个可选的JSON对象，但代码只显示了如何获取$order变量，并没有显示如何使用这个变量或执行查询。






<?php
header('Content-Type: text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin');
$servername = "localhost";
$username = "bs240519";
$password = "bs240519";
$dbname = "bs240519";
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}


 $content = file_get_contents('php://input');
 $post    = $_POST['method'] ? $_POST : (array)json_decode($content, true);
// $post=$_POST;
function chaxun($sql) {
    global $conn;
    global $post;
    $arr = array();
    $res = $conn->query($sql);
    if ($res->num_rows > 0) {
        while ($row = $res->fetch_assoc()) {
            array_push($arr, $row);
        }
    }
    return json_encode(array('code' => 200, 'data' => $arr));
}
function chaxunall($biao, $json = null) {
    global $post;
    $order = $json['order'];
    $limit = $json['limit'];
    $tj = $json['tj'];
    $sql = "SELECT * FROM $biao";
    if ($tj) {
        if (is_string($tj)) {
            $tj = explode(",", $tj);
        }
        $tjarr = array();
        for ($i = 0;$i < count($tj);$i++) {
            $zhi = $tj[$i];
            array_push($tjarr, "$zhi='" . $post[$zhi] . "'");
        }
        $sql = $sql . " WHERE " . join(' and ', $tjarr);
    }
    if ($order) {
        $sql = $sql . " ORDER BY " . $order . " DESC";
    }
    if ($limit) {
        $sql = $sql . " LIMIT " . $limit;
    }
    global $conn;
    $arr = array();
    $res = $conn->query($sql);
    if ($res->num_rows > 0) {
        while ($row = $res->fetch_assoc()) {
            array_push($arr, $row);
        }
    }
    return json_encode(array('code' => 200, 'data' => $arr));
}
function chaxun_num($biao, $json = null) {
    global $post;
    $order = $json['order'];
    $tj = $json['tj'];
    $sql = "SELECT * FROM $biao";
    if ($tj) {
        if (is_string($tj)) {
            $tj = explode(",", $tj);
        }
        $tjarr = array();
        for ($i = 0;$i < count($tj);$i++) {
            $zhi = $tj[$i];
            array_push($tjarr, "$zhi='" . $post[$zhi] . "'");
        }
        $sql = $sql . " WHERE " . join(' and ', $tjarr);
    }
    if ($order) {
        $sql = $sql . " ORDER BY " . $order . " DESC";
    }
    global $conn;
    $arr = array();
    $res = $conn->query($sql);
    return $res->num_rows;
}
function chaxun_2($sql) {
    global $post;
    global $conn;
    $arr = array();
    $res = $conn->query($sql);
    if ($res->num_rows > 0) {
        while ($row = $res->fetch_assoc()) {
            array_push($arr, $row);
        }
    }
    return $arr;
}
function chaxun_one($biao, $json = null) {
    global $post;
    global $conn;
    $tj = $json['tj'];
    $sql = "SELECT * FROM $biao";
    if ($tj) {
        if (is_string($tj)) {
            $tj = explode(",", $tj);
        }
        $tjarr = array();
        for ($i = 0;$i < count($tj);$i++) {
            $zhi = $tj[$i];
            array_push($tjarr, "$zhi='" . $post[$zhi] . "'");
        }
        $sql = $sql . " WHERE " . join(' and ', $tjarr);
    }
    $arr = array();
    $res = $conn->query($sql);
    if ($res->num_rows > 0) {
        return json_encode(array('code' => 200, 'data' => $res->fetch_assoc()));
    } else {
        return json_encode(array('code' => 300, 'sql' => $sql));
    }
}
function charu($biao, $nr) {
    global $conn;
    global $post;
    $nrsql = array();
    if (is_string($nr)) {
        $nr = explode(",", $nr);
    }
    for ($i = 0;$i < count($nr);$i++) {
        array_push($nrsql, "'" . $post[$nr[$i]] . "'");
    }
    $sql = "INSERT into $biao (" . join(",", $nr) . ") VALUES (" . join(",", $nrsql) . ")";
    return json_encode(array('code' => $conn->query($sql) ? 200 : 300, 'data' => $conn->insert_id));
}
function xiugai($biao, $nr, $tj = 'id') {
    //必须包含一个id
    global $conn;
    global $post;
    $nrsql = array();
    if (is_string($nr)) {
        $nr = explode(",", $nr);
    }
    for ($i = 0;$i < count($nr);$i++) {
        array_push($nrsql, $nr[$i] . "='" . $post[$nr[$i]] . "'");
    }
    $tiaojian = $post[$tj];
    // $id=$post['id'];
    $sql = "UPDATE $biao set " . join(",", $nrsql) . " where $tj='$tiaojian' limit 1";
    return json_encode(array('code' => $conn->query($sql) ? 200 : 300));
}
function shanchu($biao, $tj = 'id', $wy = null) {
    global $conn;
    global $post;
    if (is_string($tj)) {
        $tj = explode(",", $tj);
    }
    $tjarr = array();
    for ($i = 0;$i < count($tj);$i++) {
        $zhi = $tj[$i];
        array_push($tjarr, "$zhi='" . $post[$zhi] . "'");
    }
    $tjsql = join(' and ', $tjarr);
    if ($wy !== null) {
        $sql = "DELETE FROM $biao where " . $tjsql . " limit 1";
    } else {
        $sql = "DELETE FROM $biao where " . $tjsql;
    }
    return json_encode(array('code' => $conn->query($sql) ? 200 : 300));
}
function caozuo($sql) {
    global $conn;
    return json_encode(array('code' => $conn->query($sql) ? 200 : 300));
}
function youwu($biao, $nr) {
    global $conn;
    global $post;
    $num = chaxun_num($biao, array('tj' => $nr));
    if ($num == 0) {
        echo charu($biao, $nr);
    } else {
        echo shanchu($biao, $nr, true);
    }
}
function juli($lat1,$lng1,$lat2,$lng2) {
	$EARTH_RADIUS = 6378137;
	$RAD = pi() / 180.0;
	$radLat1 = $lat1 * $RAD;
	$radLat2 = $lat2 * $RAD;
	$a = $radLat1 - $radLat2;
	$b = ($lng1 - $lng2) * $RAD;
	$s = 2 * asin(sqrt(pow(sin($a / 2), 2) + cos($radLat1) * cos($radLat2) * pow(sin($b / 2), 2)));
	$s = $s * $EARTH_RADIUS;
	$s = round($s * 10000) / 10000;
	return $s;
}
$method = $post['method'];
?>