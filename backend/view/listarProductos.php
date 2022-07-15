<?php

include "../controller/listarProductos.php";

$productController = new productController;
echo $productController->productsView();
