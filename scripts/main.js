//TIME
var today = new Date();

document.getElementById('hours').innerHTML = today.getHours();
document.getElementById('minutes').innerHTML = today.getMinutes();

//DATE
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('date').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];

// //ICON & BACKGROUND CHANGE
// function changeTheme(){
// 	if (hours >= 7 && < 12) {

// 	}
// 	if (hours >= 12 && < 18) {

// 	}
// 	if (hours >= 18 && < 0) {

// 	}
// 	if (hours >= 0 && < 7) {

// 	}
// };

// function greeting(){
// 	if (hours = 7) {
// 	//GOODMORNING
// 	}
// 	if (hours = 22) {
// 	//GOODNIGHT
// 	}
// }
// // TIME
// function initClock() {
// 	renderClock();
// 	setInterval(renderClock, 1000);
// }

// function renderClock() {
// 	var clock = document.getElementById('clock');
// 	var time  = getCurrentTime(new Date());
// 	var sep   = flashSeperator(time['seconds']);

// 	clock.innerHTML = time['hours'] + sep +  time['minutes'];
// }

// function flashSeperator(seconds) {
// 	var sepClass = '';

// 	if (seconds % 2 === 1) {
// 		sepClass = ' class="trans"';
// 	}
// 	return '<span' + sepClass + '">:</span>';
// }

// function getCurrentTime(date) {
// 	var time = [];

// 	time['seconds'] = date.getSeconds();
// 	time['minutes'] = date.getMinutes(),
// 	time['hours']   = date.getHours();

// 	if (time['hours'] < 10) {
// 		time['hours'] = '0' + time['hours'];
// 	}
// 	if (time['minutes'] < 10) {
// 		time['minutes'] = '0' + time['minutes'];
// 	}
// 	return time;
// }

// initClock();

// //DATE



// //
// new Date().toLocaleString("en-US", {timeZone: "America/New_York"})


// //BACKGROUND CHANGE
// borderBtn.addEventListener('click', setMorningColor);
// bgColorBtn.addEventListener('click', setDayColor);
// colorBtn.addEventListener('click', setEveningColor);
// colorBtn.addEventListener('click', setNightColor);
