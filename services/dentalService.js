class DentalService {
    constructor() {
        this.services = [
            { id: 1, name: "Limpieza dental", available: true },
            { id: 2, name: "Extracción", available: false },
            { id: 3, name: "Ortodoncia", available: true }
        ];
    }

    checkAvailability(serviceName) {
        const service = this.services.find(item => item.name.toLowerCase() === serviceName.toLowerCase());
        if (!service) {
            throw new Error("Servicio no encontrado.");
        }
        return service.available;
    }
}

module.exports = DentalService;