function revealSantaRoute(routes: string[][]): string[] {
    const sol = [routes[0][0], routes[0][1]];
    const map = new Map()
    routes.forEach(r => {
        map.set(r[0], r[1])
    })

    let current = routes[0][1]

    while (map.has(current)) {
        const next = map.get(current)
        sol.push(next)
        current = next
    }

    return sol
}
