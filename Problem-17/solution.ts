function hasFourLights(board: string[][]): boolean {
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

    return false
}
