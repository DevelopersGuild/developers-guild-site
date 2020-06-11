enum FontWeight {
  NORMAL = "normal",
  BOLD = "bold",
  ONE_HUNDRED = 100,
  TWO_HUNDRED = 200,
  THREE_HUNDRED = 300,
  FOUR_HUNDRED = 400,
  FIVE_HUNDRED = 500,
  SIX_HUNDRED = 600,
  SEVEN_HUNDRED = 700,
  EIGHT_HUNDRED = 800,
  NINE_HUNDRED = 900,
}

/**
 * These are relative to their parent
 * and should only be used explicitly
 */
export enum RelativeFontWeight {
  LIGHTER = "lighter",
  BOLDER = "bolder",
}

/**
 * These are Global Values
 * and should only be used explicitly
 */
export enum GlobalFontWeight {
  INHERIT = "inherit",
  INITIAL = "initial",
  UNSET = "unset",
}

export default FontWeight;
