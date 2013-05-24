<?php
	$conn = new Mongo("mongodb://cyd:123@localhost");
	$conn->connect();
	$db = $conn->test;
	$collection = $db->appinfo;
	
	$cursor = $collection->find();
	while($cursor->hasNext()){
		$rs = $cursor->getNext();
		var_dump($rs);
		echo "<br>";
	}
	
	$conn->close();
?>