import { FormattedGif } from "../services/getGifs";

export const GifGridItem = ({ title, url }: FormattedGif) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};
