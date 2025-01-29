import red from "../../assets/noodlesRed.webp";
import green from "../../assets/noodlesGreen.webp";
import yellow from "../../assets/noodlesYellow.webp";
import Orange from "../../assets/noodlesOrange.webp";
import Label from "../../assets/inside.PNG";
import redBlob from "../../assets/redbolb.svg";
import greenBlob from "../../assets/greenblob.svg";
import yellowBlob from "../../assets/square.svg";
import OrangeBlob from "../../assets/orageBlob.svg";
export const noodleOptions = {
  red: {
    image: red,
    color: "#f15a52",
    darkColor: "rgb(230 86 80)",
    darekestColor: "rgb(219 83 79)",
    title: "Instant Cup Noodles",
    subTitle: "Manchurian",
    blob: redBlob,
    titleColor: "#E1271E",
  },
  green: {
    image: green,
    color: "rgb(105 190 103)",
    darkColor: "rgb(69, 160, 65)",
    darekestColor: "#62ae61",
    title: "Instant Cup Noodles",
    subTitle: "Kung Pao",
    blob: greenBlob,
    titleColor: "rgb(69 160 65)",
  },
  yellow: {
    image: yellow,
    color: "#f19400",
    darkColor: "rgb(229 141 11)",
    darekestColor: "rgba(16, 24, 32, .05)",
    title: "Instant Cup Noodles",
    subTitle: "Masala",
    blob: yellowBlob,
    titleColor: "rgb(244, 178, 35)",
  },
  Orange: {
    image: Orange,
    color: "#f4803f",
    darkColor: "#d4713c",
    darekestColor: "#df763d",
    title: "Instant Cup Noodles",
    subTitle: "Chowmein",
    blob: OrangeBlob,
    titleColor: "rgb(230, 83, 0)",
  },
};

export const centerLabel = {
  lid: {
    image: Label,
  },
};
