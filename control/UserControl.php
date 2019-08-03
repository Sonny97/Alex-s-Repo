<?php
include_once("../Connection/Connection.php");
$id=$_POST['postcedula'];
$params=array($id);
$sql = "EXEC SP_CONSULTAR_ALUMNO @sp_cedula=?";
$stmt = sqlsrv_query($conn, $sql,$params); 

$row = sqlsrv_fetch_array($stmt);
 
$json = json_encode($row);
echo $json;

?>