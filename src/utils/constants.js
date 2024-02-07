import imgStratocasterBoxerHH from "../images/guitars/stratocaster-boxer-hh.png";
import imgJimmyPageStratocaster from "../images/guitars/telecaster-jimmy-page.png";

import tipsImg from "../images/news-block__tips-for-beginners.png";
import corporateAnnouncementImg from "../images/news-block__guitars.png";
import howToPlayGMajorImg from "../images/news-block__guitar-playing.jpg";

let bestsellers = [
  {
    id: 1,
    category: "electric",
    type: "stratocaster",
    madeBy: "fender",
    src: imgStratocasterBoxerHH,
    name: "Boxer™ Series Stratocaster® HH",
    price: 1199,
  },
  {
    id: 2,
    category: "electric",
    type: "stratocaster",
    madeBy: "fender",
    src: imgStratocasterBoxerHH,
    name: "Boxer™ Series Stratocaster® HH",
    price: 1199,
  },
  {
    id: 3,
    category: "electric",
    type: "stratocaster",
    madeBy: "fender",
    src: imgStratocasterBoxerHH,
    name: "Boxer™ Series Stratocaster® HH",
    price: 1199,
  },
  {
    id: 4,
    category: "electric",
    type: "stratocaster",
    madeBy: "fender",
    src: imgStratocasterBoxerHH,
    name: "Boxer™ Series Stratocaster® HH",
    price: 1199,
  },
];

let newArrivals = [
  {
    id: 1,
    category: "electric",
    type: "telecaster",
    madeBy: "fender",
    src: imgJimmyPageStratocaster,
    name: "Jimmy Page Telecaster",
    price: 1549,
  },
  {
    id: 2,
    category: "electric",
    type: "telecaster",
    madeBy: "fender",
    src: imgJimmyPageStratocaster,
    name: "Jimmy Page Telecaster",
    price: 1549,
  },
  {
    id: 3,
    category: "electric",
    type: "telecaster",
    madeBy: "fender",
    src: imgJimmyPageStratocaster,
    name: "Jimmy Page Telecaster",
    price: 1549,
  },
  {
    id: 4,
    category: "electric",
    type: "telecaster",
    madeBy: "fender",
    src: imgJimmyPageStratocaster,
    name: "Jimmy Page Telecaster",
    price: 1549,
  },
  {
    id: 5,
    category: "electric",
    type: "telecaster",
    madeBy: "fender",
    src: imgJimmyPageStratocaster,
    name: "Jimmy Page Telecaster",
    price: 1549,
  },
];

const newsBlocks = [
  {
    id: 28371293,
    isSquare: true,
    imgSrc: tipsImg,
    text: "a few of our tips for beginners",
  },
  {
    id: 123809213,
    isSquare: false,
    imgSrc: corporateAnnouncementImg,
    text: "corporate announcement",
  },
  {
    id: 1283091283,
    isSquare: false,
    imgSrc: howToPlayGMajorImg,
    text: "how to play g major pentatonic",
  },
];

export { bestsellers, newArrivals, newsBlocks };
