function decodeSantaPin(code: string): string | null {
    const result: string[] = []

    let i = 0
    while (i < code.length) {

        if (code[i] !== '[') {
            i++
            continue
        }

        let j = i + 1
        let block = ""

        while (j < code.length && code[j] !== ']') {
            block += code[j]
            j++
        }

        if (j === code.length) return null;

        let digit: string | null = null

        if (block === "<") {
            if (result.length === 0) return null
            digit = result[result.length - 1]
        } else {
            const first = block[0]
            if (first < '0' || first > '9') return null

            let num = Number(first)

            for (let k = 1; k < block.length; k++) {
                const op = block[k]
                if (op === "+") num = (num + 1) % 10
                else if (op === "-") num = (num + 9) % 10
                else return null
            }

            digit = String(num)
        }

        result.push(digit)

        i = j + 1
    }
    return result.length >= 4 ? result.slice(0, 4).join("") : null
}