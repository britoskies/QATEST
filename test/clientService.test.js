const ClientService = require("../services/clientService");

describe("clientService", () => {
    let service;

    beforeEach(() => {
        service = new ClientService();
    });

    test("Debe registrar un cliente con datos válidos", () => {
        const client = service.registerclient("Juan Pérez", "juan@example.com");
        expect(client).toHaveProperty("id");
        expect(client.name).toBe("Juan Pérez");
        expect(client.email).toBe("juan@example.com");
    });

    test("Debe lanzar un error si falta información", () => {
        expect(() => service.registerclient("", "juan@example.com")).toThrow();
        expect(() => service.registerclient("Juan Pérez", "")).toThrow();
    });

    test("Debe lanzar un error si el correo ya está registrado", () => {
        service.registerclient("Juan Pérez", "juan@example.com");
        expect(() => service.registerclient("Pedro Gómez", "juan@example.com")).toThrow();
    });
});