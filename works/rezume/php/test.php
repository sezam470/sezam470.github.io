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
/* ������� 1

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
#����� � ������
#������ - �������, ��� ��������� � ������
#������ ��������� �������� � ������ � �������
#�������� �������� �� ������ ������� �������
#

$pets[0]['����']['NAME'] = "������";
$pets[0]['����']['BREED'] = "���������� �����";
$pets[0]['���']['NAME'] = "��";
$pets[0]['���']['BREED'] = "��������������� ����������";

$pets[0]['�����'] = array( "NAME"=>"�����",
						   "BREED"=>"�������");

$pets[1]['����']['NAME'] = "������";
$pets[1]['����']['BREED'] = "���������� �����";

$pets[1]['����']['NAME'] = "��";
$pets[1]['����']['BREED'] = "��������������� ����������";

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













