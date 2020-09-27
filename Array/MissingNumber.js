let arr = [1,2,3,4,5,6,8];

function getMissingNo(a)
{
    let n = parseInt(a.length);
    //include missing number as well
    //n = n+1;
    let total = ((n+1) * (n +2)) / 2;
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum += a[i];
    }

    return total-sum;
}


console.log(getMissingNo(arr));