require("dotenv").config();
const app = require("./app");
const { initDB } = require("./database");

const PORT = process.env.PORT || 3000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API corriendo en http://localhost:${PORT}`);
  });
});