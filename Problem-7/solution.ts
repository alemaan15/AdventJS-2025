function drawTree(height: number, ornament: string, frequency: number): string {
    const sol: string[] = [];
    let remaining = frequency;

    for (let i = 0; i < height; i++) {
        let space = ' '.repeat(height - i - 1);
        let row = space;
        for (let j = 0; j < i * 2 + 1; j++) {
            remaining--;
            if (remaining === 0) {
                row += ornament
                remaining = frequency
            }
            else {
                row += '*'
            }
        }
        sol.push(row)
    }

    const base = ' '.repeat(height - 1) + '#';
    sol.push(base)
    return sol.join('\n')
}