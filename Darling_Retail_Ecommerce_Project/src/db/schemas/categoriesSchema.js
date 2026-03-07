const { pgTable, serial, timestamp, varchar } = require("drizzle-orm/pg-core");

const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("category_name", { length: 50 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

module.exports = { categories };
