function clearGifts(warehouse: string[][], drops: number[]): string[][] {
    drops.forEach((d) => {
        let rowAdded = -1
        for (let i = warehouse.length - 1; i >= 0; i--) {
            if (warehouse[i][d] === '.') {
                warehouse[i][d] = '#'
                rowAdded = i
                break
            }
        }

        if (rowAdded === -1) return

        let isRowComplete = true
        for (let i = 0; i < warehouse[rowAdded].length; i++) {
            if (warehouse[rowAdded][i] !== '#') {
                isRowComplete = false
                break
            }
        }

        if (isRowComplete) {
            for (let r = rowAdded; r > 0; r--) {
                warehouse[r] = [...warehouse[r - 1]]
            }
            warehouse[0] = new Array(warehouse[0].length).fill('.')
        }
    })
    return warehouse
}
