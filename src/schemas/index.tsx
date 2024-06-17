import * as z from "zod";

export const ProductSchema = z.object({
  name: z
    .string()
    .min(4, { message: "product name should not have less than 4 characters" }),
  description: z.string().min(4, {
    message: "product description should not have less than 4 characters",
  }),
  thumbnail: z.string().min(4),
  images: z.string().array(),
  slug: z
    .string()
    .min(4, { message: "product slug should not have less than 4 characters" }),
  price: z.coerce
    .number()
    .min(2, { message: "price should not have less than 2 digits" }),
  featured: z.boolean().default(false),
});
