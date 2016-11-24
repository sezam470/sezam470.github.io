<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="/assets/css/style_homework-3.css">
<link rel="stylesheet" type="text/css" href="/assets/css/960.css">
</head>
<body>

<?
include 'homework-3.php';
?>	
	
<div class="container_12">
	<div class="grid_12">
		<h1>Герои</h1>
	</div>
</div>
<? $i=1 ?>
<? foreach ($GLOBALS['arData'] as $arResult['groupID']=>$items) {?>

	<? foreach($items as $arResult['id']=>$hero){ ?>
	
		<? foreach($hero as $keys=>$arResult){
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
		
	}?>
		
	<?}?>

<?}?>


<? /*

Это распечатанный массив без html-обертки


<? foreach ($GLOBALS['arData'] as $arResult['groupID']=>$group) {?>

	<? foreach($items as $arResult['id']=>$hero){ ?>
		
		<? foreach($hero as $keys=>$arResult){ ?>
		
			<div>
				<?= $arResult['name'] ?>: <?= $arResult['superPower'] ?>
			</div>
			
		<?}?>
		
	<?}?>

<?}?>

*/

?>

</body>
</html>