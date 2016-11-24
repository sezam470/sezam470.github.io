<? echo
	"<div class='content'>
			<div class='content-1'>
				<div class='slider'>
					<div class='slider_butt slider_butt_1 left'>
						<div class='slider_arrow left'></div>
					</div>
				
					<div class='slider_butt slider_butt_1 right'>
						<div class='slider_arrow right'></div>
					</div>
					<div class='slides'>
						<div class='slide shown first_slide'>
							<img src='/fashion/img/banner1.png'/>
							<div class='title'>DRESS FOR WOMEN</div>
							<div class='text1'>UP TO</div>
							<div class='text2'>70%OFF</div>
							<a href='/' class='link'>SHOP NOW</a>
						</div>
						<div class='slide'>
							<img src='/fashion/img/slide2.jpg'/>
							<div class='title'>AUTUMN 2015</div>
							<div class='text1'>UP TO</div>
							<div class='text2'>50%OFF</div>
							<a class='link'>SHOP NOW</a>
						</div>
						<div class='slide slide3'>
							<img src='/fashion/img/slide5.jpg'/>
							<div class='title'>NEW COLLECTION 2016</div>
							<div class='text1'></div>
							<div class='text2'></div>
							<a class='link'>SHOP NOW</a>
						</div>
						<div class='clear'></div>
					</div>
				</div>
			</div>
			
			
			
			<div class='content-2'>
				<a href='/' class='banner2'>
					<img src='/fashion/img/photo1.png'/>
					<div class='text1'>
						WOMEN
					</div>
					<div class='text2'>
						COLLECTION<br>
						2015
					</div>
				</a>
				
				<a href='/' class='banner3'>
					<div class='banner3_layer'>
						<div class='text'>
							NEW DESIGNER <span>MAN'S<br>
							CLOTHING</span>
						</div>
						<div class='discount'>20%Off</div>
					</div>
				</a>
				
				<div class='banner4'>
					<img src='/fashion/img/photo2.png'/>
					<div class='text1'>MAN</div>
					<div class='text2'>HANDWATCH</div>
					<a href='/'>PICK YOURS</a>
				</div>
				<div class='clear'></div>
			</div>
			
			
			<div class='content-3' ng-controller='BoxController'>
				
					<div class='part1'>
						<div class='photo1'>
							<img src='/fashion/img/photo3.png'/>
						</div>
						<div class='photo2'>
							<img src='/fashion/img/photo4.png'/>
						</div>
					</div>
					<div class='part2 product'>
						<div class='tabs2'>
							<ul class='tabs_list2'>
								<li class='featured_list'>FEATURED</li>
								<li class='latest_list'>LATEST</li>
								<li class='bestseller_list'>BEST SELLER</li>
							</ul>
							<div class='clear'></div>
							<div class='tabs_content'>
								<div class='tab featured'>
									<div class='box' ng-repeat='i in box_featured'>
										<box></box>
									</div>
								</div>	
								<div class='clear'></div>
								<div class='tab latest'></div>
								<div class='tab bestseller'></div>
							</div>
						</div>
					</div>
					<div class='clear'></div>
				
			</div><!--.content-3-->
	
			
			<div class='content-4'>
				<div class='banner5'>
					<img src='/fashion/img/banner2.png'/>
					<div class='title'>COLLECTION OF THE WEEK</div>
					<div class='text'>VITAE CONUBIA SUSCIPIT CONVALLIS VEL MAECENAS URNA. CONSECTETUER</div>
					<a href='/'>SHOP NOW</a>
				</div>
			</div>
			
			
			<div class='content-5' ng-controller='BoxesController'>
				<div class='title'>
					NEW ARRIVAL
					<div class='line'></div>
				</div>
				<div class='product newBoxes'>
					<div class='boxes' ng-repeat='i in boxes'>
						<boxes></boxes>
					</div>
				</div>
				<div class='clear'></div>
			</div>
			
			
			<div class='content-6'>
				<div class='banner6'>
					<a href='/' class='banner6_block'>
						<div class='banner6_text1'>SALE</div>
						<div class='banner6_text2'>UP TO 50%OFF</div>
					</a>
				</div>
				<div class='banner7'>
					<img src='/fashion/img/banner3.png'/>
					<div class='title'>DONT MISS OUT GET FASHION NEWS</div>
					<form method='post' name='Subscribe'>
						<div class='email'>
							<input name='email' placeholder='Email address'/>
						</div>
						<a href='http://zlydnev.ru/fashion/form_angular.php'>Subscribe</a>
					</form>
				</div>
				<div class='clear'></div>
			</div>
			
			
			<div class='content-7'>
				<div class='title'>
					OUR BRANDS
					<div class='line'></div>
				</div>
				<div class='brands'>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo1.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo6.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo2.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo1.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo4.png'/>
					</a>
					<a href='#' class='brand brand_last'>
						<img src='/fashion/img/logo5.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo7.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo8.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo6.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo9.png'/>
					</a>
					<a href='#' class='brand'>
						<img src='/fashion/img/logo10.png'/>
					</a>
					<a href='#' class='brand brand_last'>
						<img src='/fashion/img/logo11.png'/>
					</a>
					<div class='clear'></div>
				</div>
			</div>
			
			
	</div>";
		
?>





