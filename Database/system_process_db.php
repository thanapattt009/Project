<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include 'config.php';

$_POST['Function_Name']();
///////////////////////////////////////////// add +++++++++++++++++++++++++++++
function addUser(){
    $Data = json_decode($_POST['_Data']);
    $IdUser = $Data->id_user;
    $PasswordUser = $Data->password_user;
    $UsernameUser = $Data->username_user;
    $NameUser = $Data->name_user;
    $EmailUser = $Data->email_user;
    $TelUser = $Data->tel_user;
    $conn = getDB();
    $sql_query = "INSERT INTO user (id_user,password_user,username_user,name_user,email_user,tel_user) VALUES ('$IdUser','$PasswordUser','$UsernameUser','$NameUser','$EmailUser','$TelUser')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);

}

function addUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IdUserHead = $Data->id_userhead;
    $PasswordHead = $Data->passwordhead;
    $UsernameHead = $Data->usernamehead;
    $NameHead = $Data->namehead;
    $EmailHead = $Data->emailhead;
    $TelHead = $Data->telhead;
    $conn = getDB();
    $sql_query = "INSERT INTO userhead (id_userhead,passwordhead,usernamehead,namehead,emailhead,telhead) VALUES ('$IdUserHead','$PasswordHead','$UsernameHead','$NameHead','$EmailHead','$TelHead')";
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
//////////////////////////////////////////////// by username

function getByUsernameAdmin(){
    $Data = json_decode($_POST['_Data']);
    $UsernameAdmin = $Data->usernameadmin;
    $conn = getDB();
    $sql_query = "SELECT * from admin_db where usernameadmin='$UsernameAdmin'";
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

function getByIdUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IduserHead = $Data->id_userhead;
    $conn = getDB();
    $sql_query = "SELECT * from userhead where id_userhead='$IduserHead'";
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
    $PasswordAdmin = $Data->passwordadmin;
    $UsernameAdmin = $Data->usernameadmin;
    $NameAdmin = $Data->nameadmin;
    $EmailAdmin = $Data->emailadmin;
    $TelAdmin = $Data->teladmin;
    $conn = getDB();
    $sql_query ="UPDATE admin_db SET  passwordadmin = '$PasswordAdmin', usernameadmin = '$UsernameAdmin', nameadmin = '$NameAdmin', emailadmin = '$EmailAdmin', teladmin = '$TelAdmin' WHERE id_admin = '$IdAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
}

function updateUser(){
    $Data = json_decode($_POST['_Data']);
    $IdUser = $Data->id_user;
    $PasswordUser = $Data->password_user;
    $UsernameUser = $Data->username_user;
    $NameUser = $Data->name_user;
    $EmailUser = $Data->email_user;
    $TelUser = $Data->tel_user;
    $conn = getDB();
    $sql_query = "UPDATE user SET password_user = '$PasswordUser', username_user = '$UsernameUser', name_user = '$NameUser', email_user = '$EmailUser', tel_user = '$TelUser' WHERE id_user = '$IdUser'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
}

function updateUserHead(){
    $Data = json_decode($_POST['_Data']);
    $IdUserHead = $Data->id_userhead;
    $PasswordUserHead = $Data->passwordhead;
    $UsernameUserHead = $Data->usernamehead;
    $NameUserHead = $Data->namehead;
    $EmailUserHead = $Data->emailhead;
    $TelUserHead = $Data->telhead;
    $conn = getDB();
    $sql_query = "UPDATE userhead set passwordhead='$PasswordUserHead',usernamehead='$UsernameUserHead',namehead='$NameUserHead',emailhead='$EmailUserHead',telhead='$TelUserHead' WHERE id_userhead='$IdUserHead'";
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
    $IdAdmin = $Data->id_admin;
    // $UsernameAdmin = $Data->usernameadmin;
    $PasswordAdmin = $Data->passwordadmin;
    $conn = getDB();
    $sql_query = "SELECT * FROM `admin_db` WHERE usernameadmin = '$IdAdmin' AND passwordadmin = '$PasswordAdmin' ";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}


function checkloginuser(){
    $Data = json_decode($_POST['_Data']);
    $UsernameAdmin = $Data->id_admin;
    $PasswordAdmin = $Data->passwordadmin;
    $conn = getDB();
    $sql_query = "SELECT * FROM `user` WHERE username_user='$UsernameAdmin' AND password_user = '$PasswordAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}

function checkloginuserHead(){
    $Data = json_decode($_POST['_Data']);
    $UsernameAdmin = $Data->id_admin;
    $PasswordAdmin = $Data->passwordadmin;
    $conn = getDB();
    $sql_query = "SELECT * FROM `userhead` WHERE usernamehead='$UsernameAdmin' AND passwordhead = '$PasswordAdmin'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;
}
/////////////////////////////// datapass////////////////

function addmorning(){
    $Data = json_decode($_POST['_Data']);
    $Id_morning = $Data->id_morning;
    $Resuscitation = $Data->resuscitation;
    $Emergent = $Data->emergent;
    $Urgent = $Data->urgent;
    $Less_urgent = $Data->less_urgent;
    $Non_urgent = $Data->non_urgent;
    $conn = getDB();
    $sql_query = "INSERT INTO morning (id_morning,resuscitation,emergent,urgent,less_urgent,non_urgent) VALUES ('$Id_morning','$Resuscitation','$Emergent','$Urgent','$Less_urgent','$Non_urgent')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);

}

function addafternoon(){
    $Data = json_decode($_POST['_Data']);
    $Id_afternoon = $Data->id_afternoon;
    $Resuscitation = $Data->resuscitation;
    $Emergent = $Data->emergent;
    $Urgent = $Data->urgent;
    $Less_urgent = $Data->less_urgent;
    $Non_urgent = $Data->non_urgent;
    $conn = getDB();
    $sql_query = "INSERT INTO afternoon (id_afternoon,resuscitation,emergent,urgent,less_urgent,non_urgent) VALUES ('$Id_afternoon','$Resuscitation','$Emergent','$Urgent','$Less_urgent','$Non_urgent')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);

}

function addlate(){
    $Data = json_decode($_POST['_Data']);
    $Id_late = $Data->id_late;
    $Resuscitation = $Data->resuscitation;
    $Emergent = $Data->emergent;
    $Urgent = $Data->urgent;
    $Less_urgent = $Data->less_urgent;
    $Non_urgent = $Data->non_urgent;
    $conn = getDB();
    $sql_query = "INSERT INTO late (id_late,resuscitation,emergent,urgent,less_urgent,non_urgent) VALUES ('$Id_late','$Resuscitation','$Emergent','$Urgent','$Less_urgent','$Non_urgent')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);

}



?>
