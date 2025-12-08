type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
    const sol: string[] = [];
    const map = new Map<string, { L: number, R: number }>()

    for (const glove of gloves) {
        if (!map.has(glove.color)) {
            map.set(glove.color, { L: 0, R: 0 })
        }

        const entry = map.get(glove.color)!
        entry[glove.hand]++
    }

    for (const [color, counts] of map) {
        const pairs = Math.min(counts.L, counts.R)

        for (let i = 0; i < pairs; i++) {
            sol.push(color)
        }
    }
    return sol;
}