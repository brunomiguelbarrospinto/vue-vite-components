import cssColors from "../data/css-colors.json";

interface getContrastColorProps {
  hexadecimal?: string;
  color?: string;
}

function getContrastColor(props: getContrastColorProps): "black" | "white" {
  const hexadecimal = props.hexadecimal;
  const color = props.color;
  //const rgb = props.rgb;

  let hexcolor = undefined;

  if (hexadecimal) {
    hexcolor = hexadecimal;
  }

  if (color) {
    hexcolor = cssColors?.find(
      (item: { text: string; value: string }) => item.text === color
    )?.value;
  }

  if (hexcolor) {
    hexcolor = hexcolor.replace("#", "");

    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }

  return "black";
}
export default getContrastColor;
