

let isHaveClass = (a, b) => {
	for(let i = 0; i<a.length;i++){
		if(a[i] === b) return true;
		else return false;
	}
}
let getDateInFormat = (year, month, day) => {
	if(String(month).length === 1) month = '0' + month;
	if (String(day).length === 1) day = '0' + day;
	return ''+day+'.'+month+'.'+year;
}

var currentMonthsCount = 0;
var calendarNumber = 0;

class DatePicker {

	constructor(name, parent) {
		this.name = name;
		this.date = new Date();
		this.number = calendarNumber;
		this.parent = parent;
		this.btnClick = 1;
		parent.innerHTML += '<div class="date-picker"></div>';
		this.container = document.querySelectorAll('.date-picker')[this.number];
		this.CreateInput();
		this.CreateCalendar(this.date);
		this.HideDatePicker();
		calendarNumber++;

	}
	CreateInput() {
		this.container.innerHTML += '<input type="text" class="date-picker__input">';
		this.container.innerHTML += '<button class="date-picker__button-foshow"></button>';
		this.btnFoShow = document.querySelectorAll('.date-picker__button-foshow')[this.number];
		
		this.container.addEventListener('click', this.clickDatePicker.bind(this));
	}
	CreateCalendar(date) {

		this.container.innerHTML += '<table class="date-picker__calendar calendar"></table>';
		this.table = document.querySelectorAll('.date-picker__calendar')[this.number];
		this.table.date = date;

		let daysName = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
		this.table.innerHTML += '<caption class="calendar__caption caption"><span class="caption__date">' + date.getMonthName() + ' ' + date.getFullYear() + '</span></caption>';
		let caption = document.querySelectorAll('.calendar__caption')[this.number];
		this.prevMonth = document.createElement('button');
		this.nextMonth = document.createElement('button');
		caption.appendChild(this.prevMonth);
		caption.appendChild(this.nextMonth);
		this.nextMonth.className += ' calendar__next-month month-change-btn';
		this.prevMonth.className += ' calendar__prev-month month-change-btn';
		this.prevMonth.innerHTML += '<';
		this.nextMonth.innerHTML += '>';
		this.table.innerHTML += '<tr class="calendar__days"></tr>';
		this.tableBody = this.table.childNodes[1];
		this.daysRow = document.querySelectorAll('.calendar__days')[this.number];

		for (let i = 1; i <= 7; i++) {
			this.daysRow.innerHTML += '<td class="' + daysName[i - 1] + '">' + daysName[i - 1] + '</td>';
		}

		this.rowNumb = +this.tableBody.rows.length;
		this.startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDayUpdate();
		this.tableBody.innerHTML += '<tr></tr>';

		for (let j = 1; j <= 7; j++) {
			this.tableBody.childNodes[this.rowNumb].innerHTML += '<td class="number"></td>';
		}

		for (let j = 1; j <= 7 - this.startDay; j++) {
			this.tableBody.rows[this.rowNumb].cells[new Date(date.getFullYear(), date.getMonth(), j).getDayUpdate()].innerHTML = j;
		}
		this.rowNumb++;

		for (let i = 8 - this.startDay; i <= date.daysInMonth(); i++) {
			this.tableBody.innerHTML += '<tr></tr>';
			for (let j = 1; j <= 7; j++) {
				this.tableBody.childNodes[this.rowNumb].innerHTML += '<td class="number"></td>';
			}
			for (let j = 1; j <= 7; j++) {
				if (i > date.daysInMonth()) {
					break;
				}
				this.tableBody.rows[this.rowNumb].cells[new Date(date.getFullYear(), date.getMonth(), i).getDayUpdate()].innerHTML = i;
				i++;
			}
			i--;
			this.rowNumb++;
		}

		for (let i = 0; i < this.tableBody.rows.length; i++) {

			for (let j = 0; j < this.tableBody.rows[i].cells.length; j++) {

				if (+this.tableBody.childNodes[i].childNodes[j].innerHTML == new Date().getDate() && date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear()) {
					this.tableBody.childNodes[i].childNodes[j].className += ' active';
				}


			}
		}

		for (let i = 1; i < this.tableBody.rows.length; i++) {

			for (let j = 0; j < this.tableBody.rows[i].cells.length; j++) {
				if (this.tableBody.childNodes[i].childNodes[j].textContent === ''){
					this.tableBody.childNodes[i].childNodes[j].className = 'day-prev-month';
				}
				if (i > 0 && (j === 6 || j === 5) && this.tableBody.childNodes[i].childNodes[j].className.split(' ')[1] !== 'active') {
					this.tableBody.childNodes[i].childNodes[j].className += ' day-off';
				}
			}
		}
		
		this.nextMonth = document.querySelectorAll('.calendar__next-month')[this.number];
		this.prevMonth = document.querySelectorAll('.calendar__prev-month')[this.number];
		this.cell = document.querySelectorAll('.number');
		this.cellsCount = date.daysInMonth();
		let input = document.querySelectorAll('.date-picker__input')[this.number];
		$(input).mask("99.99.9999");
		currentMonthsCount++;
	}
	HideDatePicker() {
		this.table.style.display = 'none';
	}
	ShowDatePicker() {
		this.table.style.display = '';
	}
	RemoveDatePicker() {
		this.table.remove();
		currentMonthsCount--;
	}
	clickDatePicker(event) {
		if (event.target === this.nextMonth) {
			this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1);
			this.RemoveDatePicker();
			this.CreateCalendar(this.date);
		}
		if (event.target === this.prevMonth) {
			this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1);
			this.RemoveDatePicker();
			this.CreateCalendar(this.date);
		}
		if (isHaveClass(event.target.className.split(' '), 'number'))
		{
			this.input = document.querySelectorAll('.date-picker__input')[this.number];
			this.input.value = getDateInFormat(this.date.getFullYear(), this.date.getMonth()+1, event.target.textContent);
		}
		if (this.btnFoShow.className === event.target.className) {
			if (this.btnClick === 0) {
				this.HideDatePicker();
				this.btnClick++;
			} else if (this.btnClick === 1) {
				this.ShowDatePicker();
				this.btnClick--;
			}
		}
	}
}

Date.prototype.getDayUpdate = function () {
	let day = this.getDay();

	switch (day) {
		case 0:
			return 6;
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
	}
};
Date.prototype.getMonthName = function () {
	switch (this.getMonth()) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December'
	}
}
Date.prototype.daysInMonth = function () {
	return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

window.onload = function(){
	
	let container = document.querySelectorAll('.cont');
	let now = new Date();
	let cal = new DatePicker('hello', container[0]);

	
		
}