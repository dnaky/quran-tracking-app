
export type Surah = {
    id: number,
    name: string,
    transliteration: string,
    translation: string,
    type: string,
    total_verses: number,
    verses: Verse[]
}

export type Verse = {
    id: number,
    text: string,
    translation: string,
    transliteration: string
}

export function getSurah(n: number): Surah {
    if (n > 114) return verses[0]
    else if (n < 1) return verses[0]
    else return verses[n]
}