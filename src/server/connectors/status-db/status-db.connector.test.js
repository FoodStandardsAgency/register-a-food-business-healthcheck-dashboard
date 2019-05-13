const {
  getStoredStatus,
  updateStoredStatus
} = require("./status-db.connector");
const storedStatusMock = require("../../../__mocks__/storedStatusMock.json");
const mongodb = require("mongodb");
const { statusCollectionDouble } = require("./status-db.double");
jest.mock("./status-db.double");

jest.mock("mongodb");

describe("Function: getStoredStatus", () => {
  let result;
  describe("When: connection to mongo is successful", () => {
    beforeEach(async () => {
      mongodb.MongoClient.connect.mockImplementation(() => ({
        db: () => ({
          collection: () => ({
            findOne: () => storedStatusMock
          })
        })
      }));
      result = await getStoredStatus();
    });

    it("Should return an object", () => {
      expect(typeof result).toBe("object");
    });
  });

  describe("Given: the request throws an error", () => {
    beforeEach(async () => {
      process.env.DOUBLE_MODE = false;
      mongodb.MongoClient.connect.mockImplementation(() => {
        throw new Error("example mongo error");
      });

      try {
        await getStoredStatus();
      } catch (err) {
        result = err;
      }
    });

    it("should throw mongoConnectionError error", () => {
      expect(result.name).toBe("mongoConnectionError");
      expect(result.message).toBe("example mongo error");
    });
  });

  describe("when running in double mode", () => {
    beforeEach(() => {
      process.env.DOUBLE_MODE = true;
      statusCollectionDouble.findOne.mockImplementation(() => storedStatusMock);
    });

    it("should resolve with the data from the double's findOne() response", async () => {
      await expect(getStoredStatus()).resolves.toEqual(storedStatusMock);
    });
  });
});