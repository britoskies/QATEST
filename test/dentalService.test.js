const DentalService = require("../services/dentalService");

describe("DentalService", () => {
    let service;

    beforeEach(() => {
        service = new DentalService();
    });

    test("Debe indicar si un servicio está disponible", () => {
        expect(service.checkAvailability("Limpieza dental")).toBe(true);
    });

    test("Debe indicar si un servicio no está disponible", () => {
        expect(service.checkAvailability("Extracción")).toBe(false);
    });

    test("Debe lanzar un error si el servicio no existe", () => {
        expect(() => service.checkAvailability("Implantes")).toThrow();
    });
});