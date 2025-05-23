export const convertPostgreDate = (date: string | Date) =>
	new Date(date).toLocaleDateString('ru');
