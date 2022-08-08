import { FigureNames } from "./../constants/FigureNames";
import {
  ALLOWED_SYMBOLS,
  FIGURE_SYMBOLS,
  COORDINATE_LETTERS,
} from "./../constants/AllowedSymbols";

export type ParsedMove = {
  searchString?: string;
  figure: FigureNames;
  moveSquare: string;
  promotedInto?: string;
};

type Castle = {
  type: "kingside" | "queenside";
};

function mapNotationToFigureNames(
  figure: typeof FIGURE_SYMBOLS[number] | typeof COORDINATE_LETTERS[number]
): FigureNames {
  switch (figure) {
    case "K":
      return FigureNames.KING;
    case "Q":
      return FigureNames.QUEEN;
    case "B":
      return FigureNames.BISHOP;
    case "N":
      return FigureNames.KNIGHT;
    case "R":
      return FigureNames.ROOK;
    case "a":
    case "b":
    case "c":
    case "d":
    case "e":
    case "f":
    case "g":
    case "h":
      return FigureNames.PAWN;
  }
}

function parsePawnPromotion(move: string): ParsedMove {
  let moveSquare = "";
  let searchString = "";

  const figure = move.charAt(move.length - 1);
  let moveString = move.slice(0, -1);

  if (moveString.length === 2) {
    moveSquare = moveString;
  } else if (moveString.length === 3) {
    searchString = moveString.charAt(0);
    moveSquare = moveString.slice(1);
  }
  return {
    searchString: searchString,
    figure: FigureNames.PAWN,
    moveSquare: moveSquare,
    promotedInto: figure,
  };
}

function parseRegularMove(move: string): ParsedMove {
  let figure = "";
  let searchString = "";
  const moveSquare = move.slice(-2);
  let moveString = move.substring(0, move.length - 2);

  if (moveString.length === 1) {
    figure = moveString;
  } else if (moveString.length === 2 || moveString.length === 3) {
    figure = moveString.charAt(0);
    searchString = moveString.slice(1);
  }
  return {
    searchString: searchString,
    moveSquare: moveSquare,
    figure: mapNotationToFigureNames(figure as typeof FIGURE_SYMBOLS[number]),
  };
}

export const moveParser = (move: string): ParsedMove | Castle | undefined => {
  if (move === "O-O-O") return { type: "queenside" };
  else if ((move = "O-O")) return { type: "kingside" };

  let unParsedMove = move.split("");
  let filteredMove: string[] = [];
  unParsedMove.forEach((item) => {
    if (ALLOWED_SYMBOLS.includes(item)) {
      filteredMove.push(item);
    }
  });
  if (
    FIGURE_SYMBOLS.includes(
      filteredMove[filteredMove.length - 1] as typeof FIGURE_SYMBOLS[number]
    )
  ) {
    return parsePawnPromotion(filteredMove.join());
  } else return parseRegularMove(filteredMove.join());
};
