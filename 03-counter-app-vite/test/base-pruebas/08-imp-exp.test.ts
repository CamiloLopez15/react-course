import heroes from "../../src/data/hero";
import {
    getHeroeById,
    getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroByID must return hero for ID", () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: "Batman",
            owner: "DC",
        });
    });

    test("getHeroByID must return undefined if the don't exist hero", () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test("getHeroByID must return the heroes that have Marvel like owner", () => {
        const owner = "Marvel";
        const hero = getHeroesByOwner(owner);

        expect(hero).toHaveLength(2);
        expect(hero).toStrictEqual(
            heroes.filter((hero) => hero.owner === owner)
        );
    });

    test("getHeroByID must return the heroes that have DC like owner", () => {
        const owner = "DC";
        const hero = getHeroesByOwner(owner);

        expect(hero).toHaveLength(3);
        expect(hero).toStrictEqual(
            heroes.filter((hero) => hero.owner === owner)
        );
    });

    test("getHeroByID must return undefined if there aren't heroes that have the owner defined", () => {
        const owner = "Soledad";
        const hero = getHeroesByOwner(owner);

        expect(hero).toEqual([]);
    });
});
