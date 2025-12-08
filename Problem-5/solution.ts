type ElfDateTime =
    `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
    fromTime: ElfDateTime,
    takeOffTime: ElfDateTime
): number {
    const parse = (date: string): number => {
        const year = Number(date.slice(0, 4))
        const month = Number(date.slice(5, 7)) - 1
        const day = Number(date.slice(8, 10))
        const hour = Number(date.slice(11, 13))
        const minute = Number(date.slice(14, 16))
        const second = Number(date.slice(17, 19))

        return Date.UTC(year, month, day, hour, minute, second)
    }

    const fromTS = parse(fromTime)
    const takeTS = parse(takeOffTime)

    return Math.floor((takeTS - fromTS) / 1000)
}
