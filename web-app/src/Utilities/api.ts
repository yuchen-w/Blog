export const getContents = async <T>(url: string, callback: (response: T) => void) => {
	const rootItems = await fetch(url);
	callback(await rootItems.json());
};
