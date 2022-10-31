const randomDigits = require("./random-digits");

describe("randomDigits", () => {
    it("should return a string", () => {
        expect(typeof randomDigits()).toBe("string");
    });

    it("should return a string of 4 digits by default", () => {
        expect(randomDigits().length).toBe(4);
    });

    it("should return a string of x digits", () => {
        expect(randomDigits(5).length).toBe(5);
    });

    it("should return a string of 1 digit", () => {
        expect(randomDigits(1).length).toBe(1);
    });

    it("should return a string of 6 digit", () => {
        expect(randomDigits(6).length).toBe(6);
    });
});
