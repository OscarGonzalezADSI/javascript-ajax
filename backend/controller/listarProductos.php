<?php

include "../model/listarProductos.php";

class ProductController
{
	function productsView()
	{
		$productos = new Productos();
		$producto = $productos->viewAllProductos();
		$producto = json_encode($producto);
		$producto = "{\"productos\":" . $producto. "}";
		return $producto;
	}
	
	function viewRowProductos($id_productos)
	{
		$productos = new Productos();
		$producto = $productos->viewRowProductos($id_productos);
		$producto = json_encode($producto);
		$producto = "{\"productos\":" . $producto. "}";
		return $producto;
	}
}
