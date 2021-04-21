const mongoose = require("mongoose");

// connects to the test database if it is a test, otherwise will connect to the production database
const mongooseConnect = (env) => {
  console.log(env);
  mongoose
    .connect("mongodb://localhost/fullyResponsive", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    })
    .catch((error) => console.log(error));

  mongoose.connection.on("error", (err) => console.log(err));
};

module.exports = {
  mongooseConnect,
  mongoose,
};
