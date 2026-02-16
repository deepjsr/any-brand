import axios from "axios";

export async function getProducts() {
  try {
    const { data } = await axios.get('https://dummyjson.com/products');
    if (!data || !Array.isArray(data.products)) throw new Error("Invalid API response");
    else console.log("Products fetched successfully", data);
    return data;
  } catch (err) {
    console.error("Error Fetching Data", err);
    throw err;
  }
}