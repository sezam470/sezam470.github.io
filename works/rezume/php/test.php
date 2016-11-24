<!DOCTYPE html>
<html>
<head>
	<style>
		.item-red{
			color: red;
		}
		.col{
			width: 100px;
			float: left;
		}
	</style>
</head>
<body>

<?
/* Задание 1

$i = 1;
while($i <= 12){
	if($i == 4 || $i == 9){
		echo "<span class='item-red'> $i </span>";
	}else{
		echo "<span> $i </span>";
	}
	$i++;
}*/

/*

echo "<div class='col'>";
for($i=1; $i <= 12; $i++){
	
	if($i == 4 || $i == 9){
		$string = "<span class='item-red'> $i </span>";
	}else{
		$string = "<span> $i </span>";
	}
	
	if($i % 3 || $i == 12){
		echo $string;
	}else{
		echo $string;
		echo "</div>";
		echo "<div class='col'>";
	}	
}
echo "</div>"; 

*/

/*
$i = 1;
while($i <= 12){

	if($i % 2){
		$neChet .= "<span> $i </span>";
	}else{
		$chet .= "<span> $i </span>";
	}
	$i++;
}
?>

<div class="col">
	<?= $neChet ?>
</div>
<div class="col">
	<?= $chet ?>
</div>

*/
#Имена и породы
#Группы - Хозяева, имя животного и порода
#Хозяин несколько животных с именем и породой
#Передать животное от одного хозяина другому
#

$pets[0]['Вова']['NAME'] = "Муська";
$pets[0]['Вова']['BREED'] = "Британская кошка";
$pets[0]['Ира']['NAME'] = "ЮФ";
$pets[0]['Ира']['BREED'] = "Стаффордширский бультерьер";

$pets[0]['Слава'] = array( "NAME"=>"Мурка",
						   "BREED"=>"Обычная");

$pets[1]['Коля']['NAME'] = "Муська";
$pets[1]['Коля']['BREED'] = "Британская кошка";

$pets[1]['Маша']['NAME'] = "ЮФ";
$pets[1]['Маша']['BREED'] = "Стаффордширский бультерьер";

?>
<pre><? print_r($pets)?></pre>

<? foreach($pets as $key=>$group){ ?>
	<div>
	<h1><?= $key ?></h1>
		<? foreach($group as $owner=>$pet){ ?>
			<h2><?= $owner ?></h2>
			<div>
				<strong><?= $pet['BREED'] ?></strong> - <?= $pet['NAME'] ?>
			</div>
		<?}?>
	</div>
<? } ?>




</body>
</html>













