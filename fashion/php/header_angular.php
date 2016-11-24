<?

echo "<div class='header'>".
	"<div class='header-1'>".
			"<div class='header-1_norm'>".
			"<div class='headbox1 callme'>
				<div class='text'>
					Call<a href='tel:1234567890'><span>+123 456 7890</span></a>
				</div>
			</div>".
			"<div class='headbox1 account'>
				<a href='#' class='text'>My account</a>
			</div>".
			"<div class='headbox1 checkout'>
				<a href='#' class='text'>Checkout</a>
			</div>".
			"<div class='headbox1 cart'>
				<a href='#' class='text'>Cart</a>
			</div>".
			"<div class='headbox1 shop'>
				<a href='#' class='text'>Shop</a>
			</div>".
			"<div class='headbox1 watchlist'>
				<a href='#' class='text'>Watchlist</a>	
				<div class='goods watchgoods watch_zeroicon' ng-init='countwish=0'>{{countwish | number}}</div>
			</div>".
			"<div class='headbox1 currency'>
				<a>
				<div class='dollar'>
					$
				</div>
				<div class='text'>
					USD
				</div>
				</a>
					<div class='gray_arrow'>
						<div class='showCurrency'>
							<a href='#' class='sign'>&#163;GBP</a>
							<a href='#' class='sign'>&#8364;EUR</a>
							<a href='#' class='sign'>&#165;JPY</a>
							<a href='#' class='sign'>&#8355;CFP</a>
						</div>
					</div>
			</div>".
			"<div class='headbox1 language'>
				<div class='flag'></div>
				<div class='text'>
					<a href='#'>EN</a>
				</div>
			</div>".
		"</div>".
		"</div>".
		
		"<div class='header-2'>".
		"<div class='header-2_norm'>".
			"<div class='logo'>
				<a href='http://zlydnev.ru/fashion/'>Fashion</a>
			</div>".
			"<div class='home'>
				<a href='#' class='kalinga_bold'>HOME</a>
			</div>".
			"<div class='women'>
				<a href='#' class='text kalinga_bold'>WOMEN</a>
				<div class='black_arrow'>
					<div class='nav_show women_show'>
						<a href='http://zlydnev.ru/fashion/product.php'>Blouses</a>
						<a href='http://zlydnev.ru/fashion/product.php'>Skirts</a>
						<a href='http://zlydnev.ru/fashion/product.php'>Shoes</a>
					</div>
				</div>
			</div>".
			"<div class='man'>
				<div class='sticker new_small'>NEW</div>
				<a href='#' class='text kalinga_bold'>MAN</a>
				<div class='black_arrow'>
					<div class='nav_show man_show'>
						<a href='http://zlydnev.ru/fashion/product.php'>T-shirts</a>
						<a href='http://zlydnev.ru/fashion/product.php'>Pants</a>
						<a href='http://zlydnev.ru/fashion/product.php'>Costumes</a>
					</div>
				</div>
			</div>".
			"<div class='shortcode'>
				<div class='sticker hot'>HO<span>T</span></div>
				<a href='#' class='text'>SHORTCODE</a>
				<div class='black_arrow'>
					<div class='nav_show shortcode_show'>
						<a href='http://zlydnev.ru/fashion/product.php'>T-shirts</a>
						<a href='http://zlydnev.ru/fashion/product.php'>Pants</a>
						<a href='http://zlydnev.ru/fashion/product.php'>Costumes</a>
					</div>
				</div>
			</div>".
			"<div class='blog'>
				<a href='#' class='text kalinga_bold'>BLOG</a>
			</div>".
			"<div class='pages'>
				<a href='#' class='text kalinga_bold'>PAGES</a>
				<div class='black_arrow'></div>
			</div>".
			"<div class='my_cart'>
				<a href='#' class='text kalinga_bold'>MY CART</a>
			</div>".
			"<div class='buy'>
				<a href='#' class='buy_cart'></a>
				<div class='goods zeroicon' ng-init='countcart=0'>{{countcart | number}}</div>
			</div>".
			"<input type='text' placeholder='Search' class='inputSearch'/>".
			"<div class='search'>
				<div class='loupe'></div>
			</div>".
		"</div>".
		"</div>".
	"</div>";

?>