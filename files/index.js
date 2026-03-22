// var condition = parseFloat(prompt("Enter a number:"));
// if(condition < 5){
//     alert("Condition is true!");
// }else{
//     alert("Condition is false!");
// }

//wap to check a number is positive or negative
// var number = parseInt(prompt("Enter a number:"));
// if(number>0){
//     alert("The number is positive!");
// }else if(number<0){
//     alert("The number is negative!");
// }else{
//     alert("The number is zero!");
// }

//wap to check a person is eligible to vote or not
// var age= parseInt(prompt("Enter your age:"));
// if(age >= 18){
//     alert("You are eligible to vote!");
// }else{
//     alert("You are not eligible to vote!");
// }

//wap to check a person is senior citizen or not
// var age= parseInt(prompt("Enter your age:"));
// if(age >= 60){
//     alert("You are a senior citizen!");
// }else{
//     alert("You are not a senior citizen!");
// }

// var a= parseInt(prompt("Enter a number:"));
// if(a%2===0){
//     alert("The number is even!");
// }else{
//     alert("The number is odd!");
// }

//wap to find second largest number among three numbers
// var num1 = parseInt(prompt("Enter first number:"));
// var num2 = parseInt(prompt("Enter second number:"));
// var num3 = parseInt(prompt("Enter third number:"));

// if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
//     alert("The second largest number is: " + num1);
// }
// else if((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)){
//     alert("The second largest number is: " + num2);
// }
// else{
//     alert("The second largest number is: " + num3);
// }

//wap divisible by 3 and 5
// var number= parseInt(prompt("Enter a number:"));
// if(number %3===0 && number %5===0){
//     alert("The number is divisible by both 3 and 5!");
// }else if(number %3===0){
//     alert("The number is divisible by 3!");
// }else if(number %5===0){
//     alert("The number is divisible by 5!");
// }else{
//     alert("The number is not divisible by 3 or 5!");
// }
//wap number odd or even and greater than 50 or not
// var number= parseInt(prompt("Enter a number:"));
// if(number%2===0 && number>50){
//     alert("The number is even and greater than 50!");
// }else if(number%2===0 && number<=50){
//     alert("The number is even and less than or equal to 50!");
// }else if(number%2!==0 && number>50){
//     alert("The number is odd and greater than 50!");
// }else{
//     alert("The number is odd and less than or equal to 50!");
// }
//wap to check marks and grade
// var marks = parseInt(prompt("Enter your marks:"));
// if(marks>=90){
//     alert("Your grade is A+ :Excellent");
// }else if(marks>=75){
//     alert("your grade is A : Very Good");
// }else if(marks>=60){
//     alert("your grade is B :Good");
// }else if(marks>=40){
//     alert("your grade is c: Pass")
// }else{
//     alert("Fail");
// }

//take age and gender
// var age = parseInt(prompt("Enter Your age Here:"));
// var gender = prompt("Enter your gender Here:");

// if (age >= 21 && gender === "male") {
//     alert("male eligible for marriage");
// } else if (age >= 18 && gender === "female") {
//     alert("Female eligible for marriage");
// } else {
//     alert("Not eligible for marriage");
// }

// switch case/Swtich stament: a switch statement is used to execute different blocks of code depending on diffrent case

// let fruit="banana";

// switch (fruit) {
//     case "apple":
//         console.log("you like apple");
//         break;
//     case "mango":
//         console.log("you like mango");
//         break;
//     case "banana":
//         console.log("you like banana");
//         break;
//     default:
//         console.log("invalid input");
//         break;
// }


// let num = parseInt(prompt("Enter your number"));

// switch (true) {
//     case ((num % 5 === 0) && (num % 3 === 0)):
//         alert("FIZZBUZZ");
//         break;
//     case (num % 5 === 0):
//         alert("FIZZ");
//         break;
//     case (num % 3 === 0):
//         alert("BUZZ");
//         break;
//     default:
//         alert("invalid input");
//         break;
// }

// let num1=parseInt(prompt("Enter your number"));
// let num2=parseInt(prompt("Enter your number"));
// let op=prompt("Enter your Operator");
// switch (op) {
//     case "+":
//         alert(num1+num2);
//         break;
//     case "-":
//         alert(num1-num2);
//         break;
//     case "*":
//         alert(num1*num2);
//         break;
//     case "/":
//         alert(num1/num2);
//         break;
//     default:
//         alert("invalid input");
//         break;
// }

// let balance = 1000;
// let num=parseInt(prompt("Enter Menu Number\n1. check balance\n2. Deposit Money\n3. Withdraw Money\n4.exit"));
// switch (num) {
//     case 1:
//         alert("Deposit Money "+ balance);
//         break;
//     case 2:
//        var deposit=parseInt(prompt("Enter the Deposit Money"));
//        balance+=deposit
//         alert("Deposit Money "+ balance);
//         break;
//     case 3:
//         var withdraw=parseInt(prompt("Enter the withdraw Money"));
//         balance-=withdraw
//         alert("withdraw Money "+ balance);
//         break;
//     default:
//         alert("thankyou Exit......");
//         break;
// }

// let arr=[1,2,3,4,5];
// let res =[];
// for(let i=0;i<arr.length;i++){
//     // res.push(arr[i]*2);
//     let a=arr[i]*arr[i];
//     res.push(a);
// }
// console.log(res);

//count how many even and odd number in an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evencount=0;
// let oddcount=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         evencount++;
//     }
//     else{
//         oddcount++;
//     }
// }
// console.log("Even count: "+evencount);
// console.log("Odd count: "+oddcount);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         console.log("5 is found at index: " + i);
//         break;
//     } else {
//         console.log("5 is not found at index: " + i);
//     }
// }

// let language="hello world";
// console.log(language);
// let str=language.split("");
// let res= str.reverse();
// let res1=res.join("");
// console.log(res1);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));
// console.log(arr.includes(3));
// let arr = [1, 2, 3, 4, 5];
// let res = arr.slice(1,4);
// console.log(res);
// let arr = [9,8,7,6,5,1, 2, 3, 4, 5];
// console.log(arr.sort());


let arr = [15,10,25,20,35,30,45,40,55,50,65,60];
console.log(arr.slice(10,12));
// console.log(arr.slice(1,4));
// console.log(arr.sort());
// console.log(arr.indexOf(45));

