import { isType } from "type-plus";

const COLORS = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  black: "#000000",
  white: "#ffffff",
};

type ColorName = "TODO";
type ColorHex = "TODO";

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
