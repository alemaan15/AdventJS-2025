function findUnsafeGifts(warehouse: string[]): number {
    const directions: Record<string, [number, number]> = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1]
    };
    let count = 0;
    const board = warehouse.map(row => row.split(''))
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const el = board[i][j]
            if (el === '*') {
                const isCameraWatching = Object.entries(directions).some(([_, [dRow, dCol]]) => {
                    const newRow = i + dRow;
                    const newCol = j + dCol;

                    if (
                        newRow < 0 || newRow >= board.length ||
                        newCol < 0 || newCol >= board[0].length
                    ) {
                        return false
                    }
                    const checkedElement = board[newRow][newCol]
                    return checkedElement === '#'
                })

                if (!isCameraWatching) count++;
            }
        }
    }
    return count
}