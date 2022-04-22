const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

// DotEnv Config
dotenv.config({ path: "./config.env" });

// DB Connection

// App Listener
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Listening for requests on port ${port}...`);
});
