import tipsImg from "../images/news-block__tips-for-beginners.png";
import corporateAnnouncementImg from "../images/news-block__guitars.png";
import howToPlayGMajorImg from "../images/news-block__guitar-playing.jpg";
const CATEGORIES = ["electric", "bass", "acoustic", "ukulele", "accessories"];

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

const MANUFACTURERS = ["fender", "gibson", "ibanez", "yamaha"];

export { newsBlocks, CATEGORIES, MANUFACTURERS };
