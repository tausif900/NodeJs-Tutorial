const app = require("./src/app");
const connectionDB = require("./src/db/db");
require("dotenv").config();

connectionDB();

app.listen(3000, () => {
  console.log("Server is started");
});
