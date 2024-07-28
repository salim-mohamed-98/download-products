import { db } from ".";
import { products_tb } from "./schema";

export async function selectAllProductName() {
  return await db
    .select({ name: products_tb.title })
    .from(products_tb)
    .limit(5);
}
