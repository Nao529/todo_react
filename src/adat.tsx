export type AllapotTipus = "folyamatban" | "törölve" | "létrehozva" | "kész"
export interface TodoTipus {
id: number,
tennivalo: string,
allapot: AllapotTipus
}

export const TODOLISTA: TodoTipus[] = [
    {
        id: 1,
        tennivalo: "Takarítás",
        allapot: "folyamatban"
    },
    {
        id: 2,
        tennivalo: "Felmosás",
        allapot: "létrehozva"
    },
    {
        id: 3,
        tennivalo: "edzés",
        allapot: "kész"
    },
    {
        id: 4,
        tennivalo: "létrehozva",
        allapot: "kész"
    },
]