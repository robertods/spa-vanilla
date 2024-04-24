import productList from "../components/productList.js";

export default async function(root, params) {
  root.innerHTML = await productList()
}

