import { DEV_API_URL, PROD_API_URL } from "./Data";

export const base_url =
  process.env.NODE_ENV === "development" ? DEV_API_URL : PROD_API_URL;

console.log(process.env.NODE_ENV)
export const getConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") !== null
          ? localStorage.getItem("token")
          : ""
        }`,
      Accept: "application/json",
    },
  };
};
