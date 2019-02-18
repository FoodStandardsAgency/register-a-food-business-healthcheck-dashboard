jest.mock("../connectors/registrationDb.connector", () => ({
  getAllRegistrations: jest.fn()
}));
const { getAllRegistrations } = require("../connectors/registrationDb.connector");

const { getRegistrationStats } = require("./registrations.service");

describe("Function: getRegistrationStats", () => {
  let result;

  describe("When: getAllRegistrations returns data", () => {
    beforeEach(async () => {
      getAllRegistrations.mockImplementation(() => [
        {
          council: "wrexham",
          createdAt: "date",
          updatedAt: "otherDate"
        },
        {
          council: "cardiff",
          createdAt: "date",
          updatedAt: "otherDate"
        }
      ]);
      result = await getRegistrationStats();
    });
    test("Should: return council and createdAt", () => {
      expect(result[0].council).toBe("wrexham");
      expect(result[1].createdAt).toBe("date");
    });
    test("Should: not return any other data", () => {
      expect(Object.keys(result[0]).length).toBe(2);
    });
  });

  describe("When: getAllRegistrations returns empty", () => {
    beforeEach(async () => {
      getAllRegistrations.mockImplementation(() => []);
      result = await getRegistrationStats();
    });
    test("Should: return empty array", () => {
      expect(result).toEqual([]);
    });
  });

  describe("When: getAllRegistrations throws error", () => {
    beforeEach(async () => {
      getAllRegistrations.mockImplementation(() => {
        throw new Error("test error");
      });
      try {
        await getRegistrationStats();
      } catch (err) {
        result = err;
      }
    });
    test("Should: throw the error", () => {
      expect(result.message).toBe("test error");
    });
  });
});