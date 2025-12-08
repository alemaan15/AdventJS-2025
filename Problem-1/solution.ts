type Gift = string;

function filterGifts(gifts: Gift[]): Gift[] {
    return gifts.filter(g => !g.includes('#'))
}