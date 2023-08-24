function getHandScore(input: string): number {
    const cardValues: Record<string, number> = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': 11
    };
    
    const cards = input.split(' ');
    const suits: Record<string, number> = { 'S': 0, 'C': 0, 'H': 0, 'D': 0 };
    const ranks: Record<string, number> = {};
    
    for (const card of cards) {
        const suit = card[0];
        const rank = card.substring(1);
        
        suits[suit] += cardValues[rank];
        ranks[rank] = (ranks[rank] || 0) + cardValues[rank];
    }

    let maxSuitScore = 0;
    for (const suit in suits) {
        if (suits[suit] > maxSuitScore) {
            maxSuitScore = suits[suit];
        }
    }

    let score = maxSuitScore;
    for (const rank in ranks) {
        if (ranks[rank] === 30) {
            if (rank === 'A') {
                score = Math.max(score, 35);
            } else {
                score = Math.max(score, 32.5);
            }
        }
    }
    
    return score;
}


console.log(getHandScore("S8 S10 CA")); 
