class AppointmentService {
    constructor() {
        this.appointments = [];
    }

    scheduleAppointment(clientId, date) {
        if (!clientId || !date) {
            throw new Error("Cliente y fecha son obligatorios.");
        }

        const appointment = { id: this.appointments.length + 1, clientId, date };
        this.appointments.push(appointment);
        return appointment;
    }
}

module.exports = AppointmentService;