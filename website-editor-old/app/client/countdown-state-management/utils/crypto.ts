import CryptoJS from "crypto-js";

export const encrypt = (text: string | undefined) => {
  if (!text) {
    return "";
  }

  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};

export const decrypt = (data: string | undefined) => {
  if (!data) {
    return "";
  }
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};
