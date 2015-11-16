<?php

header("Content-type: text/xml");
$names = array(
    "John Smith", "Peter Boldizs", "David Boldizs", 
    "Anna Boldizs", "Johnny Depp"
);
if(!$query) $query = $_GET['query'];
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
echo "<names>\n";
while (list($k,$v)=each($names)) {
    if(stristr($v, $query)) {
        echo "<name>$v</name>\n";
    }
}
echo "</names>\n";

?>