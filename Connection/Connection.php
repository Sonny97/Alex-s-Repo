<?php
$serverName = "144.217.222.96\sqlexpress, 1433"; //serverName\instanceName, portNumber (por defecto es 1433)
$connectionInfo = array( "Database"=>"test", "UID"=>"tecnomedios", "PWD"=>"a2llcm8tc2VydmVy");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

?>
