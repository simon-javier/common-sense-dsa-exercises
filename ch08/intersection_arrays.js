/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function array_intersection(arr1, arr2) {
    let arr_dict = {}
    let intersection = []
    for (const val of arr1) {
        arr_dict[val] = true;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr_dict[arr2[i]]) {
            intersection.push(arr2[i])
        }
    }

    return intersection;
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [0, 2, 4, 6, 8]

console.log(array_intersection(arr1, arr2))
