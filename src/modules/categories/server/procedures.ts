import { z } from "zod";
import type { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.payload.find({
      collection: "categories",
      depth: 1,
      pagination: false,
      where: {
        parent: {
          exists: false,
        },
      },
      sort: "name",
    });

    const formattedData = data?.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        ...(doc as Category),
        subcategories: undefined,
      })),
    }));

    return formattedData;
  }),

  getById: baseProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const data = await ctx.payload.findByID({
        id: input.id,
        collection: "categories",
        depth: 1,
      });

      if (!data) return null;

      return {
        ...data,
        subcategories: (data.subcategories?.docs ?? []).map((doc) => ({
          ...(doc as Category),
          subcategories: undefined,
        })),
      };
    }),

  getBySlug: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const data = await ctx.payload.find({
        collection: "categories",
        depth: 1,
        where: {
          slug: {
            equals: input.slug,
          },
        },
      });

      if (!data?.docs?.[0]) return null;

      const category = data.docs[0];

      return {
        ...category,
        subcategories: (category.subcategories?.docs ?? []).map((doc) => ({
          ...(doc as Category),
          subcategories: undefined,
        })),
      };
    }),
});
