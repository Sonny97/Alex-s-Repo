<?php
header("Content-type: text/javascript");
include_once("../Connection/Connection.php");
$id=123456789;
$params=array($id);
$sql = "EXEC SP_CONSULTAR_ALUMNO @sp_cedula=?";
$stmt = sqlsrv_query($conn, $sql,$params); 

$row = sqlsrv_fetch_array($stmt);
 
echo json_encode($row);


?>