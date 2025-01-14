export enum Color {
  red, black, white, green, blue
}

export interface Hero {
  name: string;
  color: Color;
  canFly: boolean;
}
