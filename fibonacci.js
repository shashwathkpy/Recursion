
function fibs(n)
{
    if(n <= 1) return [0];
    let fibonacci = [0, 1];
    for(let i = 0; i < n-2; i++)
    {
        fibonacci.push(fibonacci[i] + fibonacci[i+1]);
    }
    return fibonacci;
}

function fibsRec(n) {
    if (n === 1) return [0];
    if (n === 2) return [0,1];
    return [...fibsRec(n-1), fibsRec(n-1)[n - 2] + fibsRec(n-1)[n - 3]];
}

console.log(fibsRec(8));