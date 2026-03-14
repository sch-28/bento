// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = CONFIG.greetingNight;
const gree2 = CONFIG.greetingMorning;
const gree3 = CONFIG.greetingAfternoon;
const gree4 = CONFIG.greetingEvening;

const greetEl = document.getElementById('greetings');

if (greetEl) {
	if (hour >= 23 || hour < 6) {
		greetEl.innerText = gree1;
	} else if (hour >= 6 && hour < 12) {
		greetEl.innerText = gree2;
	} else if (hour >= 12 && hour < 17) {
		greetEl.innerText = gree3;
	} else {
		greetEl.innerText = gree4;
	}
}
