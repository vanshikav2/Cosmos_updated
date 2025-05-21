const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('./TestServer'); // Import the app

let mongoServer;
let server;  // Add a server variable

beforeAll(async () => {
  // Set up in-memory MongoDB instance
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  // Connect mongoose to the in-memory database
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  // Start the server in test mode
  server = app.listen(3001);  // Start the server on a different port for testing
});

afterAll(async () => {
  // Disconnect and stop in-memory server after all tests
  await mongoose.disconnect();
  await mongoServer.stop();
  server.close();  // Close the server after tests
});

describe('CRUD API Endpoints', () => {
  const newUser = { username: 'testuser', data: { email: 'test@example.com' } };

  it('POST /CreateUser - should create a new user', async () => {
    const response = await request(server)  // Use server, not app
      .post('/CreateUser')
      .send(newUser);
      
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('User created');
  });

  it('GET /GetData/:username - should retrieve user data', async () => {
    const response = await request(server)  // Use server, not app
      .get(`/GetData/${newUser.username}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.email).toBe(newUser.data.email);
  });

  it('PUT /UpdateData/:username - should update user data', async () => {
    const updatedData = { email: 'newemail@example.com' };
    const response = await request(server)  // Use server, not app
      .put(`/UpdateData/${newUser.username}`)
      .send({ data: updatedData });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('User updated successfully');
  });

  it('DELETE /DeleteData/:username - should delete user data', async () => {
    const response = await request(server)  // Use server, not app
      .delete(`/DeleteData/${newUser.username}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('User data deleted successfully');
  });

  it('DELETE /DeleteUser/:username - should delete user', async () => {
    const response = await request(server)  // Use server, not app
      .delete(`/DeleteUser/${newUser.username}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('User deleted successfully');
  });
});
