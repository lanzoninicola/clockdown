const {
    ValidatorResponseFailed,
    ValidatorResponseSuccessful
} = require("./validator");

describe("Validator", () => {
    it("should be a successful response", () => {
        const response = new ValidatorResponseSuccessful();
        expect(response.isSuccessful()).toBe(true);
        expect(response.isFailed()).toBe(false);
    });

    it("should be a failed response", () => {
        const response = new ValidatorResponseFailed();
        expect(response.isSuccessful()).toBe(false);
        expect(response.isFailed()).toBe(true);
    });

    it("should be a failed response with a reason", () => {
        const response = new ValidatorResponseFailed().due("reason");
        expect(response).toBeInstanceOf(ValidatorResponseFailed);
        expect(response.isSuccessful()).toBe(false);
        expect(response.isFailed()).toBe(true);
        expect(response.reason()).toBe("reason");
    });
});
