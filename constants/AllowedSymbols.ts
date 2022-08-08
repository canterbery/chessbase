export const FIGURE_SYMBOLS = ["K", "Q", "R", "B", "N"] as const;
export const COORDINATE_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
] as const;
export const COORDINATE_NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const ALLOWED_SYMBOLS = [
  ...FIGURE_SYMBOLS,
  ...COORDINATE_LETTERS,
  ...COORDINATE_NUMBERS,
];
