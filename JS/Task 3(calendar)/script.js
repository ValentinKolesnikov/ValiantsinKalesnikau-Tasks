var currentMonthsCount =0;
window.onload = function() {
	let now = new Date();
	document.body.innerHTML += '<h1 class="year">2018</h1>';
	document.body.innerHTML += '<div class="container"></div>';

	document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">';
	let year = document.querySelector('.year');
	let container = document.querySelector('.container');
	setStyle(year, 'color: #fff; text-align: center; letter-spacing: 15px; font-size: 45px; margin-bottom: 50px; ')
	setStyle(document.body, 'font-size: 15px; font-family: "Roboto", sans-serif; margin: 0; padding: 0; color: #fff; background-color: #3CB371;')
	setStyle(container, 'display: flex; flex-wrap: wrap; justify-content: space-around; background-color: #3CB371;');

	calendarShow(container, new Date(2018, 0, 1));
	calendarShow(container, new Date(2018, 1, 1));
	calendarShow(container, new Date(2018, 2, 1));
	calendarShow(container, new Date(2018, 3, 1));
	calendarShow(container, new Date(2018, 4, 1));
	calendarShow(container, new Date(2018, 5, 1));
	calendarShow(container, new Date(2018, 6, 1));
	calendarShow(container, new Date(2018, 7, 1));
	calendarShow(container, new Date(2018, 8, 1));
	calendarShow(container, new Date(2018, 9, 1));
	calendarShow(container, new Date(2018, 10, 1));
	calendarShow(container, new Date(2018, 11, 1));

	let calendar = document.querySelectorAll('.calendar');
	let days = document.querySelectorAll('.calendar__days');
	let captions = document.querySelectorAll('.calendar>caption');
	
	setMultyStyle(calendar, 'flex-basis: ' + (100 / 6) + '%; padding: 15px;');
	setMultyStyle(days, 'font-size: 20px; color: #FFE4B5;');
	setMultyStyle(captions, 'font-size: 25px; text-decoration: underline; color: #fff;');

	
}

Date.prototype.daysInMonth = function () {
	return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

function calendarShow(parent, date){

	parent.innerHTML += '<table class="calendar"></table>';

	let table = document.querySelectorAll('.calendar')[currentMonthsCount];

	table.innerHTML += '<caption>' + date.getMonthName() + '</caption>';
	table.innerHTML += '<tr class="calendar__days"></tr>';

	tableBody = table.childNodes[1];
	let daysRow = document.querySelectorAll('.calendar__days')[currentMonthsCount];
	let daysName = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'San'];
	for (let i = 1; i <= 7; i++) {
		daysRow.innerHTML += '<td class="' + daysName[i - 1] + '">' + daysName[i - 1] + '</td>';
	}
	let rowNumb = +tableBody.rows.length;
	let startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDayUpdate();
	tableBody.innerHTML += '<tr></tr>';
	for (let j = 1; j <= 7; j++) {
		tableBody.childNodes[rowNumb].innerHTML += '<td class="number"></td>';
	}
	for (let j = 1; j <= 7 - startDay; j++) {
		tableBody.rows[rowNumb].cells[new Date(date.getFullYear(), date.getMonth(), j).getDayUpdate()].innerHTML = j;
		

	}
	rowNumb++;

	for (let i = 8 - startDay; i <= date.daysInMonth(); i++) {
		tableBody.innerHTML += '<tr></tr>';
		for (let j = 1; j <= 7; j++) {
			tableBody.childNodes[rowNumb].innerHTML += '<td class="number"></td>';
		}
		for (let j = 1; j <= 7; j++) {
			if (i > date.daysInMonth()) {
				break;
			}
			tableBody.rows[rowNumb].cells[new Date(date.getFullYear(), date.getMonth(), i).getDayUpdate()].innerHTML = i;
			i++;
		}
		i--;
		rowNumb++;

	}
	for (let i = 0; i < tableBody.rows.length; i++) {

		for (let j = 0; j < tableBody.rows[i].cells.length; j++) {

			if (+tableBody.childNodes[i].childNodes[j].innerHTML == new Date().getDate() && date.getMonth() == new Date().getMonth()) {
				tableBody.childNodes[i].childNodes[j].className += ' active';
				let active = document.querySelector('.active');
				setStyle(active, 'font-weight: bold; color: black;');
			}


		}
	}
	for (let i = 0; i < tableBody.rows.length; i++) {

		for (let j = 0; j < tableBody.rows[i].cells.length; j++) {
			
			if (i > 0 && (j === 6 || j === 5) && tableBody.childNodes[i].childNodes[j].className.split(' ')[1] !== 'active') {
				tableBody.childNodes[i].childNodes[j].className += ' day-off';
			}
			let dayOff = document.querySelectorAll('.day-off');
			for (let i = 0; i < dayOff.length; i++) {
				dayOff[i].style.fontWeight = 'bold';
				dayOff[i].style.color = '#8B0000';
			}
		}
	}
	
	
	
	tableBody.style.textAlign = 'center';
	currentMonthsCount++;
}
Date.prototype.getDayUpdate = function() {
	let day = this.getDay();
	
	switch(day){
		case 0: return 6; 
		case 1: return 0;
		case 2: return 1;
		case 3: return 2;
		case 4: return 3;
		case 5: return 4;
		case 6: return 5;
	}
};
Date.prototype.getMonthName = function(){
	switch(this.getMonth()){
		case 0: return 'January';
		case 1: return 'February';
		case 2: return 'March';
		case 3: return 'April';
		case 4: return 'May';
		case 5: return 'June';
		case 6: return 'July';
		case 7: return 'August';
		case 8: return 'September';
		case 9: return 'October';
		case 10: return 'November';
		case 11: return 'December'
	}
}
function setMultyStyle(element, styleString){
	for(let i=0; i< element.length;i++){
		element[i].style.cssText += styleString;
	}
}
function setStyle(element, styleString){
	element.style.cssText += styleString;
}

