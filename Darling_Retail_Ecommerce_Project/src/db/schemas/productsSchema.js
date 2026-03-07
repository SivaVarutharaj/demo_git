const {
  pgTable,
  serial,
  varchar,
  decimal,
  integer,
  timestamp,
} = require("drizzle-orm/pg-core");

const { categories } = require("./categoriesSchema");

const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("product_name", { length: 50 }).notNull(),
  description: varchar("description", { length: 100 }),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  stock: integer("stock"),
  category_id: integer("category_id")
    .notNull()
    .references(() => categories.id),
  created_at: timestamp("created_at").defaultNow(),
});

module.exports = { products };
