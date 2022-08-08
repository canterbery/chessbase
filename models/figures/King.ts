import { Colors } from "../../constants/Colors";
import { FigureImages } from "../../constants/FigureImages";
import { FigureNames } from "../../constants/FigureNames";
import { Figure } from "./Figure";

export class King extends Figure {
  deltaX: number;
  deltaY: number;
  color: Colors;
  name: FigureNames;
  image: FigureImages;
  constructor(color: Colors, x: number, y: number) {
    super();
    this.color = color;
    this.name = FigureNames.KING;
    this.image =
      color === Colors.BLACK
        ? FigureImages.BLACK_KING
        : FigureImages.WHITE_KING;
    this.deltaX = x;
    this.deltaY = y;
  }
}
