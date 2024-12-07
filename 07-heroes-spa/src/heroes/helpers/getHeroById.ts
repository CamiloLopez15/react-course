import { heroes } from "../data";

export const getHeroById = (heroId: string) => {
    return heroes.find(({ id }) => id === heroId);
};
