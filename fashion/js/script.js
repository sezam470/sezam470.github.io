/* var a = parseInt(prompt("Сколько будет 7+8?", ""));
switch(a){
	case 10:
		alert("верно - 10");
		break;
	case 15:
		alert("верно - 15");
		break;
	case 20:
		alert("верно - 20");
		break;
	default:
		alert("не удалось посчитать");
		break;
}


var a;
for(a=0;a<=10;a++){
	if(a%2 == 0 && a!=0){
		alert(a);
	}
}


var a;
for(a=0;a<10;a++){
	console.log(a);
}



var is Weekend = null;
if(!isWeekend){
	alert("Офис закрыт");
}// Получим true

var is Weekend = undefined;
if(!isWeekend){
	alert("Офис закрыт");
}// Получим true



var result = prompt("Который час", "22");

if(result>22 || result<10){
	alert("извините, нерабочее время");
} else {
	alert("");
}



var result = prompt("Введите название цвета", "");
if(result == "желтый"){
	alert("верно");
} else if(result == "зеленый"){
	alert("верно");
} else if(result == "синий"){
	alert("верно");
} else if(result == "красный"){
	alert("верно");
} else{
	alert("неизвестный цвет");
}


/* var message = "Nastya", message1 = "hello";

		message = message1;

		alert(message);

console.log(message); - Выводит то, что хранится в переменной message. Он не блокироует страницу, в отличие от alert (в alert только если нажмем ok)	
		
var user = {name: "Олег", age: 24, work: false};

alert(user.name);

alert(typeof user); - Выводит тип переменной

Выводит остаток от деления:
var user = 7;
var user = 28;
var user3 = user2%user;



var result = confirm("Сколько вам лет?", "");
alert(result);



var result = prompt("Сколько вам лет?", "");
if(result == 28){
	alert("ok");
} else if(result == 76){
	alert("ok, 76");
} else if(result == 25) {
	alert("ok, 25");
} else {
	alert("не ok");
}

*/

/* var mess = 12;

function showMessage(type, count){
	mess = "345";
	count = 22;
	alert(type);
	alert(count);
	return count;
};

mess = showMessage("text", mess); */

/* var mess = 12;

function showMessage(type, count){
	mess = "345";
	count = 22;
	
	if(count > 0){
		else {
		}			
	}	
};

mess = showMessage("text", mess); */

/* function sleepCheck(hour){
	if(hour>8){
		alert("Вы сегодня достаточно спали" + " " + hour);
	} else if(hour<8){
		alert("Надо поспать еще" + " " + hour);
	} else {
		return;
	}
}

sleepCheck(7);
sleepCheck(10);
sleepCheck(2); */


/* var mess = "JLJLKJ";
alert(mess.toLowerCase()); //напр. пользователь вводит кое-как, мы же приводим к ниж регистру, чтобы сравнить, т.к. у нас переменная хранится в ниж. регистре */

/* var users = ["Ben", "John", "Bred"];
console.log(users.lenght); */

/*var users2 = [];
users2[0] = "12";
console.log(users2.lenght);

users2[3] = "23";
console.log(users2.lenght); */


/* var users = ["Ben", "John", "Bred"];
console.log(users);
for(var i=0; i<users.lenght; i++){
	console.log("User" + users[i]);
}  */

/*$(function(){
	$("a").hide();//Это работает медленнее
	$("a").find(".bk1").hide();//Это работает быстрее
	$(".header").children(".bk1").hide();//найти все дочернне в тегах a
	$(".bk1").parents(".header").hide();//наоборот
	$(".bk1").parent().hide();
	$(".bk1").next().hide();
	$(".bk1").prev().hide();
	
	$(".bk1").prev().show();//делает элементы изначальными по типу (напр. span -> inline)
	
	$(".bk1").prev().fadeOut();//уменьшает прозрачность до 0, а затем задает display: none;
	$(".bk1").prev().fadeIn(2000);//уменьшает прозрачность до 0, а затем задает display: block;
	$(".bk1").fadeIn("slow");//увелич прозрачность до 1
	$(".bk1").fadeIn("slow");
	$(".bk1").slideDown("slow"); */
	
