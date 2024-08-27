function summation(n){
    let sum = 0
    for(i=1;i<=n;i++){
        sum = sum + i
    }
    return sum
}
let result = summation(4)
console.log(result);
