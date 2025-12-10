/**
 * @param {any[]} arr1
 */
function first_duplicate(arr1) {
    let arr_dict = {}

    for (const val of arr1) {
        if (arr_dict[val]) {
            return val
        } else {
            arr_dict[val] = true
        }
    }
}

console.log(first_duplicate(["a", "b", "c", "d", "c", "e"]))
