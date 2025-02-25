class ClientService {
    constructor() {
        this.clients = [];
    }

    registerClient(name, email) {
        if (!name || !email) {
            throw new Error("Nombre y correo electrónico son obligatorios.");
        }

        const existingClient = this.clients.find(c => c.email === email);
        if (existingClient) {
            throw new Error("El correo electrónico ya está registrado.");
        }

        const newClient = { id: this.clients.length + 1, name, email };
        this.clients.push(newClient);
        return newClient;
    }
}

module.exports = ClientService;
