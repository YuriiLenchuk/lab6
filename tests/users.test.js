const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Customer = require('../controllers/db');

const uri =
    'mongodb+srv://lenchukyurii:QWEa1234@cluster0.uaxwfmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
beforeAll(async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /customer', () => {
    it('should return all customer', async () => {
        const response = await request(app).get('/customer');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe('POST /customer', () => {
    it('should create a new customer', async () => {
        const newCustomer = {
            CustomerID: 4,
            Name: 'Test Customer',
            PassportData: '123456789',
            DateOfBirth: '1990-01-01',
            Address: 'Test Address',
            Comment: 'Test Comment',
        };
        const response = await request(app).post('/customer/new').send(newCustomer);
        expect(response.status).toBe(201);
    });
});

describe('DELETE /customer/:id', () => {
    it('should delete a customer', async () => {
        const response = await request(app).delete('/customer/delete/4');
        expect(response.status).toBe(201);
    });
});
