/**
 *
 * @param {object} param0
 * - @param {object} param0.router - The router object
 * - @param {object} param0.params - The params to replace in the path
 * @returns {array} - An array of objects with the method and path of each route
 */
const getRoutesList = ({ router, params }) => {
    if (!router) {
        throw new Error(`Router is required: ${router}`);
    }

    return router.stack.map(layer => {
        if (layer.route) {
            // replace the path with the values of params object
            let path = layer.route.path;

            if (params) {
                for (const key in params) {
                    path = path.replace(`:${key}`, params[key]);
                }

                return {
                    method: layer.route.stack[0].method,
                    path
                };
            }

            return {
                method: layer.route.stack[0].method,
                path: layer.route.path
            };
        }

        return [];
    });
};

module.exports = getRoutesList;
