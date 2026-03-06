import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const framesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/frames" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      outfit: z
        .array(
          z.object({
            type: z.string(),
            name: z.string(),
            link: z.string().optional(),
          })
        )
        .optional(),
      frame: image(),
      gallery: z.array(image()).optional(),
    }),
});

export const collections = {
  frames: framesCollection,
};
