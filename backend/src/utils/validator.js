class ValidatorResponse {
    error = false;
    errorMessage = "";

    isFailed() {
        return this.error === true;
    }

    isSuccessful() {
        return this.error === false;
    }

    reason() {
        return this.errorMessage;
    }
}

class ValidatorResponseSuccessful extends ValidatorResponse {}

class ValidatorResponseFailed extends ValidatorResponse {
    constructor() {
        super();
        this.error = true;
    }

    due(errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}

module.exports = {
    ValidatorResponse,
    ValidatorResponseSuccessful,
    ValidatorResponseFailed
};
