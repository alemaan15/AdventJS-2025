function canEscape(maze: string[][]): boolean {
    let start: [number, number] = [0, 0]

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] === 'S') {
                start = [i, j]
            }
        }
    }

    let visited = new Map()

    function backtracking([row, col]: [number, number]) {
        if (row < 0 || row >= maze.length || col < 0 || col >= maze[0].length) {
            return false
        }

        if (maze[row][col] === '#') return false

        const key = row + ',' + col
        if (visited.has(key)) return false
        visited.set(key, true)

        if (maze[row][col] === 'E') return true

        if (backtracking([row + 1, col])) return true
        if (backtracking([row - 1, col])) return true
        if (backtracking([row, col + 1])) return true
        if (backtracking([row, col - 1])) return true

        return false
    }

    return backtracking(start)
}
