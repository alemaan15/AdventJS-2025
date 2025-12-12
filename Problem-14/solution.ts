type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
    function search(obj: Workshop): Path {
        for (const [k, v] of Object.entries(obj)) {
            if (v === gift) return [k]

            if (typeof v === 'object' && v !== null) {
                const subPath = search(v)

                if (subPath.length > 0) {
                    return [k, ...subPath];
                }
            }
        }

        return []
    }

    return search(workshop);
}
