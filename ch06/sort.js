/**
    * @param {number[]} arr
    * @returns {number[]}
*/
function bubbleSort(arr) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let curr_lowest_index = i;
        let curr_val = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[curr_lowest_index]) {
                curr_lowest_index = j;
            }
        }
        if (curr_lowest_index !== i) {
            arr[i] = arr[curr_lowest_index];
            arr[curr_lowest_index] = curr_val;
        }
    }
    return arr;

}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp_val = arr[i];
        let pos = i - 1;
        while (pos >= 0) {
            if (arr[pos] > temp_val) {
                arr[pos + 1] = arr[pos];
                pos--;
            } else { break; }
        }
        arr[pos + 1] = temp_val;
    }
    return arr;
}


let nums1 = [10, 5, 2, 8, 11, 341, 345, 12, 124, 5, 1, 11, 32, 51]
let nums2 = [5, 4, 3]
console.log(`Bubble Sort: ${bubbleSort(nums1)}`)
console.log(`Selection Sort: ${selectionSort(nums1)}`)
console.log(`Insertion Sort: ${insertionSort(nums1)}`)
