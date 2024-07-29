import { count } from "drizzle-orm";
import { db } from ".";
import { products_tb } from "./schema";

export async function getFilteredItems(
  current_page: number,
  items_per_page: number
) {
  return await db
    .select({
      title: products_tb.title,
      sku: products_tb.sku,
      ean: products_tb.ean,
    })
    .from(products_tb)
    .limit(items_per_page)
    .offset((current_page - 1) * items_per_page);
}

export async function getTotalCountProduct(query?: string) {
  const { total } = (await db.select({ total: count() }).from(products_tb))[0];
  return total;
}
