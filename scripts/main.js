//TIME
function showTime(){
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	//add 0 from function (don't move)
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;

	setInterval(showTime, 1000);

	//add 0 before hour/minute/seconds < 10
	function addZero(i){
		if(i < 10){
			return i = "0" + i;
		}else{
			return i;
		}
	}
}
showTime();

//DATE
var date = new Date();
var months = ['Januari', 'Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];
var showDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

document.getElementById('date').innerHTML = showDate;

//GREETING ACCORDING TO TIME
function greeting(){
	
}


//TIMEZONE


// //ICON & BACKGROUND CHANGE


