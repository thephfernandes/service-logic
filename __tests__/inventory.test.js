const request = require('supertest');
const express = require('express');
const inventoryRouter = require('../routes/inventory');
const inventoryData = require('../data/inventoryData');

const app = express();
app.use(express.json());
app.use('/api', inventoryRouter);

describe('Inventory API', () => {
  // Test GET /inventory
  describe('GET /inventory', () => {
    it('should return the inventory', async () => {
      const response = await request(app).get('/api/inventory');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(inventoryData);
    });
  });

  // Test GET /inventory/:id
  describe('GET /inventory/:id', () => {
    it('should return a specific item from the inventory', async () => {
      const itemId = 1; // Assuming item with ID 1 exists
      const response = await request(app).get(`/api/inventory/${itemId}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(itemId);
    });

    it('should return 404 for non-existing item', async () => {
      const nonExistingItemId = 999;
      const response = await request(app).get(`/api/inventory/${nonExistingItemId}`);
      expect(response.status).toBe(404);
    });
  });

  // ... More tests for other endpoints (POST, PUT, DELETE) can be written similarly
});
