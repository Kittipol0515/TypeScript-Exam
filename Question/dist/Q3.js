"use strict";
function getQuestionPart(phrases) {
    let commonSubstring = phrases[0]; // Initialize with the first phrase
    const questionPart = [];
    for (let i = 0; i < commonSubstring.length; i++) {
        for (const phrase of phrases) {
            if (phrase.indexOf(commonSubstring) !== 0) {
                commonSubstring = commonSubstring.slice(0, -1);
                break;
            }
        }
    }
    for (const phrase of phrases) {
        const remainingPart = phrase.slice(commonSubstring.length);
        questionPart.push(remainingPart);
    }
    return questionPart;
}
const example = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
const result = getQuestionPart(example);
console.log(result);
