const jwt = require("jsonwebtoken");
const { base64Encode } = require("../../utils/encoding");
const newId = require("../../utils/newid");

function isTokenValid(
    req,
    { excludeRoutes } = {
        excludeRoutes: []
    }
) {
    const authorizationHeader = req.headers.authorization;
    const route = req.originalUrl;

    if (excludeRoutes.includes(route)) {
        return {
            isValid: true
        };
    }

    if (!authorizationHeader) {
        return {
            isValid: false,
            code: "AUTHORIZATION_HEADER_NOT_FOUND",
            message: "Authorization header not found"
        };
    }

    const [, token] = authorizationHeader?.split(" ") ?? [];

    if (!token) {
        return {
            isValid: false,
            code: "TOKEN_NOT_FOUND",
            message: "Token não informado"
        };
    }

    try {
        const jwtSecret = process.env.JWT_SECRET ?? "secret";
        jwt.verify(token, jwtSecret);
        return {
            isValid: true,
            code: "TOKEN_VALID",
            message: "Token válido"
        };
    } catch (err) {
        return {
            isValid: false,
            code: "TOKEN_INVALID",
            message: "Token inválido"
        };
    }
}

function generateJWTToken(payload) {
    const jwtSecret = process.env.JWT_SECRET ?? "secret";

    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: process.env.JWT_EXPIRES_IN ?? "1h"
    });

    return token;
}

function generateRefreshToken() {
    return base64Encode(newId());
}

function generateRefreshTokenExpiresAt() {
    return new Date(
        Date.now() +
            1000 * 60 * 60 * 24 * process.env.AUTH_REFRESH_TOKEN_EXPIRES_IN_DAYS
    ); // 1month
}

module.exports = {
    isTokenValid,
    generateJWTToken,
    generateRefreshToken,
    generateRefreshTokenExpiresAt
};
