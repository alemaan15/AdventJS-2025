type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
    // Code here
    if (gifts.some(g => g > maxWeight)) return null

    let amount = 0
    let acc = 0
    for (let i = 0; i < gifts.length; i++) {
        const g = gifts[i]

        acc += g

        if (acc > maxWeight) {
            amount++;
            acc = g
        }
    }

    if (acc > 0) amount++

    return amount;
}
