// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getKeys = <T>(obj: T | any) => Object.keys(obj) as Array<keyof T>;
