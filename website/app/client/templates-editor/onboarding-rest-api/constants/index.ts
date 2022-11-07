import { getConfig } from "../../config";

const { wp_rest_nonce: WP_REST_NONCE } = getConfig();

export { WP_REST_NONCE };
