import { FigureImages } from "./../../constants/FigureImages";
import { FigureNames } from "./../../constants/FigureNames";
import { Colors } from "./../../constants/Colors";

export abstract class Figure {
  abstract deltaX: number;
  abstract deltaY: number;
  abstract color: Colors;
  abstract name: FigureNames;
  abstract image: FigureImages;
}
