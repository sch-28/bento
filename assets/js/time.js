// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var dayName = dayNames[d.getDay()];
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var sec = ('0' + d.getSeconds()).slice(-2);
	var hh = d.getHours();
	var ampm = '';

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' pm' : ' am';
		hh = hh % 12;
		hh = hh ? hh : 12;
	}

	var hhPad = ('0' + hh).slice(-2);

	var elHour = document.getElementById('hour');
	var elSep = document.getElementById('separator');
	var elMin = document.getElementById('minutes');
	var elMonth = document.getElementById('month');
	var elDay = document.getElementById('day');

	if (elHour) elHour.innerText = hh;
	if (elSep) elSep.innerHTML = ':';
	if (elMin) elMin.innerText = min + ampm;
	if (elMonth) elMonth.innerText = mm;
	if (elDay) elDay.innerText = dd;

	// i3 status bar
	var headerTime = document.getElementById('header-time');
	var headerDate = document.getElementById('header-date');
	if (headerTime) {
		headerTime.innerText = hhPad + ':' + min + ':' + sec;
	}
	if (headerDate) {
		headerDate.innerText = dayName + ' ' + mm + ' ' + dd;
	}

	setTimeout(displayClock, 1000);
}
