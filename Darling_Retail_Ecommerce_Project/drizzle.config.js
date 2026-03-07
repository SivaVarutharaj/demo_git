const { defineConfig } = require("drizzle-kit");
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  out: "./drizzle",
  schema: "./src/db/schemas",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    ssl: false,
  },
});
