const {
  pgTable,
  serial,
  varchar,
  integer,
  decimal,
  timestamp,
} = require("drizzle-orm/pg-core");
const { users } = require("./userSchema");

const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id),
  total_price: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 50 }).default("pending"),
  created_at: timestamp("created_at").defaultNow(),
});

module.exports = { orders };
