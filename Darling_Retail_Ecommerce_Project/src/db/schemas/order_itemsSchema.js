const { pgTable, serial, integer, decimal } = require("drizzle-orm/pg-core");
const { orders } = require("./ordersSchema");
const { products } = require("./productsSchema");

const order_items = pgTable("order_items", {
  id: serial("id").primaryKey(),
  order_id: integer("order_id")
    .notNull()
    .references(() => orders.id),
  product_id: integer("product_id")
    .notNull()
    .references(() => products.id),
  quantity: integer("quantity"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

module.exports = { order_items };
