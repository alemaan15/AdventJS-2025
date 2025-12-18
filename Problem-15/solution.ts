type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
    // Code here

    let sol = []
    const nCols = Object.keys(data[0])
    const colLengths = new Array(nCols.length).fill(0)

    data.forEach(row => {
        const values = Object.values(row)

        values.forEach((value, index) => {
            const len = String(value).length
            colLengths[index] = Math.max(colLengths[index], len)
        })
    })

    let divider = '+'
    let header = '|'

    colLengths.forEach((len, i) => {
        divider += '-'.repeat(len + 2) + '+'
        const letter = String.fromCharCode(65 + i)
        header += ` ${letter}${' '.repeat(len - 1)} |`
    })

    sol.push(divider)
    sol.push(header)
    sol.push(divider)

    const sortedData = [...data]
    sortedData.sort((a, b) => {
        const valueA = a[sortBy]
        const valueB = b[sortBy]

        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return valueA - valueB
        }

        return String(valueA).localeCompare(String(valueB))
    })

    function drawRow(values: Array<string | number>, colLengths: number[]): string {
        let line = '|'

        values.forEach((value, index) => {
            const text = String(value)
            const padding = ' '.repeat(colLengths[index] - text.length)

            line += ` ${text}${padding} |`
        })

        return line
    }

    sortedData.map(row =>
        sol.push(drawRow(Object.values(row), colLengths))
    )

    sol.push(divider)
    return sol.join('\n')
}
