type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

function moveReno(board: Board, moves: Moves): Result {
    const directions: Record<string, [number, number]> = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1]
    };

    const arrayBoard = board.split('\n').slice(1, -1).map(row => row.split(''))

    const maxRows = arrayBoard.length;
    const maxCols = arrayBoard[0].length;

    let reindeerPosition: [number, number] = [0, 0]
    for (let i = 0; i < arrayBoard.length; i++) {
        for (let j = 0; j < arrayBoard[i].length; j++) {
            if (arrayBoard[i][j] === '@') {
                reindeerPosition = [i, j]
                break
            }
        }
    }

    for (let k = 0; k < moves.length; k++) {
        const move = moves.charAt(k)
        const [dRow, dCol] = directions[move];

        const newRow = reindeerPosition[0] + dRow;
        const newCol = reindeerPosition[1] + dCol;

        if (
            newRow < 0 || newRow >= maxRows ||
            newCol < 0 || newCol >= maxCols
        ) {
            return 'crash';
        }

        reindeerPosition = [newRow, newCol];

        const cell = arrayBoard[newRow][newCol];

        if (cell === '*') return 'success';
        if (cell === '#') return 'crash'
    }

    return 'fail';
}
