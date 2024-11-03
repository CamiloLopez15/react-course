import { GIF } from "../types/gif";

export const getGifs = async (category: string) => {
    const api_key = "4Qp9NceWTWV3NvVHPxGJTzRIWqPbjE9B";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;
    const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
    });
    const { data } = await response.json();
    console.log(data);

    const gifs = (data as GIF[]).map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    console.log(gifs);
};
