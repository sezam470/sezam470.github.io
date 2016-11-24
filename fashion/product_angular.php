<!DOCTYPE html>
<html>
<head>
	<title>Fashion e-commerce</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="stylesheet" href="../fashion/css/reset.css"/>
	<link rel="stylesheet" href="../fashion/css/bootstrap.css"/>
	<link rel="stylesheet" href="../fashion/css/base.css"/>
	<link rel="stylesheet" href="../fashion/css/angular/module_angular.css"/>
	<link rel="stylesheet" href="../fashion/css/cosmetic.css"/>
	<script src='../fashion/js/angular.min.js' type='text/javascript'></script>
	<script src='../fashion/js/app_prod.js' type='text/javascript'></script>
	<script src='../fashion/js/controller/AmountController.js'></script>
	<script src='../fashion/js/directives/amount.js'></script>
</head>
<body ng-app='App_prod'>

	<div class="wrapper">
		<? include "php/header_angular.php"; ?><!--.header-->
		<? include "php/content_product_angular.php"; ?><!--.content-->
	</div><!--.wrapper -->
	
	<? include "php/footer.php"; ?><!--.footer-->
	
	
</body>
</html>