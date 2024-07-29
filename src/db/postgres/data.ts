import { db } from ".";
import { products_tb } from "./schema";

export async function selectAllProduct() {
  return await db
    .select({
      title: products_tb.title,
      sku: products_tb.sku,
      ean: products_tb.ean,
    })
    .from(products_tb)
    .limit(5);
}
