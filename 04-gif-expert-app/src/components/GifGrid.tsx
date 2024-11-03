import { useEffect, useState } from "react";
import { FormattedGif, getGifs } from "../services/getGifs";
import { GifGridItem } from "./GifGridItem";

interface GifGridProps {
    category: string;
}

function GifGrid({ category }: GifGridProps) {
    const [gifs, setGifs] = useState<FormattedGif[]>([]);

    useEffect(() => {
        const getGifsFormatted = async () => {
            const gifs = await getGifs(category);
            setGifs(gifs);
        };
        getGifsFormatted();
    }, [category]);

    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid">
                {gifs.map((gif) => (
                    <GifGridItem key={gif.id} {...gif} />
                ))}
            </div>
        </div>
    );
}

export default GifGrid;
