<?php
include_once('connect.php');
$collection=$db->appchannel;
$cursor = $collection->find();
while($cursor->hasNext()){
	$rs = $cursor->getNext();
	$arr[] = array($rs['AppChannel'],intval($rs['ChannelCount']));
}
$data = json_encode($arr);
echo $data;
$conn->close();
?>