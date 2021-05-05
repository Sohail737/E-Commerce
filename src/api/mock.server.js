import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

export default function setupMockServer () {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
        product: Model,
        cartItem:Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 500;
      this.resource("products");
      this.resource("cartItems");
    },

    seeds(server) {
      faker.seed(123);

      [...Array(25)].forEach((_) => {
        server.create("product", {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          brand: faker.lorem.word(),
          inStock: faker.datatype.boolean(),
          fastDelivery: faker.datatype.boolean(),
          genre:faker.random.arrayElement([
            "Fiction","Lifestyle"
          ]),
          author:faker.random.arrayElement([
            "Jon","Doe","Jane"
          ]),
          seller:faker.lorem.word,
          description:faker.lorem.sentence(130),
          ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
          discount: faker.random.arrayElement([
            10,20,30,40,50
          ]),
          idealFor: faker.random.arrayElement([
            "Men",
            "Women",
            "Girl",
            "Boy",
            "Senior",
          ]),
        });
      });

      [...Array(0)].forEach((_) => {
        server.create("cartItem", {
          id: faker.datatype.uuid(),
          productId:faker.datatype.uuid(),
          wishlisted:faker.datatype.boolean(),
          // cart:faker.random.boolean(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          discount: faker.random.arrayElement([
            10,20,30,40,50
          ]),
          fastDelivery: faker.datatype.boolean(),
          inStock: faker.datatype.boolean(),
          seller:faker.lorem.word,
          color: faker.commerce.color(),
          quantity: faker.datatype.number(5),
        });
      });
    },
  });
};
