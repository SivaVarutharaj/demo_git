const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on ${process.env.PORT}`);
});
