// This is needed to make the Units iterable like an Array

export const UnitValues = ["g", "ml", "L", "Stück", "Knolle/n", "Zehe/n",
    "Stange/n", "Bund", "Becher", "TL", "EL", "Dose/n", "Päckchen", 
    "Packung", "Flashe/n"] as const

export type Units = typeof UnitValues;

