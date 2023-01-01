const mongoose = require("mongoose");
const { mongo } = require("./vars");

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      keepAlive: 1,
    });
    console.log(`mongodb is connected ${conn.connection.host}`);
  } catch (err) {
    console.log(`error:${err.message}`);
  }
};
