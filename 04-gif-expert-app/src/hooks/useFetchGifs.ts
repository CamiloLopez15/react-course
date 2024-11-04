import { useEffect, useState } from "react";
import { FormattedGif, getGifs } from "../services/getGifs";

export const useFetchGifs = (category: string) => {
    const [gifs, setGifs] = useState<FormattedGif[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getGifsFormatted = async () => {
            const gifs = await getGifs(category);
            setGifs(gifs);
            setIsLoading(false);
        };
        getGifsFormatted();
    }, [category]);

    return { gifs, isLoading };
};
