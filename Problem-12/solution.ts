function elfBattle(elf1: string, elf2: string): number {
    let vElf1 = 3
    let vElf2 = 3

    const rounds = Math.max(elf1.length, elf2.length)

    const getDamage = (attacker?: string, defender?: string): number => {
        if (attacker === 'F') return 2;
        if (attacker === 'A' && defender !== 'B') return 1;
        return 0;
    };

    for (let i = 0; i < rounds; i++) {

        const mov1 = elf1[i];
        const mov2 = elf2[i];

        const dmgToElf1 = getDamage(mov2, mov1);
        const dmgToElf2 = getDamage(mov1, mov2);

        vElf1 -= dmgToElf1;
        vElf2 -= dmgToElf2;

        if (vElf1 <= 0 || vElf2 <= 0) break;
    }

    if (vElf1 <= 0 && vElf2 <= 0) return 0;
    if (vElf1 <= 0) return 2;
    if (vElf2 <= 0) return 1;

    if (vElf1 > vElf2) return 1;
    if (vElf2 > vElf1) return 2;
    return 0;
}