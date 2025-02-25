const AppointmentService = require("../services/appointmentService");

describe("AppointmentService", () => {
    let service;

    beforeEach(() => {
        service = new AppointmentService();
    });

    test("Debe agendar una cita correctamente", () => {
        const appointment = service.scheduleAppointment(1, "2025-03-01");
        expect(appointment).toHaveProperty("id");
        expect(appointment.clientId).toBe(1);
        expect(appointment.date).toBe("2025-03-01");
    });

    test("Debe lanzar un error si la fecha no es válida", () => {
        expect(() => service.scheduleAppointment(1, null)).toThrow();
        expect(() => service.scheduleAppointment(1, "")).toThrow();
    });

    test("Debe lanzar un error si el cliente no es válido", () => {
        expect(() => service.scheduleAppointment(null, "2025-03-01")).toThrow();
    });
});