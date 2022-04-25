const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

// DotEnv Config
dotenv.config({ path: "./config.env" });

// DB Connection
const DB = process.env.DB_STRING.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => console.log("DB Connection Successful!"));

// App Listener
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listening for requests on port ${port}...`);
});
