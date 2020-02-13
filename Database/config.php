<?php
//ob_start("ob_gzhandler");

error_reporting(0);
session_start();
/* DATABASE CONFIGURATION */
// define('DB_SERVER', '192.168.1.101');
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'system_process_db');
// define("BASE_URL", "http://127.0.0.1/api/");
// define("BASE_URL", "http://192.168.1.101/api/");
define("SITE_KEY", 'yourSecretKey');

function getDB()
{
	$dbhost=DB_SERVER;
	$dbuser=DB_USERNAME;
	$dbpass=DB_PASSWORD;
	$dbname=DB_DATABASE;
	$dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbConnection->exec("set names utf8");
	$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbConnection;

}

