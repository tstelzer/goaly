export const filterHtmlTags = (s: string): string => s.replace(/<\/?\w+>/g, '')
export const filterDashes = (s: string): string => s.replace(/-(?=\w+)/g, '')
