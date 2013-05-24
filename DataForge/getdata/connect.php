<?php
	$conn = new Mongo("mongodb://cyd:123@localhost");
	$conn->connect();
	$db = $conn->test;
?>