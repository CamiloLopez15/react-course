describe("Pruebas del Jest", () => {
    test("this test should not fail", () => {
        //? 1. Inicialización - Arrange.

        const message1 = "Hola mundo";

        //? 2. Estimulo - Arrange.

        const message2 = message1.trim();

        //? 3. Observar el comportamiento - Assert.

        expect(message1).toBe(message2);
    });
});
