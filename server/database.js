const mongoose = require("mongoose");

exports.connect = function ({
  protocol = "mongodb",
  url = "",
  username,
  password,
}) {
  let dburl;
  if (username !== "" && password !== "") {
    dburl = `${protocol}://${username}:${password}@${url}`;
  } else {
    dburl = `${protocol}://${url}`;
  }

  mongoose.connect(dburl);

  mongoose.connection.on("open", function () {
    console.log("Database connected");
  });

  mongoose.connection.on("close", function () {
    console.log("Database discconnected");
  });

  mongoose.connection.on("error", function (err) {
    console.error(err);
  });

  process.on("SIGINT", function () {
    mongoose.disconnect.close(() => {
      console.log("Database discconnected");
    });
  });
};

exports.disconnect = function () {
  mongoose.disconnect.close(() => {
    console.log("Database discconnected");
  });
};
