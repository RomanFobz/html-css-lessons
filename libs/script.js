//переменная 1 = 5
//переменная 4 = 5 

//переменная 3 = переменная 1 * переменная 4

//название_функции(параметр1, параметр2, параметр3, параметрN);

// переменная10 = название_функции(параметр1, параметр2, параметр3, параметрN);

//операторы (+ - = * / ^)

// alert(5 + '2')  2-строка
// alert(5 - '2')  2-число если делить тоже число 
//приоритеты


//условия переменная5 = 100
	//если (переменная5 = 10 ) тогда 
	//добавить ссылку 
	//в ином случае 
	//удалить ссылку

//слово через точку назыв. методом

//ИМЯ_ФУНКЦИИ(){
//	САМА ФУНКЦИЯ
//}

//слово jQuery можно заменить $


//ОБРАБОТКА СОБЫТИЙ
	
// onclick - нажатие миши
// ondblclick -двойной нажатие миши
// onchange - изменения значения о поле формы
// onfocus- фокусировка на эелементе формы
// onblur - противоположноу onfocus
// onload - загрузка веб страницы в окно браузера 

//	ready значит что функция исполниться тогда когда документ будет готов
jQuery('document').ready(function(){  //document-jQuery понимает что мы говорим это всей стр.(для того что 		//бы подключать скрипты в head)
	alert('привет лал');  //вспылающее окно уведомление,alert принимает только один пар-тр
	jQuery("body").append('<a href="http://google.com">Домой<a>'); //добавление ссылки
	$('table').remove(); // удаление елементов 
	var p_clon; //оглошаем переменную p_clon
	p_clon = $('hr').clone(); // .clone клонирование елементов  и поместили в переменну p_clon
	$('body').append(p_clon); //добавили переменную p_clon
	//математичиские функции
	var katet1, katet2;
	katet1=23;         // '\n'-перенос строки
	katet2=32;
	alert(Math.round(Math.sqrt((katet1*katet1)+(katet2*katet2)))); //для применение матем. функций исп. слово Math. после точки сама функция. Math.round округление по правилам.floor-в меньшую сторону.ceil-в большую
	
	alert(8%5); //остаток от деления
	var i = 5;
	i++; //"++"-увеличение на 1   "--"- уменьшение на 1 
	alert(i);
    
	//события
	$('button').on('click', function(){
		
		var val1, val2, val3
		val1 = $('#val1').val(); //val1 присваиваем значение из инпута1,val вытаскивает значение
		val2 = $('#val2').val();
		val1 = parseInt(val1); //переводим из строчного  в численный тип инф.
		val2 = parseInt(val2);
		val3=val1+val2;
		alert(val3);
		
	}); //button-какой элемент програмируем.on-приминяеться для того что бы повесить какое-то событие на какой-то элемент.click-нажатие на кнопку.2им элементом передаем саму функцию
	
    	//события
	$('button').on('click', function(){
		
		var val1, val2, val3, val4;
		val1 = $('#val1').val(); //val1 присваиваем значение из инпута1,val вытаскивает значение
		val2 = $('#val2').val();
		val1 = parseInt(val1) * parseInt(val1); //переводим из строчного  в численный тип инф.
		val2 = parseInt(val2) * parseInt(val2);
		val3=val1+val2;
		val4=Math.sqrt(val3);
		alert(Math.round(val4));
		
	}); //button-какой элемент програмируем.on-приминяеться для того что бы повесить какое-то событие на какой-то элемент.click-нажатие на кнопку.2им элементом передаем саму функцию
	$('input').on('keyup', function(){ //события keydown-означает что кнопка нажата,keyup-отжата и отслеживает что вводиться в инпут
		val1 = $('#val1').val(); 
		val2 = $('#val2').val();
		val1 = parseInt(val1);  //переводим из строчного  в численный тип инф.
		val2 = parseInt(val2);
		val4 = val1 * val2;
		$('#zn').html(val4); //если в val или html не указать значение,то она заберет значение с елемента,а если указаьб,то вписывает.html что бы выводить не на инпуты а на блоки и т.д.
	});
	
	// функции диалоговых окон
	var test, test1;
	test = prompt('как вас зовут?','Ромка'); //спрашивает пользователя 1ое знач.-вопрос 2-ответ по умолчанию
	$('#zn').html(test); //выводим на див 
	test1 = confirm('Подтвердите действие!');
	
	
	//УСЛОВИЯ
	
	//пример
	var a1;
	a1=777;
	if(a1==555 || a1==777){  // "=="-это равно у условии ||-это "или" &&-это "и"
		alert('успех');		
	} else{
		alert('плохо');
	}
	
	//пикник
	var pogoda='теплая';
	var time='день';
	if((pogoda == 'солнечно') || (pogoda == 'теплая') && (time == 'день') ){ //если погода молнечная или теплая и сейтас день
		$('#pk').html('можно ехать на пикник'); //то можно ехать на пикник
	}else if(pogoda == 'дождь'){ //дальше проверяем на дожно (если дождь
		$('#pk').html('можно ехать,но с зонтами');	//можно ехать,но с зонтами )
	}
	else{ //в ином случае
		if(time='ночь'){ //если ночь
			$('#pk').html('на пикник ехать нельзя...Сейчас ведь ночь'); //то на пикник ехать нельзя
		}else{ //в ином случае
			$('#pk').html('на пикник ехать нельзя... ');
		}
	}
	
	var company = prompt('какая компания создала iPhone?' '');
		(company == 'Aple') ?
			alert('Верно') : alert('Не верно'); //условия.Если верно,то выполняеться 1 действие,если нет,то 2ое
	
	//ЦЫКЛЫ
	var i = 0; //цыкл while 
	while (i<3){ 
		alert=(i); //пока i будет меньше 3х будет выводиться i
		i++; //увеличение на еденицу 	
	}
	
	var a=0; //цыкл do while 
	do{   
		alert(a); //сначала тело цыкла 
		a++;
	}
	while(a<3); //потом условие

	
	var b;  //цыкл for
	for(b=0;b<3;b++){ // for(начало; условие; шаг)
		alert(b); //тело цыкла
	}
	
	
//МАССИВЫ
//в массиве могут храниться элементи с разным типом информации (число,строка....)
	var arr =["Чай","Хлеб","Сахар","Конфеты"]; //var arr =["элемент1","элемент1","элемент1","элемент1"];
	arr[3]='груша'; //замена эдемента в массиве
	arr[4]='лемон'; // что-бы добавить элемент в массив нужно написать индекс на 1 больше самого большого  
	alert(arr.length); //выведет к-во элементов в масиве
	alert(arr[3]); //выводим элемент  массива элементы масива начинаютья с 0 
	alert(arr); //выводит весь масив
	arr.pop(); //удаляет последний элемент в массиве
	arr.push('Чипсы'); //добавляет элемент в конец массива 
	arr.shift(); //удаляет первый элемент в массиве
	arr.unshift('Яблоки'); //добавляет в начало массива элемент
	
	
var names ='Миша, Катя, Петя, Коля';
	var arr1 =names.split(', '); //строчку разбили на элементы (ксловие разб (', ') ) и получился массив 
	
var arr2 = ['Миша', 'Катя', 'Петя', 'Коля'];
	var str = arr2.join(;); //из массива склеивает строку 
	
var arr3 = ['Я', 'Иду', 'Домой', 'Кушать'];	
	delete arr3[1]; //удаление 1го элемента в массиве этементы не сдвигаються тоесть эл 1 не существует вообще

var arr4 = ['Я', 'Иду', 'Домой', 'Кушать'];
	arr4.splece(1, 1); //начиная с позиции 1 удалить 1ый элемент(удаляет 1ый эл) эл сдвигаються 
	
var arr5 = ['Я', 'Иду', 'Домой', 'Кушать'];
	arr5.splice(0, 2, "школу", "бутер"); //удалить елементы от 0 до 2 и вставить ""школу", "бутер""
	
var arr6[1,2,3];
	arr6.reverse(); //выводит элементы наоборот 3 2 1
	
var arr7[1,2];
	var newArr = arr7.concat(3,4); //создает новый массив копирует туда все что в старом массиве и+ записывает 3 и 4	
	
//ФУНКЦИИ
	function name(){ // name имя функции переменные что в функции действуют только внутри её
	alert('lololo'); //тело функции
}
name(); //вызов функции
	
	
	
//ОБЪЕКТЫ
var myFriend = {     //создание объектов 
	"name" : "Alex",   //объект name со значением Alex
	"legs" : 2,
	"friends" : 50,
	"the drink" : "water"
};
myFriend.name = "Lera";   //замена имени объекта 
var nameofFriend = myFriend.name; //переменной nameofFriend присваеваем объект myFriend со свойством name
	alert(nameofFriend);
var nameofFriend1 = myFriend['the drink']; //этот способ доступа к объекту исп.  тогда когда в названии объекта есть пробел 

	
	
var testObj = {
	12 : "Kiril",
	15 : "David",
	25 : "Alex",
}
testObj["34"] = "Roman"; //добавление объектов
delete testObj[12]; //удаление объектов
var playerNumber = 12; //15ый объект 
var player = testObj[playerNumber]; //переменной player присвоили объект playerNumber под номером 15
	alert(player);
	
	
	//иерархия объектов
var myStorage = {
	"car" :{
		"inside" :{
			"glow box" : "maps",
			"passenger seat" : "crumbs"
		},
		"outside":{
			"trunk" : "Jack"
		}
	}
};
	var gloveBoxContent = myStorage.car.inside["glow box"]; //иерархия как найти  объект
	alert(gloveBoxContent);
	
	
//ПЕРЕБОР СВОЙСТВ ОБЪЕКТОВ 
var menu = {
	width: 400,
	height: 200,
	title: "Menu"
};

for (var key in menu ){  //перебирает все значения в объекте menu.   key-объект например width
	alert("Ключ " + key + "Значение" + menu[key]); //menu[key] -само значение 
}

var codes = {
	"12": "USA",
	"5": "Poland", 		//значения выводяться не попорядку а от меньшого к большому 5,12,73
	"73": "Ukraine"		//если добавить перед всеми значениями + то все будет выводить по порядку
}
for (var code in codes){
	alert(code);
}

//JQuery    //JQuery  	//JQuery 
	
//Функция 
var str="     fjf jfj fj   "
alert($.trim(str));  //$.trim уберает пробелы 
	
var test = $('#zn').html(); //обращение в id zn

var test2 = $('div.test'); //обращение к блокам с классом test
for(i=0; i < test2.length; i++){ //цыкл фо
	test2.get(i).style.color = "red"; //.get берёт элемент по индексу .style.color = "red" меняем цвет
}

setTimeout("$('p.test').get(0).style.color = 'green'", 2000); //setTimeout-через некоторое время.$('p.test').get(0)-обращаемся к парраграфу с классом тест под нулевым индексом и меняем цвет. 2000-количество милисекунд через которое элемент поменяет цвет 

var test = $("div"); //обращение ко всем тегам 
	
var img = $("img[title]"); //обращение ко всем тегам img в котором есть атрибут title
	
var link = $("#menu li a:first"); //обращение к элементу с id меню а именно к первой сылку в лишке

var link1 = $("#menu li a:eq(2)"); //обращение по id эелемента начиная с 0
	
function valid() {
		var state = $("input[name='sex']:checked").val(); //обращние к инпуту с именем секс.:cheked-это выбраный инпут .  .val()-берёт значение 
		if(!state) return $("#massage").html("<font style='color:red'>Укажите ваш пол<font><br>");				//if(!state) -если переменная пустая или неправельная "!"  .return -выходит из функциии,если на этой строчке ошибка то дальше оно не продолжпеться
	}
	
}); 