$(function(){	
	$(".cart").on("mouseenter", function(){
		$(this).find(".block").stop(0).slideDown();
	}).on("mouseleave", function(){
		$(this).find(".block").stop(0).slideUp();

	});
	
});



/*$(function(){
	
$(".link").on("click",function(){
	var newDiv = $("<div class='block1'></div>");
	var newDiv2 = $("<div>").attr({"class":"block2", "id":"top"});
	$(".content").append(newDiv);
	$(".content").on("click",".block1", function{})
	
	console.log(newDiv);
	console.log(newDiv2);
	
	$(".header").after(newDiv);
	newDiv2.insertAfter(".header");
	
	$(".header").append(newDiv);//вставляет внутрь последним блоком
	$(".header").prepend(newDiv)//наоборот
	
	$(".link").empty();//удаляет все, кроме блока
	$(".link").remove();//удаляет все, сохраняя информацию о блоке, например при удалении ссылки новое событие на нее не повесится 
	$("link").detach();//удаляет все, не сохраняя информацию о блоке, например при удалении ссылки новое событие на нее удачно повесится 
	
	
	return false;
	});
});




*/







/*$("window").resize(function(){
	$(this).find("").load();
	$(this).find("").scroll();
});*/


/*
$("form").submit(function{
	$(this).find("").
});
*/



/*$("form").focus(function{
	$(this).find("").
}); */


/*$("form").blur(function{
	$(this).find(".pass").
});*/


/*var text = $("form .text").val();
if(text.length >=3){
	$(".send").prop("disabled",false);
} else {
	$(".send").prop("disabled",true);
};*/


/*$(".text").on("keyup change paste", function{
	
});*/

/*setInterval(show, 1000);

show(){
	
}*/

/*setTimeout(show, 180000);//если в течение 3х минут человек ничего не сделал, то:

function show(){
	if(user){
		alert("");
	} 
}

var user = false;
$("body").click(function(){
	
});*/

/* var timer = setInterval(show, 1000);//если нужно потом удалить сетинтервал, то сохраняем его в переменную
clearInterval(timer); */

var user = {
 name: "Vasya",
 age: 24,
sayHi: function(){
	showMessage(this);
	}
};

function showMessage(obj){
	console.log("Привет, " + obj.name + "!");
}
user.sayHi();

if("name" in user){
	console.log("Параметр есть");
}




function Animal(name){
	this.name = name;
	this.age = 23;
	this.sayHi = function(){
		console.log("Мое имя - " + this.name);
	};
};

var animal1 = new Animal("мышь");
var animal2 = new Animal("тигр");

animal1.sayHi();
animal2.sayHi();

$(".block").slideUp().remove();//Сначала схлопываем блок, потом он исчезает

$(".block1,.block2").slideUp();//Схлопываем одновременно 2 блока

.animate({"css"},1000,"linear");


.slideUp(function(){ //когда что-то на странице зависит от анимации, засовываем это в callback(callback используем только при анимации)
	callback("что-то");
}).remove();

.animate({height: "+=200px"});//

$().animate().animate();//цепочки анимаций друг за другом


$("").position().top;//живет внутри $(windows).scroll, вернет расстояние до границы родит. блока,если задан position:relative, если же не задан position:relative, то до края браузера

$("").offset().top;//вернет расстояние до края браузера, безопаснее использовать его


max-height: 200px;//например для блока корзины.
overflow y: auto;//

var mask = ".....символы...";//Проверить содержимое на соответствие правилам
var val = $(input).val();
if(val.test(mask)){
	callscore;
} else{
	alert("error");
	/*или return false*/
}


$("block").on("paste keyup change",function(){//Делаем небольшой таймаут, чтобы успеть посчитаь
	setTimeout(callscore(),100);
});



$("").find(".str").each(function(){//
	callscore($(this));
}

function callscore(str){
	str.find();
}

































