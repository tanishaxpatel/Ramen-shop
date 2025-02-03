import red from "../../assets/noodlesRed.webp";
import green from "../../assets/noodlesGreen.webp";
import yellow from "../../assets/noodlesYellow.webp";
import Orange from "../../assets/noodlesOrange.webp";
import Label from "../../assets/inside.PNG";
import redBlob from "../../assets/redbolb.svg";
import greenBlob from "../../assets/greenblob.svg";
import yellowBlob from "../../assets/square.svg";
import OrangeBlob from "../../assets/orageBlob.svg";
import redCharter from "../../assets/IMG_6750.PNG";
import OrangeCharter from "../../assets/IMG_6744.PNG";
import yellowCharter from "../../assets/IMG_6749.PNG";
import GreenCharter from "../../assets/IMG_6751.PNG";
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
    CharacterImage: redCharter,
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
    CharacterImage: GreenCharter,
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
    CharacterImage: yellowCharter,
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
    CharacterImage: OrangeCharter,
  },
};

export const centerLabel = {
  lid: {
    image: Label,
  },
};

export const noodlesData = [
  {
    name: "yellow",
    energy: { perPack: "36.2%", rda: "18.10%" },
    protein: { perPack: "0.25", rda: "-" },
    carbohydrate: { perPack: "47.15", rda: "-" },
    totalSugars: { perPack: "8.49", rda: "-" },
    addedSugars: { perPack: "7.35", rda: "14.70%" },
    dietaryFibre: { perPack: "3.34", rda: "-" },
    totalFat: { perPack: "17.33", rda: "25.87%" },
    saturatedFat: { perPack: "4.11", rda: "18.68%" },
    cholesterol: { perPack: "1.65", rda: "-" },
    sodium: { perPack: "1115.25", rda: "55.76%" },
  },
  {
    name: "green",
    energy: { perPack: "335.53", rda: "17.72%" },
    protein: { perPack: "6.83", rda: "-" },
    carbohydrate: { perPack: "46.04", rda: "-" },
    totalSugars: { perPack: "5.55", rda: "-" },
    addedSugars: { perPack: "3.45", rda: "4.90%" },
    dietaryFibre: { perPack: "3.27", rda: "-" },
    totalFat: { perPack: "16.73", rda: "54.97%" },
    saturatedFat: { perPack: "3.68", rda: "14.73%" },
    sodium: { perPack: "878.35", rda: "43.91%" },

    cholesterol: { perPack: "1.65", rda: "-" },
  },
  {
    name: "red",
    // Add nutritional values for Red Noodles here
    energy: { perPack: "335.53", rda: "17.72%" },
    protein: { perPack: "6.83", rda: "-" },
    carbohydrate: { perPack: "46.04", rda: "-" },
    totalSugars: { perPack: "5.55", rda: "-" },
    addedSugars: { perPack: "3.45", rda: "4.90%" },
    dietaryFibre: { perPack: "3.27", rda: "-" },
    totalFat: { perPack: "16.73", rda: "54.97%" },
    saturatedFat: { perPack: "3.68", rda: "14.73%" },
    sodium: { perPack: "878.35", rda: "43.91%" },
    cholesterol: { perPack: "1.65", rda: "-" },
  },
  {
    name: "Orange",
    energy: { perPack: "372.38", rda: "18.41%" },
    protein: { perPack: "6.71", rda: "-" },
    carbohydrate: { perPack: "46.79", rda: "-" },
    totalSugars: { perPack: "6.25", rda: "-" },
    addedSugars: { perPack: "3.72", rda: "7.44%" },
    dietaryFibre: { perPack: "3.30", rda: "-" },
    totalFat: { perPack: "18.33", rda: "27.34%" },
    saturatedFat: { perPack: "3.93", rda: "17.84%" },
    sodium: { perPack: "1116.25", rda: "55.91%" },
    cholesterol: { perPack: "1.65", rda: "-" },
  },
];
