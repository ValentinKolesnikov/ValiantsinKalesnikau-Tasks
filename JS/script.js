function task1(){
	alert('Нахождение всех простых чисел до n');
	let n = +prompt('Введите n', 10);
	alert('Все простые числа до'+ n +': ' + findPrimeTo(n));
}
function task2() {
	alert('Нахождение n простых чисел');
	let n = +prompt('Введите n', 10);
	alert(n+' простых чисел: ' + findPrime(n));
}

function task3(){
	alert('Нахождение суммы n четных чисел Фибоначчи')
	let n = prompt('Введите n', 10);
	alert(sumFibon(n));
}
function task4(){
	alert('Нахождение 10 последних чисел последовательности')
	let n = prompt('Введите n', 10);
	alert('Десять последних чисел: ' + tenNumbs(n));
}
function task5(){
	alert('Нахождение среднего арифметического чисел массива');
	let array = arrayFill(0);
	alert('Среднее арифметическое чисел в массиве: ' + averageArray(array));
}
function task6(){
	alert('Нахождение максимального числа в массиве');
	let array = arrayFill(0);
	alert('Максимальное число в массиве: ' + findMax(array));
}
function task7(){
	alert('Нахождение уникальных значений массива')
	let array = arrayFill('word');
	alert('Уникальные значения массива: ' + findUniqueObj(array));
}
function task8(){
	let string = prompt('Введите строку', 'Доход');
	alert((isPalindrome(string)===true)? "ИСТИНА":"ЛОЖЬ");
}
function task9(){
	alert('Нахождение суммы цифр числа');
	let numb = prompt('Введите число', '445342262');
	alert('Сумма цифр: ' + sumNumeral(numb));
}



function findPrimeTo(n){	
	let numbers = [];
	point:
	for(let i=2;i<=n;i++){
		for(let j=2;j<i;j++){
			if(i % j === 0) continue point;
		}
		numbers.push(i);
	}
	return numbers;
}
function findPrime(n){
	let numbers = [];
	point:
	for (let i = 2; i > 0; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) continue point;
		}
		numbers.push(i);
		if(numbers.length === n){
			break;
		}
	}
	return numbers;
}
function sumFibon(n){
	let fibNums = [1,1];
	let sum =0;
	for(let i=2;i<Infinity;i++){
		fibNums.push(fibNums[i - 2] + fibNums[i - 1]);
		if(fibNums[i] % 2 ===0) {
			sum+=fibNums[i];
			n--;
		}
		if (n === 0) {
			break;
		}
		
	}
    return sum;
}

function tenNumbs(n){
	let sum = 0;

	for(let i =1;i<=n;i++){
		sum +=Math.pow(i,i);
	}
	sum = String(sum);
	let tenNumb = '';
	for(let i = sum.length-10;i<sum.length;i++){
		tenNumb+=sum[i];
	}
	return +tenNumb;
}

function arrayFill(def){
	let N = +prompt('Введите длинну массива', 5);
	let array = [];
	for(let i = 0; i<N ;i++){
		array.push(prompt('Введите число (осталось ' + (N-i) + ' )' , def));
	}
	return array;
}

function averageArray(array){
	let sum =0;

	for(let i =0;i<array.length;i++){
		sum += +array[i];
	}

	return sum/array.length;
}

function findMax(array){
	let max = array[0];

	for(let i=1; i<array.length;i++){
		if(max < array[i]) max = +array[i];
	}

	return max;
}

function findUnique(array){
	let str;
	let uniqueArray =[];
	point:
	for(let i = 0; i < array.length; i++){
		str = array[i];
		for (let j = 0; j < uniqueArray.length; j++) {
			if (str === uniqueArray[j]){
				continue point;
			}
		}
		uniqueArray.push(array[i]);
	}
	
	 return uniqueArray;
}

function findUniqueObj(array){
	let obj= {};
	let str;
	for(let i=0;i<array.length;i++){
		str = array[i];
		obj[str] = true;
	}

	return Object.keys(obj);
}

function sumNumeral(numb){
	let sum = 0;

	for(let i = 0; i < numb.length; i++){
		sum += +numb[i];
	}

	return sum;
}

function isPalindrome(string){
	string = string.toLowerCase();
	let newString = '';
	for (let i = string.length-1; i >= 0; i--) {
		newString += string.charAt(i);
	}
	
	if(string === newString){
		return true;
	}
	else{ 
		return false;
	}
}