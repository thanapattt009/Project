<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include 'config.php';

$_POST['Function_Name']();


function getAllDataAdmin(){
    $Data = json_decode($_POST['_Data']);
    $conn = getDB();    
    $sql_query = "SELECT * from admin_db";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);      
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;         
}

function getAllDataUser(){
    $Data = json_decode($_POST['_Data']);
    $conn = getDB();    
    $sql_query = "SELECT * from user";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);      
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;         
}


function getAllDataUserHead(){
    $Data = json_decode($_POST['_Data']);
    $conn = getDB();    
    $sql_query = "SELECT * from userhead";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);      
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;         
}

function getByIdAdmin(){
    $Data = json_decode($_POST['_Data']);
    $IdAdmin = $Data->id_admin;
    $conn = getDB();
    $sql_query = "SELECT * from admin_db where id_admin='$IdAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}

function updateAdmin(){
    $Data = json_decode($_POST['_Data']);
    $IdAdmin = $Data->id_admin;
    $UsernameAdmin = $Data->usernameadmin;
    $PasswordAdmin = $Data->passwordadmin;
    $NameAdmin = $Data->nameadmin;
    $EmailAdmin = $Data->emailadmin;
    $TelAdmin = $Data->teladmin;
    $conn = getDB();
    $sql_query = "UPDATE admin_db set usernameadmin='$UsernameAdmin',passwordaddmin='$PasswordAdmin',nameadmin='$NameAdmin',emailadmin='$EmailAdmin',teladmin='$TelAdmin' WHERE id_admin='$IdAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
}


function addUser(){
    $Data = json_decode($_POST['_Data']);
    $IdUser = $Data->id_user;
    $UsernameUser = $Data->username_user;
    $PasswordUser = $Data->password_user;
    $NameUser = $Data->name_user;
    $EmailUser = $Data->email_user;
    $TelUser = $Data->tel_user;
    $conn = getDB();
    $sql_query = "INSERT INTO user (id_user,username_user,password_user,name_user,email_user,tel_user) VALUES ('$IdUser','$UsernameUser','$PasswordUser','$NameUser','$EmailUser','$TelUser')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
}

function getByIdUser(){
    $Data = json_decode($_POST['_Data']);
    $IdUser = $Data->id_user;
    $conn = getDB();    
    $sql_query = "SELECT * from user where id_user='$IdUser'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ); 
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;      
}

function updateUser(){
    $Data = json_decode($_POST['_Data']);
    $IdUser = $Data->id_user;
    $UsernameUser = $Data->username_user;
    $PasswordUser = $Data->password_user;
    $NameUser = $Data->name_user;
    $EmailUser = $Data->email_user;
    $TelUser = $Data->tel_user;
    $conn = getDB();
    $sql_query = "UPDATE user set username_user='$UsernameUser',password_user='$PasswordUser',name_user='$NameUser',email_user='$EmailUser',tel_user='$TelUser' WHERE id_user='$IdUser'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
}

function addUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IdUserHead = $Data->id_userhead;
    $UsernameHead = $Data->usernamehead;
    $PasswordHead = $Data->passwordhead;
    $NameHead = $Data->namehead;
    $EmailHead = $Data->emailhead;
    $TelHead = $Data->telhead;
    $conn = getDB();
    $sql_query = "INSERT INTO userhead (id_userhead,usernamehead,passwordhead,namehead,emailhead,telhead) VALUES ('$IdUserHead','$UsernameHead','$PasswordHead','$NameHead','$EmailHead','$TelHead')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $Response_Data= $rst->fetchAll(PDO::FETCH_NUM);
}

function getByIdUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IdUserHead = $Data->id_head;
    $conn = getDB();    
    $sql_query = "SELECT * from userhead where id_head='$IdUserHead'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ); 
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;      
}

function updateUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IdUserHead = $Data->id_userhead;
    $UsernameHead = $Data->usernamehead;
    $PasswordHead = $Data->passwordhead;
    $NameHead = $Data->namehead;
    $EmailHead = $Data->emailhead;
    $TelHead = $Data->telhead;
    $conn = getDB();
    $sql_query = "UPDATE userhead set usernamehead='$UsernameHead',passwordhead='$PasswordHead',namehead='$NameHead',emailhead='$EmailHead',telhead='$TelHead' WHERE id_userhead='$IdUserHead'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
}




// function getAllProductSum(){
//     $Data = json_decode($_POST['_Data']);
//     $conn = getDB();
//     $sql_query = "SELECT SUM(sum_Product) AS SumAll FROM byproduct";
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     $conn->query($sql_query);
//     $rst = $conn->query($sql_query);
//     $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
//     $Response_Data = json_encode($Response_Data);
//     echo $Response_Data;

// }
?>
