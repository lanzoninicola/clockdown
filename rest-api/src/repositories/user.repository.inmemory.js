class UserRepositoryInMemory {
    constructor() {
        this.users = [];
    }

    async create(user) {
        return new Promise((resolve, reject) => {
            this.users.push(user);
            resolve(user);
        });
    }

    async findById(id) {
        return new Promise((resolve, reject) => {
            const user = this.users.find(user => user.id === id);
            resolve(user);
        });
    }

    async findByEmail(email) {
        return new Promise((resolve, reject) => {
            const user = this.users.find(user => user.email === email);
            resolve(user);
        });
    }
}

module.exports = new UserRepositoryInMemory();
