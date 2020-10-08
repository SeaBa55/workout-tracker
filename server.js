const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
// app.use(require("./routes/html-routes.js"));
// app.use(require("./public/api.js"));

app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
