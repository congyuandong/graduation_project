<?php
include_once('connect.php');
$collection=$db->appchannel;
$cursor = $collection->find();
while($cursor->hasNext()){
	$rs = $cursor->getNext();
	$arr1[] = array($rs['AppChannel']);
	$arr2[] = array(intval($rs['ChannelCount']));
}
//$arr = array_merge($arr1,$arr2);
$data1 = json_encode($arr2);
echo $data1;
$conn->close();
?>