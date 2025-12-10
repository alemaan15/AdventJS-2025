function maxDepth(s: string): number {
    let maxLength = 0
    let actualLength = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '[') actualLength++
        if (s.charAt(i) === ']') actualLength--

        if (actualLength < 0) return -1

        maxLength = Math.max(actualLength, maxLength)
    }

    if (actualLength !== 0) return -1
    return maxLength;
}