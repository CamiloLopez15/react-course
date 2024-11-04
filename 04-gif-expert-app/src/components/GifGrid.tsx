import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

interface GifGridProps {
    category: string;
}

function GifGrid({ category }: GifGridProps) {
    const { gifs, isLoading } = useFetchGifs(category);
    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid">
                {isLoading
                ? (<h2>Loading...</h2>)
                : (gifs.map((gif) => <GifGridItem key={gif.id} {...gif} />))}
            </div>
        </div>
    );
}

export default GifGrid;
