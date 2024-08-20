export const fetcher = async (url: string) => {
    const response = await fetch(url, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Fetch request failed");
    }

    return await response.json();
};