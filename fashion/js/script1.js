var username = prompt("Кто пришел?","");
if(!username){
	alert("Вход отменен");
} else if(username === "Админ"){
	var pass = prompt("Пароль?","");
	if(!pass){
		alert("Вход отменен");
	} else if(pass == "Черный властелин"){
		alert("Добро пожаловать!");
	} else {
		alert("Пароль неверен");
	}
	
} else {
	alert("Я вас не знаю");
}