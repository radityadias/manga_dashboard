export interface MangaCardData {
    id: number;
    image: string;
    title: string;
    genre?: string[];
    rating?: number;
    status?: string;
    description?: string;
    language?: string;
    author?: string;
    newChapter?: {
        language: string;
        chapter: string;
        releaseTime: string;
        scanlation: string;
    }[];
}

export interface Relationship {
    id: string;
    type: string;
    related: string | "monochrome" | "main_story" | "adapted_from" | "based_on" | "prequel" | "side_story" | "doujinshi" | "same_franchise" | "shared_universe" | "sequel" | "spin_off" |  "alternate_story" | "alternate_version" | "preserialization" | "colored" | "serialization";
    attributes: object | null;
}

export interface LocalizedString {
    [key: string]: string;
}

export interface TagAttributes {
    name: LocalizedString;
    description: LocalizedString;
    group: string | "content" | "format" | "genre" | "theme",
    version: number;
}

export interface MangaAttributes {
    title: LocalizedString;
    altTitles: LocalizedString[];
    description: LocalizedString;
    isLocked: boolean;
    links: LocalizedString;
    originalLanguage: string;
    lastVolume: string | null;
    lastChapter: string | null;
    publicationDemographic: string | null | "shounen" | "shoujo" | "josei" | "seinen";
    status: string | "completed" | "ongoing" | "hiatus" | "cancelled";
    year: number | null;
    contentRating: string | "safe" | "suggestive" | "erotica" | "pornographic";
    chapterNumbersResetOnNewVolume: boolean;
    availableTranslatedLanguages: string[];
    latestUploadedChapter: string;
    tags: [
        id: string,
        type: string | "tag",
        attributes: TagAttributes,
        relationships: Relationship[],
    ]
    state: string | "draft" | "submitted" | "accepted" | "rejected";
    version: number;
    createdAt: string;
    updatedAt: string;
    relationships: Relationship[];
}

export interface Manga {
    id: string;
    type: 'manga';
    attributes: MangaAttributes;
}

export type MangaArray = Manga[];