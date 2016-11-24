app.controller('BoxController', ['$scope', '$rootScope', function($scope,$rootScope) {

$scope.box_featured = [
	{
		name: "Virtual Product",
		price: "$75.00",
		img: "/fashion/img/photo5.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Women's t-shirt",
		price: "$45.00",
		img: "/fashion/img/photo6.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Special product",
		price: "$72.00",
		img: "/fashion/img/photo7.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Whith t-shirt",
		price: "$25.00",
		img: "/fashion/img/photo8.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Shirt and pants",
		price: "$99.00",
		img: "/fashion/img/photo9.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker2:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Simple t-shirt",
		price: "$20.00",
		img: "/fashion/img/photo10.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Lather Belt",
		price: "$55.00",
		img: "/fashion/img/photo11.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Category one",
		price: "$85.00",
		img: "/fashion/img/photo12.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	},
	{
		name: "Special watch",
		price: "$75.00",
		img: "/fashion/img/photo13.png",
		href: "http://zlydnev.ru/fashion/product_angular.php",
		addCart:false,
		addWish:false,
		new_sticker:true,
		isDisabled_cart:false,
		isDisabled_wish:false
	}
];

$scope.disableClick_cart = function(num) {
		console.log(num);
		if(!$scope.box_featured[num].isDisabled_cart){
			$scope.box_featured[num].isDisabled_cart = true;
			$rootScope.countcart=$rootScope.countcart + 1;
			$scope.box_featured[num].addCart = true;
		}
		
        //return false;
};

$scope.disableClick_wish = function(num) {
		console.log(num);
		if(!$scope.box_featured[num].isDisabled_wish){
			$scope.box_featured[num].isDisabled_wish = true;
			$rootScope.countwish=$rootScope.countwish + 1;
			$scope.box_featured[num].addWish = true;
		}
};

$scope.box_latest = [

];

$scope.box_bestseller = [

];

}]);