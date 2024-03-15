// function insertionSort(arr){
//     for (let i = 1; i < arr.length; i++) {
//         const numberToInsert = arr[i];
//         let j = i-1
//         while(j>=0 && arr[j]>numberToInsert){
//             arr[j+1] = arr[j]
//             j-=1
//         }
//         arr[j+1] = numberToInsert
//     }
// }

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        while (j >= 0 && arr[j] > arr[i]) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = arr[i];
    }
}

const arr = [8, 20, -2, 2, -6]
insertionSort(arr)
console.log(arr);