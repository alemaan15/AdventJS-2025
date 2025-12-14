type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'

function runFactory(factory: Factory): Result {
    // Code here
    const movs = {
        '<': [0, -1],
        '>': [0, 1],
        'v': [1, 0],
        '^': [-1, 0]
    }

    const visited = new Map<string, number>();
    visited.set('0,0', 1);
    const board = factory.map(row => row.split(''))
    let position = [0, 0]

    while (true) {
        const x = position[0]
        const y = position[1]
        const mov = board[x][y] as '<' | '>' | 'v' | '^';

        if (board[x][y] === '.') return 'completed'

        const newX = x + movs[mov][0];
        const newY = y + movs[mov][1];

        if (
            newX < 0 || newX >= board.length || newY < 0 || newY >= board[0].length
        ) {
            return 'broken'
        }

        const keyMap: string = newX.toString() + ',' + newY.toString();
        if (visited.has(keyMap)) return 'loop'
        else visited.set(keyMap, 1)

        position = [newX, newY]
    }
}