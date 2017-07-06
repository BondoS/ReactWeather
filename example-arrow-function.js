var names = ['Andrew', 'Julia', 'Jen'];
//
// names.forEach(function(name){
//     console.log('foreach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFun', name);
// });
//
// names.forEach((name)=> console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Andrew',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();
// function add(a, b){
//   return a+ b;
// }
// console.log(add(1, 3));
// console.log(add(9, 0));
var addStatement = (a, b)=> { return a + b};
var addExpression = (a, b) =>  a + b ;

console.log('statement '+ addStatement(4,5) );
console.log('Expression '+ addExpression(9,5) );
