import { GIF } from "../types/gif";

export interface FormattedGif {
    id: string;
    title: string;
    url: string;
}

export const getGifs = async (category: string) => {
    const api_key = "4Qp9NceWTWV3NvVHPxGJTzRIWqPbjE9B";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;
    const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
    });
    const { data } = await response.json();
    console.log(data);

    const gifs: FormattedGif[] = (data as GIF[]).map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    return gifs;
};
