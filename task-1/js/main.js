var dateElement = document.getElementById('date'),
	monthElement = document.getElementById('month'),
	yearElement = document.getElementById('year'),
	hourElement = document.getElementById('hour'),
	minElement = document.getElementById('min'),
	secElement = document.getElementById('sec');
	amElement = document.getElementById('am');
	pmElement = document.getElementById('pm');
	sunElement = document.getElementById('sun');
	monElement = document.getElementById('mon');
	tueElement = document.getElementById('tue');
	wedElement = document.getElementById('wed');
	thuElement = document.getElementById('thu');
	friElement = document.getElementById('fri');
	satElement = document.getElementById('sat');
	
//DATE,MONTH,YEAR//
function updateDate(){
	var dateObject = new Date(),
	    date = dateObject.getDate(),
		month = dateObject.getMonth(),
		year = dateObject.getFullYear();
	dateElement.innerText = parseNumber(date);
	monthElement.innerText = parseNumber(month+1);
	yearElement.innerText = parseNumber(year);		
}
updateDate();
function parseNumber(number){
	if(number<=9){
		return '0'+number;
	}
	else{
		return number;
	}
}
//HOURS,MIN,SEC//
function updateTime(){
	var dateObject = new Date();
		hour = dateObject.getHours(),
		min = dateObject.getMinutes(),
		sec = dateObject.getSeconds();
	hourElement.innerText = parseHour(hour);
	minElement.innerText = parseNumber(min);
	secElement.innerText = parseNumber(sec);
		
}
setInterval(updateTime,1000);

function parseHour(hour){
	if(hour <=12){
		if(hour < 10){
			return '0'+ hour;
		}
		else{
			return hour;
		}
	}
	else{
		return hour-=12;
	}

}

//AM PM//
x=new Date();
var off=x.getHours();
	if(off >= 12)
	{	
		document.getElementById('pm').classList.add("day");
	}
	else
	{	
		document.getElementById('am').classList.add("day");
	}
	
//DAYS//
x=new Date();
var currentday=x.getDay();
	if(currentday==0)
	{
		currentday="sun";
		document.getElementById('sun').classList.add("day");
	}
	else if(currentday==1)
	{
		currentday="mon";
		document.getElementById('mon').classList.add("day");
	}
    else if(currentday==2)
	{
		currentday="tue";
		document.getElementById('tue').classList.add("day");
	}
	else if(currentday==3)
	{
		currentday="wed";
		document.getElementById('wed').classList.add("day");
	}
	else if(currentday==4)
	{
		currentday="thu";
		document.getElementById('thu').classList.add("day");
	}
	else if(currentday==5)
	{
		currentday="fri";
		document.getElementById('fri').classList.add("day");
	}
	else if(currentday==6)
	{
		currentday="sat";
		document.getElementById('sat').classList.add("day");
	}





