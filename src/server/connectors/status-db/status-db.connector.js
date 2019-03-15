/**
 * Updates and stores status variables
 * @module connectors/status
 */
const mongodb = require("mongodb");
const { statusCollectionDouble } = require("./status-db.double");

let client;
let statusDB;
let statusCollection;

/**
 * Sets up a connection to the status collection in the config database.
 * The client, configDB and statusCollection variables are accessible to other functions in this connector.
 */
const establishConnectionToMongo = async (statusDbUrl) => {
  if (process.env.DOUBLE_MODE === "true") {
    statusCollection = statusCollectionDouble;
  } else {
    client = await mongodb.MongoClient.connect(statusDbUrl, {
      useNewUrlParser: true
    });

    statusDB = client.db("register_a_food_business_status");

    statusCollection = statusDB.collection("status");
  }
};

/**
 * Fetches all available status values
 * *
 * @returns {object} All status values
 */
const getStoredStatus = async (statusDbUrl) => {
  try {
    await establishConnectionToMongo(statusDbUrl);
    const storedStatus = await statusCollection.findOne({
      _id: "frontEndStatus"
    });

    return storedStatus;
  } catch (err) {
    const newError = new Error();
    newError.name = "mongoConnectionError";
    newError.message = err.message;

    throw newError;
  }
};

module.exports = { getStoredStatus };
