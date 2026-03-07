const {
  integer,
  varchar,
  serial,
  pgTable,
  boolean,
  timestamp,
} = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("user_name", { length: 50 }),
  email: varchar("email", { length: 50 }),
  phone: varchar("phone", { length: 20 }).notNull().unique(),
  password: integer("password").notNull(),
  is_verified: boolean("is_verified").default(false),
  created_at: timestamp("created_at").defaultNow(),
});

module.exports = { users };
