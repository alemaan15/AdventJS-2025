function hasFourInARow(board: string[][]): boolean {
    const rows = board.length
    const cols = board[0].length

    // Comprobación horizontal
    for (let i = 0; i < rows; i++) {
        let count = 1
        for (let j = 1; j < cols; j++) {
            if (
                board[i][j] !== '.' &&
                board[i][j] === board[i][j - 1]
            ) {
                count++
                if (count === 4) return true
            } else {
                count = 1
            }
        }
    }

    // Comprobación vertical
    for (let j = 0; j < cols; j++) {
        let count = 1
        for (let i = 1; i < rows; i++) {
            if (
                board[i][j] !== '.' &&
                board[i][j] === board[i - 1][j]
            ) {
                count++
                if (count === 4) return true
            } else {
                count = 1
            }
        }
    }

    //Comprobacion diagonal
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const base = board[row][col]
            if (base === '.') continue

            if (
                row + 3 < rows &&
                col + 3 < cols &&
                board[row][col] === base &&
                board[row + 1][col + 1] === base &&
                board[row + 2][col + 2] === base &&
                board[row + 3][col + 3] === base
            ) {
                return true;
            }

            if (
                row + 3 < rows &&
                col - 3 >= 0 &&
                board[row][col] === base &&
                board[row + 1][col - 1] === base &&
                board[row + 2][col - 2] === base &&
                board[row + 3][col - 3] === base
            ) {
                return true;
            }
        }
    }

    return false
}
