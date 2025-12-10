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

let arr = [4, 2, 7, 1, 3];

console.log(insertionSort(arr))
