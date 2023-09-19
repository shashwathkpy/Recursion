
let array = [3,2,4,1];

function mergeSort(array)
{
    if(array.length < 2)
    {
        return array;
    }
    const mid = Math.floor(array.length/2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}


function merge(leftArray, rightArray)
{
    const sorted = [];
    while(leftArray.length && rightArray.length)
    {
        if(leftArray[0] <= rightArray[0])
        {
            sorted.push(leftArray.shift());
        }
        else
        {
            sorted.push(rightArray.shift());
        }
    }
    return [...sorted, ...leftArray, ...rightArray];
}

console.log(mergeSort(array));