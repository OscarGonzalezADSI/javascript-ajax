<?php
date_default_timezone_set("America/Bogota");
require_once 'conexion.php';
$conexion = new Conexion();
if (isset($_GET['accion'])) {
	$accion = $_GET['accion'];
	if ($accion == 'registrar') {
		$id_productos = $_POST['id_productos'];
		$nombre = $_POST['nombre'];
		$precio = $_POST['precio'];
		$cantidad = $_POST['cantidad'];
		$sql = "INSERT INTO productos(
			id_productos, nombre, precio, cantidad
			)VALUES (?,?,?,?)";
		$reg = $conexion->prepare($sql);
		$reg->bindParam(1, $id_productos);
		$reg->bindParam(2, $nombre);
		$reg->bindParam(3, $precio);
		$reg->bindParam(4, $cantidad);
		if ($reg->execute() === TRUE) {
			echo 1;
		} else {
			echo 0;
		}
	} else if ($accion == 'modificar') {
		$id_productos = $_POST['id_productos'];
		$nombre = $_POST['nombre'];
		$precio = $_POST['precio'];
		$cantidad = $_POST['cantidad'];
		$sql = "UPDATE productos SET 
			nombre=:nombre,
			precio=:precio,
			cantidad=:cantidad
			WHERE id_productos = :id_productos;";
		$reg = $conexion->prepare($sql);
		$reg->bindParam(":id_productos", $id_productos);
		$reg->bindParam(":nombre", $nombre);
		$reg->bindParam(":precio", $precio);
		$reg->bindParam(":cantidad", $cantidad);
		if ($reg->execute() === TRUE) {
			echo 1;
		} else {
			echo 0;
		}
	} else if ($accion == 'eliminar') {
		$id_productos = $_POST['id_productos'];
		$sql = "DELETE FROM productos WHERE id_productos = :id_productos;";
		$reg = $conexion->prepare($sql);
		$reg->bindParam(":id_productos", $id_productos);
		if ($reg->execute() === TRUE) {
			echo 1;
		} else {
			echo 0;
		}
	} else {
		echo 2;
	}
} else {
	echo 3;
}
