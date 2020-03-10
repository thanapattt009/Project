<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include 'config.php';

$_POST['Function_Name']();
///////////////////////////////////////////// add +++++++++++++++++++++++++++++
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

}

///////////////////////////   show all data //////////////////////////////////

function getAdminAll(){
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

function getUserAll(){
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

function getUserHeadAll(){
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


//////////////////////////  By id ////////////////////////////////////////////

function getByIdAdmin(){
    $Data = json_decode($_POST['_Data']);
    $IdAdmin = $Data;
    $conn = getDB();
    $sql_query = "SELECT * from admin_db where id_admin='$IdAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}

function getByIdUser(){
    $Data = json_decode($_POST['_Data']);
    $Iduser = $Data->id_user;
    $conn = getDB();
    $sql_query = "SELECT * from user where id_user='$Iduser'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}

function getByIdUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IduserHead = $Data->id_userhead;
    $conn = getDB();
    $sql_query = "SELECT * from userhead where id_user='$IduserHead'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}


///////////////////////////////////////////// update ///////////////////////////

function updateAdmin(){
    $Data = json_decode($_POST['_Data']);
    $IdAdmin = $Data->id_admin;
    $UsernameAdmin = $Data->usernameadmin;
    $PasswordAdmin = $Data->passwordadmin;
    $NameAdmin = $Data->nameadmin;
    $EmailAdmin = $Data->emailadmin;
    $TelAdmin = $Data->teladmin;
    $conn = getDB();
   $sql_query ="UPDATE admin_db SET usernameadmin = '$UsernameAdmin', passwordadmin = '$PasswordAdmin', nameadmin= '$NameAdmin', emailadmin = '$EmailAdmin', teladmin = '$TelAdmin' WHERE admin_db.id_admin = $IdAdmin";
    // $sql_query = "UPDATE admin_db set usernameadmin='$UsernameAdmin',passwordaddmin='$PasswordAdmin',nameadmin='$NameAdmin',emailadmin='$EmailAdmin',teladmin='$TelAdmin' WHERE id_admin='$IdAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
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

function updateUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IdUserHead = $Data->id_userhead;
    $UsernameUserHead = $Data->usernamehead;
    $PasswordUserHead = $Data->passwordhead;
    $NameUserHead = $Data->namehead;
    $EmailUserHead = $Data->emailhead;
    $TelUserHead = $Data->telhead;
    $conn = getDB();
    $sql_query = "UPDATE userhead set usernamehead='$UsernameUserHead',passwordhead='$PasswordUserHead',namehead='$NameUserHead',emailhead='$EmailUserHead',telhead='$TelUserHead' WHERE id_userhead='$IdUserHead'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
}


/////////////////////////////   delete ////////////////////////////////////////

function deleteUser(){
    $Data = json_decode($_POST['_Data']);
    $IdUser = $Data->id_user;
    $conn = getDB();
    $sql_query = "DELETE from user where id_user='$IdUser'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"delete"}';
}

function deleteUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IdUserHead = $Data->id_userhead;
    $conn = getDB();
    $sql_query = "DELETE from userhead where id_userhead='$IdUserHead'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"delete"}';
}
////////////////////////////////////////////// 

function checkloginadmin(){
    $Data = json_decode($_POST['_Data']);
    $UsernameAdmin = $Data->usernameadmin;
    $PasswordAdmin = $Data->passwordadmin;
    $conn = getDB();
    $sql_query = "SELECT * FROM `admin_db` WHERE usernameadmin = '$UsernameAdmin' AND passwordadmin = '$PasswordAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}


function checkloginuser(){
    $Data = json_decode($_POST['_Data']);
    $UsernameAdmin = $Data->usernameadmin;
    $PasswordAdmin = $Data->passwordadmin;
    $conn = getDB();
    $sql_query = "SELECT * FROM `user` WHERE username_user = '$UsernameAdmin' AND password_user = '$PasswordAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}

function checkloginuserHead(){
    $Data = json_decode($_POST['_Data']);
    $UsernameAdmin = $Data->usernameadmin;
    $PasswordAdmin = $Data->passwordadmin;
    $conn = getDB();
    $sql_query = "SELECT * FROM `userhead` WHERE usernamehead = '$UsernameAdmin' AND passwordhead = '$PasswordAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}



?>
