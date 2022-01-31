import { returnAnObject, multiplyAllByTwo } from "./functionsToTest.js";

describe("La fonction returnAnObject...", () => {
    test("devrait retourner un objet avec des arguments prédéterminés", () => {
        expect(
            returnAnObject({ formation: "Dev JS", année: "2022", lieu: "IFOCOP"
         })).toStrictEqual({
            0:{ formation: "Dev JS", année: "2022", lieu: "IFOCOP" }, 
        });
    });

    test("devrait retourner une réponse si l'objet est vide", () => {
        expect(returnAnObject()).toBe("No argument was given to the function.");
    });
});

describe("La fonction multiplyByTwo...",() => {
    test("devrait retourner 2 et 4 quand on lui donne 1 et 2", () => {
        expect(multiplyAllByTwo([1, 2])).toStrictEqual([2, 4]);
    });
    test(
        "retourne une string si au moins un des arguments n'est pas un nombre"
        , () => {
        expect(multiplyAllByTwo([1, "2"])).toBe(
            "The argument is not an Array of numbers");
    });
}); 

