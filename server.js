const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8000, () =>
    console.log(`Listening on port ${server.address().port}...`),
);

class User {
    constructor() {
        this.id = faker.random.number({ min: 0, max: 20 });
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.random.number({ min: 0, max: 20 });
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

app.get('/api/users/new', (req, res) => {
    console.log(req.body);
    res.json(new User());
});

app.get('/api/companies/new', (req, res) => {
    console.log(req.body);
    res.json(new Company());
});

app.get('/api/company', (req, res) => {
    console.log(req.body);
    res.json({
        user: new User(),
        company: new Company(),
    });
});
