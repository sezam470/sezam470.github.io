<!DOCTYPE html>
<html>
<head>
	<title>Квадраты</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="Publisher-Email" content="sezam470@gmail.com">
	<link rel="stylesheet" type="text/css" href="/assets/css/style_homework-1.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/reset.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/960.css">
</head>
<body>


<?

#Задание "5 квадратов" в PHP

$string_cont = "<div class='container_12 cont-margin'>";
echo $string_cont;
$string_grid_4 = "<div class='grid_4'>";
$string_square = "<div class='square'>";
for($i=1; $i<=5; $i++){
	if($i==4){
		echo $string_cont;
		echo "<div class='grid_4 push_4'>";
		echo "<div class='square green'>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
	} else if($i==5) {
		echo $string_cont;
		echo "<div class='grid_4 push_8'>";
		echo "<div class='square orange'>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
	} else if ($i<3){
		echo $string_grid_4;
		echo $string_square;
		echo "</div>";
		echo "</div>";
	} else {
		echo $string_grid_4;
		echo $string_square;
		echo "</div>";
		echo "</div>";
		echo "</div>";
	}	
}

?>



<!--Задание "5 квадратов" в HTML

<div class="container_12 cont-margin">
	<div class="grid_4"><div class="square"></div></div>
	<div class="grid_4"><div class="square"></div></div>
	<div class="grid_4"><div class="square"></div></div>
</div>


<div class="container_12 cont-margin">
	<div class="grid_4 push_4"><div class="square green"></div></div>
</div>


<div class="container_12 cont-margin">
	<div class="grid_4 push_8">
		<div class="square orange"></div>
	</div>
</div>

-->

</body>
</html>