function dropGifts(warehouse: string[][], drops: number[]): string[][] {
    drops.forEach(d => {
        for (let i = warehouse.length - 1; i >= 0; i--) {
            if (warehouse[i][d] === '.') {
                warehouse[i][d] = '#';
                break;
            }
        }
    })
    return warehouse
}
