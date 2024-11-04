import { FormattedGif } from "../services/getGifs";

const GifGridItem = ({ title, url }: FormattedGif) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifGridItem;
