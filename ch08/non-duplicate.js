/**
 * @param {string} str
 */
function non_duplicate(str) {
    let str_dict = {}
    for (const letter of str) {
        if (!str_dict[letter]) {
            str_dict[letter] = 1;
        } else {
            str_dict[letter] += 1;
        }
    }

    for (const letter of str) {
        if (str_dict[letter] === 1) {
            return letter
        }
    }
    return null
}


console.log(non_duplicate("minimum"))
