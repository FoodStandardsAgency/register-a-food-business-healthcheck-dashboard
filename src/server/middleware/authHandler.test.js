jest.mock("../config", () => ({
  USERNAME: "username",
  PASSWORD: "password"
}));

const { authHandler } = require("./authHandler");

describe("Function: authHandler", () => {
  let next = jest.fn()
  let res = {
    redirect: jest.fn()
  };

  describe("When: username is invalid", () => {
    beforeEach(() => {
      const req = {
        body: {
          username: "bad username"
        }
      }
      authHandler(req, res);
    });
    test("Should: redirect to registration-stats", () => {
      expect(res.redirect).toHaveBeenCalledWith("/registration-stats");
    });
  });

  describe("When: password is invalid", () => {
    beforeEach(() => {
      const req = {
        body: {
          password: "bad password"
        }
      }
      authHandler(req, res);
    });
    test("Should: redirect to registration-stats", () => {
      expect(res.redirect).toHaveBeenCalledWith("/registration-stats");
    });
  });

  describe("When: password and username are valid", () => {
    beforeEach(() => {
      const req = {
        body: {
          username: "username",
          password: "password"
        }
      }
      authHandler(req, res, next);
    });
    test("Should: call next", () => {
      expect(next).toHaveBeenCalled();
    });
  });
});