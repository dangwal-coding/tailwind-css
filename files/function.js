//callback function
// function greet(name,callback){
//     console.log("hello "+name);
//     callback();
// }
// function saybye(){
//     console.log("good bye");
// }
// greet("joe",saybye);

//closure
// function outer(){
//     var count=0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// var fn=outer();
// fn();
// fn();
// fn();

// function sum(){
//     return 0;
// }
// console.log(sum());

// function addfive(){
//     return function(num){
//         return num+5;
//     }
// }
// const add=addfive();
// console.log(add(10));
// console.log(add(2));


//create a function createcounter() that uses a clouser to keep track a private count variable
function createcounter() {
    let count = 0;
    return function (action) {
        if (action === "increment") {
            count++;
        } else if (action === "decrement") {
            count--;
        } return count;
    }
}
let counter = createcounter();
counter("increment");
counter("decrement");

//clouser callback hoisting