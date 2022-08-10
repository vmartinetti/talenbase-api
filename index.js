const path = require("path");

const app = require("./app")

const mongoConnect = require("./util/database").mongoConnect;

app.listen(8080, () => {
  console.log("Talenbase connected, API is listening on port 3001");
});

mongoConnect(() => {
  console.log("MongoDB Connected");
});
