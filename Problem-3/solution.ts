function drawGift(size: number, symbol: string): string {
    if (size < 2) return ''

    const header = symbol.repeat(size)
    const arraySol: string[] = []
    arraySol.push(header)


    for (let i = 0; i < size - 2; i++) {
        const middle = symbol + ' '.repeat(size - 2) + symbol
        arraySol.push(middle)
    }

    arraySol.push(header)

    return arraySol.join('\n')
}