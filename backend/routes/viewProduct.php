<?php

include "../view/viewProduct.php";

if(isset($_GET['id']))
{
    $id_product = $_GET['id'];
    $obj = new ViewProduct();
	echo $obj->work($id_product);
}else{
	echo "No se ha enviado el id del producto para poder verlo.";
}
