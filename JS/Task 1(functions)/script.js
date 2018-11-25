function task1(){
	let n = +document.querySelector('.task1__input').value;
	document.querySelector('.task1').innerHTML += '<br>Все простые числа до ' + n + ': ' + findPrimeTo(n);
	
}
function task2() {
	let n = +document.querySelector('.task2__input').value;
	document.querySelector('.task2').innerHTML += '<br>'+n+' простых чисел: ' + findPrime(n);
}

function task3(){
	let n = +document.querySelector('.task3__input').value;
	document.querySelector('.task3').innerHTML += '<br> Сумма '+n+ ' чисел Фибоначчи '+sumFibon(n);
}
function task4(){
	let n = +document.querySelector('.task4__input').value;
	document.querySelector('.task4').innerHTML += '<br> Десять последних чисел: ' + tenNumbs(n);
}
function task5(){
	let string = document.querySelector('.task5__input').value;
	let array = breakToArray(string);
	document.querySelector('.task5').innerHTML += '<br> Среднее арифметическое чисел в массиве: ' + averageArray(array);
}
function task6(){
	let string = document.querySelector('.task6__input').value;
	let array = breakToArray(string);
	document.querySelector('.task6').innerHTML += '<br> Максимальное число в массиве: ' + findMax(array);
}
function task7(){
	let string = document.querySelector('.task7__input').value;
	let array = breakToArray(string);
	document.querySelector('.task7').innerHTML += '<br> Уникальные значения массива: ' + findUniqueObj(array);
}
function task8(){
	let string = document.querySelector('.task8__input').value;
	document.querySelector('.task8').innerHTML += +(isPalindrome(string) === true) ? "<br> ИСТИНА" : "<br> ЛОЖЬ";
}
function task9(){
	let numb = document.querySelector('.task9__input').value;
	document.querySelector('.task9').innerHTML += '<br>Сумма цифр: ' + sumNumeral(numb);
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function breakToArray(str){
	return str.split(' ');
}
function findPrimeTo(n){
	var result = [];
	for(let i =0; i < n; i++){
		if(isPrime(i))
			result.push(i);
	}
	return result;
}

function findPrime(n){
	var result = [];
	for (let i = 0; result.length < n; i++) {
		if (isPrime(i))
			result.push(i);
	}
	return result;
}
function sumFibon(n){
	let fibNums = [1,1];
	let fibEvenNums = [];
	let sum =0;
	for (let i = 2; fibEvenNums.length < n; i++) {
		fibNums.push(fibNums[i - 2] + fibNums[i - 1]);
		if(fibNums[i] % 2 ===0) {
			fibEvenNums.push(fibNums[i]);
			sum+=fibNums[i];
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
	if(sum.length<=10) return sum;
	else{
	for(let i = sum.length-10;i<sum.length;i++){
		tenNumb+=sum[i];
	}
	return String(+tenNumb);
	}
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
	 let result = [];
	 for (let i = 0; i < arr.length; i++) {
	 	if (result.indexOf(arr[i]) === -1) {
	 		result.push(arr[i]);
	 	}
	 }
	 return result;
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