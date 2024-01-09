var array = process.argv;
var sum = 0 ;
for(i=2;array.length > i ;i++){
    sum = parseInt(array[i]) + sum ;
}

console.log(sum);