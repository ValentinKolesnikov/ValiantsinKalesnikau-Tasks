function task1(){
	alert(findPrime());
}
function task3(){
	alert(sumFibon());
}
function task4(){
	alert('Десять последних чисел: ' + tenNumbs());
}
function task5(){
	alert('Среднее арифметическое чисел в массиве:' + averageArray());
}
function task6(){
	alert('Максимальное число в массиве: ' + findMax());
}
function task7(){
	alert('Уникальные значения массива: ' + findUnique());
}
function task8(){
	alert((isPalindrome()===true)? "ИСТИНА":"ЛОЖЬ");
}
function task9(){
	alert('Сумма цифр: ' + sumNumeral());
}

function findPrime(){
	alert('Нахождение всех простых чисел до n');
	let n = prompt('Введите n', 10);
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

function sumFibon(){
	alert('Нахождение суммы n четных чисел Фибоначчи')
	let n = prompt('Введите n', 10);
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

function tenNumbs(){
	alert('Нахождение 10 последних чисел последовательности')
	let n = prompt('Введите n', 10);
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

function averageArray(){
	alert('Нахождение среднего арифметического чисел массива');
	let array = arrayFill(0);
	let sum =0;

	for(let i =0;i<array.length;i++){
		sum += +array[i];
	}

	return sum/array.length;
}

function findMax(){
	alert('Нахождение максимального числа в массиве');
	let array = arrayFill(0);
	let max = array[0];

	for(let i=1; i<array.length;i++){
		if(max < array[i]) max = +array[i];
	}

	return max;
}

function findUnique(){
	alert('Нахождение уникальных значений массива')
	let array = arrayFill('word');
	let cloneArray = array;
	let unique;
	let uniqueArray =[];

	for(let i = 0; i < cloneArray.length; i++){
		unique = cloneArray[i];
		for (let j = i+1; j < cloneArray.length; j++) {
			if (unique === cloneArray[j]){
				cloneArray.splice(j,1);
			}
		}
		
		uniqueArray.push(unique);
	}
	 return uniqueArray;
}

function sumNumeral(){
	alert('Нахождение суммы цифр числа');
	let numb = prompt('Введите число', '445342262');
	let sum = 0;

	for(let i = 0; i < numb.length; i++){
		sum += +numb[i];
	}

	return sum;
}

function isPalindrome(){
	let string = prompt('Введите строку', 'Доход');
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