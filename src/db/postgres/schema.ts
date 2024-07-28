import { Many, relations } from "drizzle-orm";
import {
  text,
  integer,
  uniqueIndex,
  primaryKey,
  pgTable,
  json,
} from "drizzle-orm/pg-core";

type LanuageDataType = { en: string; nl: string; fr: string; de: string };

//  products table
export const products_tb = pgTable("products", {
  sku: text("sku").primaryKey(),
  ean: text("ean"),
  title: json("name").$type<LanuageDataType>(),
  brand: json("brand"),
  images: json("images").$type<string[]>().notNull(),
  manual_url: text("manual_url"),
  detail: json("detail").$type<LanuageDataType>(),
  description: json("description").$type<LanuageDataType>(),
  price_std: integer("price_std").default(0),
  price_adv: integer("price_adv").default(0),
});

export const productsRelations = relations(products_tb, ({ many }) => ({
  productsToKtypes: many(productsToKtypes_tb),
}));

export type Product = typeof products_tb.$inferSelect;
export type NewProduct = typeof products_tb.$inferInsert;

//  ktypes table
export const ktypes_tb = pgTable("ktypes", {
  id: text("id").primaryKey(),
});

export const ktypesRelations = relations(ktypes_tb, ({ many }) => ({
  productsToKtypes: many(productsToKtypes_tb),
}));

export type Ktype = typeof ktypes_tb.$inferSelect;
export type NewKtype = typeof ktypes_tb.$inferInsert;

//  productsToKtypes table
export const productsToKtypes_tb = pgTable(
  "products_to_ktypes",
  {
    ktype_id: text("ktype_id")
      .notNull()
      .references(() => ktypes_tb.id),
    product_id: text("product_id")
      .notNull()
      .references(() => products_tb.sku),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.ktype_id, t.product_id] }),
  })
);

export type ProductsToKtypes = typeof productsToKtypes_tb.$inferSelect;
export type NewProductsToKtypes = typeof productsToKtypes_tb.$inferInsert;

export const productsToKtypesRelations = relations(
  productsToKtypes_tb,
  ({ one }) => ({
    ktype: one(ktypes_tb, {
      fields: [productsToKtypes_tb.ktype_id],
      references: [ktypes_tb.id],
    }),
    product: one(products_tb, {
      fields: [productsToKtypes_tb.product_id],
      references: [products_tb.sku],
    }),
  })
);
