/**
 * Returns the environment variable file name used based on the current NODE_ENV
 *
 * @returns
 */
exports.getCurrentEnvironmentVariableFilename = () => {
    const env = process.env.NODE_ENV || "development";
    const filename =
        env === "production" || env === "undefined" ? ".env" : ".env." + env;

    return filename.trim();
};
