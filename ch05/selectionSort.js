/**
    * @param {number[]} arr
    * @returns {number[]}
*/
function selectionSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let lowest_value_index = i;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[lowest_value_index]) {
                lowest_value_index = j;
            }
        }
        if (lowest_value_index !== i) {
            const curr_index_val = arr[i];
            arr[i] = arr[lowest_value_index];
            arr[lowest_value_index] = curr_index_val;
        }
    }
    return arr;
}


let nums = [10, 5, 2, 8, 11, 341, 345, 12, 124, 5, 1, 11, 32, 51]
console.log(selectionSort(nums));
