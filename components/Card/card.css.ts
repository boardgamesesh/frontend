import { sprinklesTailwind } from "@styles/sprinkles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const card = recipe({
  base: sprinklesTailwind({
    borderColor: "slate200",
    borderRadius: "radius-3",
    padding: "size-5",
  }),

  variants: {
    intent: {
      default: sprinklesTailwind({
        background: "white",
      }),
      highlight: sprinklesTailwind({
        background: "violet100",
      }),
    },
    bordered: {
      true: sprinklesTailwind({
        borderWidth: "border-size-1",
      }),
    },
  },

  compoundVariants: [
    {
      variants: { intent: "highlight", bordered: true },
      style: sprinklesTailwind({ borderColor: "violet500" }),
    },
  ],

  defaultVariants: {
    intent: "default",
    bordered: false,
  },
});

export type CardVariants = RecipeVariants<typeof card>;
