function findUniqueToy(toy: string): string {
    if (toy.length === 0) return ''

    const map = new Map<string, number>();
    for (let i = 0; i < toy.length; i++) {
        const char = toy.charAt(i).toLowerCase();
        map.set(char, (map.get(char) ?? 0) + 1)
    }

    for (let j = 0; j < toy.length; j++) {
        const char = toy.charAt(j)

        const count = map.get(char.toLowerCase())

        if (count === 1) return char;
    }
    return ''
}