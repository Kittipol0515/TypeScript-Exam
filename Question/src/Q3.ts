function getQuestionPart(phrases: string[]): string[] {
    let commonSubstring: string = phrases[0]; // Initialize with the first phrase
    const questionPart: string[] = [];

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


const example: string[] = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
const result: string[] = getQuestionPart(example);
console.log(result); 
