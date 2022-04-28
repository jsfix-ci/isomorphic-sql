export const asDate = (d: number) => new Date(d).toISOString().replace('T', ' ').replace('Z', '000');
