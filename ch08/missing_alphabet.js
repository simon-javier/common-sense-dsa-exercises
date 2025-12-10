/**
    * @param {string} sent
    */
function missing_alphabet(sent) {
    let sent_dict = {}
    for (const letter of sent) {
        if (letter !== " ") {
            sent_dict[letter.toLowerCase()] = true
        }
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (const letter of alphabet) {
        if (!sent_dict[letter]) {
            return letter;
        }
    }
}

console.log(missing_alphabet("the quick brown box jumps over the lazy dog"))
