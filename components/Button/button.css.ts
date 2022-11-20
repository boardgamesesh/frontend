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
          default: "violet500",
          hover: "violet600",
        },
        borderColor: "violet500",
        borderWidth: "border-size-1",
      }),
      secondary: sprinklesTailwind({
        background: {
          default: "white",
          hover: "violet600",
        },
        color: {
          hover: "white",
        },
        borderColor: "violet500",
        borderWidth: "border-size-1",
      }),
      tertiary: sprinklesTailwind({
        color: {
          default: "violet500",
        },
        background: {
          hover: "violet100",
        },
      }),
    },
    mood: {
      neutral: sprinklesTailwind({ background: "slate500" }),
      positive: sprinklesTailwind({ background: "green500" }),
      negative: sprinklesTailwind({ background: "red500" }),
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
      style: sprinklesTailwind({ borderColor: "slate500" }),
    },
    {
      variants: {
        intent: "secondary",
        mood: "positive",
      },
      style: sprinklesTailwind({ borderColor: "green500" }),
    },
    {
      variants: {
        intent: "secondary",
        mood: "negative",
      },
      style: sprinklesTailwind({ borderColor: "red500", background: "white" }),
    },
  ],

  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
