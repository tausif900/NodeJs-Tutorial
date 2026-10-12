require("dotenv").config();
const app = require("./src/app");
const connectionDB = require("./src/DB/dbConnection");

connectionDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
