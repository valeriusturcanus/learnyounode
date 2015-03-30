// console.log(process.argv);
var list = process.argv;
var sum = 0;
for (var i = 2; i<list.length;i++){
  sum = sum+parseInt(list[i]) ;
}
console.log(sum);
// return sum;
