<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="container_12">
	<div class="grid_12">
		<h1>Запрос в базу данных</h1>
	</div>
</div>
<?
include 'config.php';
include 'php_home_arrays.php';

function dbconnect(){
	$GLOBALS['connection'] = mysql_connect($GLOBALS['DBHOST'], $GLOBALS['DBUSER'], $GLOBALS['DBPASS']);
	mysql_select_db($GLOBALS['DBNAME'], $GLOBALS['connection']);
	mysql_query("SET NAMES utf8", $GLOBALS['connection']);
}

function dbsellect($query){
	$rsResult = mysql_query($query, $GLOBALS['connection']);
	
	return $rsResult;
}

function dbfeatch($rsResult){
	while($arResult = mysql_fetch_array( $rsResult, MYSQL_ASSOC)){
	
		#['массив для заполнения']['id группы']['массив элементов']['id элемента'];
		$GLOBALS['arData'][$arResult['groupID']]['items'][$arResult['id']]['name'] = $arResult['name'];
		$GLOBALS['arData'][$arResult['groupID']]['items'][$arResult['id']]['superPower'] = $arResult['superPower'];
		
	
	}
	
}




function t($arr){
	?><pre><? print_r($arr) ?></pre><?
}

dbconnect();
$rsResult = dbsellect("SELECT * FROM heroes");
dbfeatch($rsResult);
t($arData);

/*
function hero($x){
	$i = 1;
	while($arResult = mysql_fetch_array( $rsResult, MYSQL_ASSOC)){
			if($i<=2){
			$h2 = "Герои Marvel";
			$string_grid_12 = "<div class='grid_12'>";
			$string_col_6 = "<div class='col-6'>";
		} else if($i>2 & $i<=4){
			$h2 = "Герои ВОВ";
			$string_grid_12 = "<div class='grid_12 red'>";
			$string_col_6 = "<div class='col-6 border_red'>";
		} else{
			$h2 = "Герои советских мультфильмов";
			$string_grid_12 = "<div class='grid_12'>";
			$string_col_6 = "<div class='col-6'>";
		}
		
		if($i%2){
		echo "<div class='container_12'>";
		echo $string_grid_12;
		echo "<h2 class='h2'>".$h2."</h2>";
		echo $string_col_6;
		echo "<p class='p'>".$arResult['name'].
		": ".$arResult['superPower'].
		"</p>".
		"</div>";
		} else{
		echo $string_col_6;
		echo "<p class='p'>".$arResult['name'].
		": ".$arResult['superPower'].
		"</p>".
		"</div>".
		"</div>".
		"</div>";
		}
		$i++;	
		}
	}
*/		
	

mysql_free_result($rsResult);
mysql_close($_GLOBALS['connection']);

?>


</body>
</html>