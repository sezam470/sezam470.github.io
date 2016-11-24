app.controller('BoxesController', ['$scope', '$rootScope', function($scope,$rootScope) {

$scope.boxes = [
	{
		name: "Special watch",
		price: "$75.00",
		img: "/fashion/img/photo14.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		sale:true,
		addCart:false,
		addWish:false,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Special watch",
		price: "$75.00",
		img: "/fashion/img/photo15.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		sale:false,
		addCart:false,
		addWish:false,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Special watch",
		price: "$75.00",
		img: "/fashion/img/photo16.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		sale:true,
		addCart:false,
		addWish:false,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Special watch",
		price: "$75.00",
		img: "/fashion/img/photo17.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		sale:true,
		addCart:false,
		addWish:false,
		isDisabled_cart:false,
		isDisabled_wish:false
	}
];

$scope.disableClick_cart = function(num) {
		console.log(num);
		if(!$scope.boxes[num].isDisabled_cart){
			$scope.boxes[num].isDisabled_cart = true;
			$rootScope.countcart=$rootScope.countcart + 1;
			$scope.boxes[num].addCart = true;
		}
};

$scope.disableClick_wish = function(num) {
		console.log(num);
		if(!$scope.boxes[num].isDisabled_wish){
			$scope.boxes[num].isDisabled_wish = true;
			$rootScope.countwish=$rootScope.countwish + 1;
			$scope.boxes[num].addWish = true;
		}
};

}]);