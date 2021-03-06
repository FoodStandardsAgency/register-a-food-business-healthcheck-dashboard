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
const establishConnectionToMongo = async statusDbUrl => {
  if (process.env.DOUBLE_MODE === "true") {
    statusCollection = statusCollectionDouble;
  } else {
    // If no connection or connection is not valid after downtime
    if (!client || !client.topology || !client.topology.isConnected()) {
      try {
        if (client && client.topology !== undefined) {
          client.close();
        }
        client = await mongodb.MongoClient.connect(statusDbUrl, {
          useNewUrlParser: true
        });
      } catch (err) {
        throw err;
      }
    }

    statusDB = client.db("register_a_food_business_status");
    statusCollection = statusDB.collection("status");
  }
};

/**
 * Fetches all available status values
 * *
 * @returns {object} All status values
 */
const getStoredStatus = async (statusDbUrl, id) => {
  console.log("status-db.connector.js getStoredStatus called");
  try {
    await establishConnectionToMongo(statusDbUrl);
    const storedStatus = await statusCollection.findOne({
      _id: id
    });

    return storedStatus;
  } catch (err) {
    const newError = new Error();
    newError.name = "mongoConnectionError";
    newError.message = err.message;

    throw newError;
  }
};

const clearMongoConnection = () => {
  client = undefined;
  statusDB = undefined;
  statusCollection = undefined;
};

module.exports = { getStoredStatus, clearMongoConnection };
