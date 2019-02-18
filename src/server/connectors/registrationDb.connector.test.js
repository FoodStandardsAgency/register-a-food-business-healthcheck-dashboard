jest.mock("../db/db", () => ({
  Registration: {
    findAll: jest.fn(),
  },
  connectToDb: jest.fn()
}));
const { Registration, connectToDb } = require("../db/db"); 
const { getAllRegistrations } = require("./registrationDb.connector");

describe("Function: getAllRegistrations", () => {
  let result;

  describe("When: Registration.findAll returns values", () => {
    beforeEach(async () => {
      Registration.findAll.mockImplementation(() => [{ dataValues: {test: "value"}}]);
      result = await getAllRegistrations();
    });
    test("Should: return the dataValues", () => {
      expect(result[0].test).toBe("value");
    });
  });

  describe("When: Registration.findAll returns empty", () => {
    beforeEach(async () => {
      Registration.findAll.mockImplementation(() => []);
      result = await getAllRegistrations();
    });
    test("Should: return empty array", () => {
      expect(result).toEqual([]);
    });
  });

  describe("When: Registration.findAll throws error", () => {
    beforeEach(async () => {
      Registration.findAll.mockImplementation(() => {
        throw new Error("test error");
      });
      try {
        await getAllRegistrations();
      } catch(err) {
        result = err;
      }
    });
    test("Should: throw the error", () => {
      expect(result.message).toBe("test error");
    });
  });
});