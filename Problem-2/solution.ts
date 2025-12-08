function manufactureGifts(
    giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {

    if (giftsToProduce.length === 0) return []
    const sol: string[] = []

    giftsToProduce.forEach(gift => {
        if (gift.quantity > 0) {
            for (let i = 0; i < gift.quantity; i++) {
                sol.push(gift.toy)
            }
        }
    })

    return sol
}