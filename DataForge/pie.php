<?php
include_once('connect.php');
$collection=$db->pie;
$cursor = $collection->find();
while($cursor->hasNext()){
	$rs = $cursor->getNext();
	//var_dump($rs);
	//echo "<br>";
	//$rs = $cursor->getNext();
	//var_dump($rs);
	$arr[] = array($rs['title'],intval($rs['pv']));
}
//$array = iterator_to_array($cursor);
//echo $array;
//var_dump($array);
$data = json_encode($arr);
echo $data;
$conn->close();
?>