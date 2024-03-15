const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        else if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }
        else{
            leftIndex = middleIndex +1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2,4,7,10], 4))
console.log(binarySearch([-5, 2,4,7,10], 10))
console.log(binarySearch([-5, 2,4,7,10], -5))
console.log(binarySearch([-5, 2,4,7,10], 20))

//input size is reduced by two so time complexity = O(log n)
