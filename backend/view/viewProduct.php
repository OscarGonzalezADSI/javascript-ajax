<?php
/*
 * valida que el id fue enviado por GET.
 * valida que el valor del id sea de tipo entero.
 * 
 */
include "../controller/listarProductos.php";

class ViewProduct
{
	function work($id_product)
	{
		settype($id_product, "integer");
		if($id_product > 0)
		{
			return $this->queryException($id_product);
		}else{
			return "Tipo de dato invalido.";
		}
	}
	
	function queryException($id_product)
	{
		try {
			return $this->queryProduct($id_product);
		} catch (Exception $e) {
			return "ha ocurrido un error: ".$e->getMessage();
		}
	}
	
	function queryProduct($id_product)
	{
		$productController = new productController;
		$result = $productController->viewRowProductos($id_product);
		if($result == "{\"productos\":[]}"){
			$result = "No hay resultados";
		}
		return $result;
	}
}
