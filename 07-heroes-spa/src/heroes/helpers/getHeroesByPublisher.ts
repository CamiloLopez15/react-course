import { heroes } from "../data";

export const getHeroesByPublisher = (publisher: string) => {
    const publishers = ["Marvel Comics", "DC Comics"];
    if (!publishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
