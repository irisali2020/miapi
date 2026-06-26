import request from 'supertest';
import app from '../app.js';

describe('GET /api/products', () => {
    test("espero que responda un status 200 y una lista de productos", async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

 test("POST /api/products debe crear un producto", async () => {
    const response = await request(app)
      .post("/api/products")
    //   .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Producto test CRUD",
        price: 1000,
        category: 10,
      });

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.title).toBe("Producto test CRUD");
    expect(response.body.price).toBe(1000);
    expect(response.body.category).toBe(10);

    productId = response.body.id;
  });
  
  test("GET /api/products/:id debe devolver el producto creado", async () => {
    const response = await request(app).get(`/api/products/${productId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(productId);
    expect(response.body.title).toBe("Producto test CRUD");
  });

  test("PUT /api/products/:id debe actualizar el producto", async () => {
    const response = await request(app)
      .put(`/api/products/${productId}`)
    //   .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Producto test actualizado",
        price: 2000,
        category: "indefinida",
      });

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(productId);
    expect(response.body.title).toBe("Producto test actualizado");
    expect(response.body.price).toBe(2000);
    expect(response.body.category).toBe("indefinida");
  });
  });
