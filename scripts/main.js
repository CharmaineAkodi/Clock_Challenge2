//TIME
function showTime(){
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();

	//add 0 from function (don't move)
	hours = addZero(hours);
	minutes = addZero(minutes);

	document.getElementById('time').innerHTML = hours + ":" + minutes;

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

//GREETING ACCORDING TO TIME, ICON & BACKGROUND CHANGE
var time = new Date().getHours();
	if (time = 6 && time < 12) {
		document.getElementById('greeting').innerHTML = "Goodmorning, wake up traveler";
	} if (time = 12 && time < 18) {
		document.getElementById('greeting').innerHTML = "Good afternoon, traveler";
		document.body.style.background = "#69CCEA";
	} if (time = 18 && time <= 23){
		document.getElementById('greeting').innerHTML = "Good evening, traveler";
		document.body.style.background = "#C78A00";
	}
	if (time >= 0 && time < 6) {
		document.getElementById('greeting').innerHTML = "Goodnight, sleep tight traveler";
		document.body.style.background = "#150743";
	 } //-- WERKT NIET?

//MAIN ICON CHANGE
// if (time >= 6 && time < 18){
// 	document.getElementById("sun").style.backgroundImage ="url('images/sun.svg')";
// } if (time >= 18 && time < 6){
// 	document.getElementById("moon").style.backgroundImage ="url('images/half-moon.svg')";
// } -- GEBEURT NIKS?
