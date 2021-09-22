export const grouper = (e: any, primaryColumnNames: string[]) => primaryColumnNames.reduce((hash, name) => `${hash}${e[name] || name}`, '');
