import { Colors } from "../../constants/Colors";
import { FigureImages } from "../../constants/FigureImages";
import { FigureNames } from "../../constants/FigureNames";
import { Figure } from "./Figure";

export class Queen extends Figure {
  deltaX: number;
  deltaY: number;
  color: Colors;
  name: FigureNames;
  image: FigureImages;
  constructor(color: Colors, x: number, y: number) {
    super();
    this.color = color;
    this.name = FigureNames.QUEEN;
    this.image =
      color === Colors.BLACK
        ? FigureImages.BLACK_QUEEN
        : FigureImages.WHITE_QUEEN;
    this.deltaX = x;
    this.deltaY = y;
  }
}
