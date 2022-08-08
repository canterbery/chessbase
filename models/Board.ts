import { Queen } from "./figures/Queen";
import { Colors } from "../constants/Colors";
import { Figure } from "./figures/Figure";
import { King } from "./figures/King";
import { Pawn } from "./figures/Pawn";
import { Bishop } from "./figures/Bishop";
import { Knight } from "./figures/Knight";
import { Rook } from "./figures/Rook";

export class Board {
  figures: Figure[] = [];

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      this.figures.push(new Pawn(Colors.WHITE, i * 50, -50));
      this.figures.push(new Pawn(Colors.BLACK, i * 50, -300));
    }
  }
  private addKings() {
    this.figures.push(new King(Colors.WHITE, 200, 0));
    this.figures.push(new King(Colors.BLACK, 200, -350));
  }
  private addQueens() {
    this.figures.push(new Queen(Colors.WHITE, 150, 0));
    this.figures.push(new Queen(Colors.BLACK, 150, -350));
  }
  private addBishops() {
    this.figures.push(new Bishop(Colors.WHITE, 100, 0));
    this.figures.push(new Bishop(Colors.BLACK, 100, -350));
    this.figures.push(new Bishop(Colors.WHITE, 250, 0));
    this.figures.push(new Bishop(Colors.BLACK, 250, -350));
  }
  private addKnights() {
    this.figures.push(new Knight(Colors.WHITE, 50, 0));
    this.figures.push(new Knight(Colors.BLACK, 50, -350));
    this.figures.push(new Knight(Colors.WHITE, 300, 0));
    this.figures.push(new Knight(Colors.BLACK, 300, -350));
  }
  private addRooks() {
    this.figures.push(new Rook(Colors.WHITE, 0, 0));
    this.figures.push(new Rook(Colors.BLACK, 0, -350));
    this.figures.push(new Rook(Colors.WHITE, 350, 0));
    this.figures.push(new Rook(Colors.BLACK, 350, -350));
  }
  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addQueens();
    this.addBishops();
    this.addKnights();
    this.addRooks();
  }

  public moveFigure(figure: Figure, dX: number = 0, dY: number = 0) {
    figure.deltaX = dX;
    figure.deltaY = dY;
  }
}
