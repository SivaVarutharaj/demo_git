const {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
} = require("drizzle-orm/pg-core");
const { users } = require("./userSchema");

const otp_verification = pgTable("otp_verification", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => users.id),
  otp_code: varchar("otp_code", { length: 6 }).notNull(),
  expires_at: timestamp("expires_at").notNull(),
});

module.exports = { otp_verification };
