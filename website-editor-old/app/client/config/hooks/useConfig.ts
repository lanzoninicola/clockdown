import { Config } from "../types";
import getConfig from "./getConfig";

/**
 *
 * @returns The data passed from the server via script tag
 */
export default function useConfig(): Config {
  const config = getConfig();

  return {
    ...config,
  };
}
