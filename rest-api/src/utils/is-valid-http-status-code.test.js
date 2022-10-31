const isValidHttpStatusCode = require("./is-valid-http-status-code");

describe("isValidHttpStatusCode", () => {
    it("should return true when the status code is valid", () => {
        expect(isValidHttpStatusCode(200)).toBe(true);
    });

    it("should return false when the status code is invalid", () => {
        expect(isValidHttpStatusCode(999)).toBe(false);
        expect(isValidHttpStatusCode(null)).toBe(false);
        expect(isValidHttpStatusCode(undefined)).toBe(false);
        expect(isValidHttpStatusCode("")).toBe(false);
        expect(isValidHttpStatusCode("200")).toBe(false);
        expect(isValidHttpStatusCode("OK")).toBe(false);
        expect(isValidHttpStatusCode("OOOOOK")).toBe(false);
        expect(isValidHttpStatusCode(() => "HELLO WORLD")).toBe(false);
        expect(isValidHttpStatusCode([])).toBe(false);
        expect(isValidHttpStatusCode({})).toBe(false);
    });
});
