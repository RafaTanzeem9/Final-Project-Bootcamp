// import .env variables
require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  secret: process.env.JWT_SECRET,
  mongo: {
    uri: process.env.MONGO_URI,
  },
};
