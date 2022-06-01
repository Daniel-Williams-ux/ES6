const num = [5, 10, 15, 20];
num = [5, 10, 15, 100];
console.log(num) //TypeError: Assignment to const variable

/*Mutation*/

const num = [5, 10, 15, 20]
num[3] = 100;
console.log(num);

const changeMe = [5, 7, 2];
function editInChange() {
	s[0] = 2;
	s[1] = 5;
	s[2] = 7;
	console .log(changeMe);
}
editInChange();
