import type { CollectionConfig } from "payload";

// export const Categories: CollectionConfig = {
//   slug: "categories",
//   fields: [
//     {
//       name: "name",
//       type: "text",
//       required: true,
//     },
//   ],
// };

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "hello",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};
