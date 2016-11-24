app_prod.controller('AmountController', ['$scope', '$rootScope', function($scope,$rootScope) {
	
$scope.amounts = [
	{
		addCart:false,
		isDisabled_addcart:false
	}
];

this.amount = parseInt(this.amount);

$scope.disableClick_addCart = function(num) {
		console.log(num);
		if(!$scope.amounts[num].isDisabled_addcart){
			$scope.amounts[num].isDisabled_addcart = true;
			$rootScope.countcart=$rootScope.countcart + this.amount;
			this.amount = 0;
			$scope.amounts[num].addCart = true;
		}
};

$scope.click_plus = function(num){
	if(!$scope.amounts[num].isDisabled_addcart & this.amount<99){
		this.amount=parseInt(this.amount) + 1;
	}
	
};

$scope.click_minus = function(num){
	if(!$scope.amounts[num].isDisabled_addcart & this.amount>1){
		this.amount=this.amount - 1;
	}
	
};

}]);