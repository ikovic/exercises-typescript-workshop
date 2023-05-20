import { isType } from "type-plus";

/* 
  Declare as const to prevent the type from being widened to string.
*/
const COLORS = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  black: "#000000",
  white: "#ffffff",
} as const;

/* 
  Get the typeof COLORS to get the object literal type.
  Then use keyof to get the union of the keys.
*/
type ColorName = keyof typeof COLORS;

/* 
  Use an indexed access type to look up a specific property on another type => Type[IndexingType].
  The indexing type is itself a type, so we can use unions, keyof, or other types entirely.
  In this case the ColorName is a union that consists of the keys of the COLORS object.
  By indexing the COLORS object with the ColorName union, we get the union of the values.
*/
type ColorHex = (typeof COLORS)[ColorName];

function getColorHex(color: ColorName): ColorHex {
  return COLORS[color];
}

function renderH1(text: string, color: ColorName) {
  return `<h1 style="color: ${getColorHex(color)}">${text}</h1>`;
}

console.log(renderH1("Hello World", "red"));

isType.equal<
  true,
  ColorHex,
  "#ff0000" | "#00ff00" | "#0000ff" | "#000000" | "#ffffff"
>();

isType.equal<true, ColorName, "red" | "green" | "blue" | "black" | "white">();
