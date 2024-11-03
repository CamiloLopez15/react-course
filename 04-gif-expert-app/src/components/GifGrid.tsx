import { getGifs } from "../services/getGifs";

interface GifGridProps {
    category: string;
}

function GifGrid({ category }: GifGridProps) {
    getGifs(category);

    return (
        <div>
            <h3>{category}</h3>
        </div>
    );
}

export default GifGrid;
