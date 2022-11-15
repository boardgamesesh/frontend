import { sprinklesTailwind } from "@styles/sprinkles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const button = recipe({
  base: sprinklesTailwind({
    display: "flex",
    alignItems: "center",
    gap: "size-2",
    justifyContent: "center",
    width: {
      mobile: "full",
      desktop: "fit",
    },
    borderRadius: "radius-2",
  }),

  variants: {
    intent: {
      primary: sprinklesTailwind({
        background: {
          default: "violet-5",
          hover: "violet-6",
        },
        borderColor: "violet-5",
        borderWidth: "border-size-1",
      }),
      secondary: sprinklesTailwind({
        background: {
          default: "white",
          hover: "violet-6",
        },
        color: {
          hover: "white",
        },
        borderColor: "violet-5",
        borderWidth: "border-size-1",
      }),
      tertiary: sprinklesTailwind({
        color: {
          default: "violet-5",
        },
        background: {
          hover: "violet-1",
        },
      }),
    },
    mood: {
      neutral: sprinklesTailwind({ background: "gray-5" }),
      positive: sprinklesTailwind({ background: "green-5" }),
      negative: sprinklesTailwind({ background: "red-5" }),
    },
    size: {
      xsmall: sprinklesTailwind({
        fontSize: "font-size-00",
        paddingY: "size-1",
        paddingX: "size-2",
      }),
      small: sprinklesTailwind({
        fontSize: "font-size-0",
        paddingY: "size-1",
        paddingX: "size-2",
      }),
      medium: sprinklesTailwind({
        fontSize: "font-size-1",
        paddingY: "size-2",
        paddingX: "size-3",
      }),
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        intent: "secondary",
        mood: "neutral",
      },
      style: sprinklesTailwind({ borderColor: "gray-5" }),
    },
    {
      variants: {
        intent: "secondary",
        mood: "positive",
      },
      style: sprinklesTailwind({ borderColor: "green-5" }),
    },
    {
      variants: {
        intent: "secondary",
        mood: "negative",
      },
      style: sprinklesTailwind({ borderColor: "red-5" }),
    },
  ],

  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
