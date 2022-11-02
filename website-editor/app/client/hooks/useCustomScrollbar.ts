/**
 * @description Returns the objet style that render a custom scrollbar
 * This is specific for Chakra UI "css" prop
 * @returns {object}
 */
export default function useCustomScrollbar() {
  return {
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },

    "&::-webkit-scrollbar-track": {
      borderRadius: "20px",
      // backgroundColor: "#2F303C",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#E2E8F0",
      borderRadius: "20px",
      "&: hover": {
        backgroundColor: "#A0AEC0",
        transition: "all 0.2s ease-in-out",
      },
    },
  };
}
