<?php
include 'config.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$_POST['Function_Name']();

function addProduct(){
    $Data = json_decode($_POST['_Data']);
    $IdProduct = $Data->id_Product;
    $NameProduct = $Data->name_Product;
    $TypeProduct = $Data->type_Product;
    $PriceProduct = $Data->price_Product; 
    $conn = getDB();
    $sql_query = "INSERT INTO basket (id_Product,name_Product,type_Product,price_Product) VALUES ('$IdProduct','$NameProduct','$TypeProduct','$PriceProduct')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $Response_Data= $rst->fetchAll(PDO::FETCH_NUM);
   
}

function getAllProduct(){
    $Data = json_decode($_POST['_Data']);
    $conn = getDB();    
    $sql_query = "SELECT * from basket";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);      
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;         
    
}

function getByIdProduct(){
    $Data = json_decode($_POST['_Data']);
    $IdProduct = $Data->id_Product;
    $conn = getDB();    
    $sql_query = "SELECT * from basket where id_Product='$IdProduct'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ); 
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;      
}

function updateProduct(){
    $Data = json_decode($_POST['_Data']);
    $IdProduct = $Data->id_Product;
    $NameProduct = $Data->name_Product;
    $TypeProduct = $Data->type_Product;
    $PriceProduct = $Data->price_Product;
    $conn = getDB();    
    $sql_query = "UPDATE basket set name_Product='$NameProduct',type_Product='$TypeProduct',price_Product='$PriceProduct' WHERE id_Product='$IdProduct'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"update"}';
}

function deleteProduct(){
    $Data = json_decode($_POST['_Data']);
    $IdProduct = $Data->id_Product;
    $conn = getDB();
    $sql_query = "DELETE FROM basket WHERE id_Product='$IdProduct'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"delete"}';    
}


function addByProduct(){
    $Data = json_decode($_POST['_Data']);
    $IdProduct = $Data->id_Product;
    $NameProduct = $Data->name_Product;
    $TypeProduct = $Data->type_Product;
    $PriceProduct = $Data->price_Product; 
    $CountProduct = $Data->count_Product;
    $SumProduct =  $PriceProduct * $CountProduct;
    $conn = getDB();
    $sql_query = "INSERT INTO byproduct (by_name_Product,by_type_Product,by_price_Product,count_Product,sum_Product) VALUES ('$NameProduct','$TypeProduct','$PriceProduct','$CountProduct','$SumProduct')";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $Response_Data= $rst->fetchAll(PDO::FETCH_NUM);
    echo $Response_Data; 
   
}


function showAllProduct(){
    $Data = json_decode($_POST['_Data']);
    $conn = getDB();    
    $sql_query = "SELECT * from byproduct";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);      
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;         
    
}

function deleteByProduct(){
    $Data = json_decode($_POST['_Data']);
    $IdProduct = $Data->by_id_Product;
    $conn = getDB();
    $sql_query = "DELETE FROM byproduct WHERE by_id_Product='$IdProduct'";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    echo '{"Finish":"delete"}';    
}


function getAllProductSum(){
    $Data = json_decode($_POST['_Data']);
    $conn = getDB();    
    $sql_query = "SELECT SUM(sum_Product) AS SumAll FROM byproduct";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query($sql_query);
    $rst = $conn->query($sql_query);
    $Response_Data = $rst->fetchAll(PDO::FETCH_OBJ);      
    $Response_Data = json_encode($Response_Data);
    echo $Response_Data;         
    
}
?>