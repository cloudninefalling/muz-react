import imgCoryWongStrat from "../images/guitars/stratocaster-cory-wong.png";

import imgPlayerStrat from "../images/guitars/stratocaster-player-hss.png";
import imgPlayerStratSunburst from "../images/guitars/stratocaster-player-hss-sunburst.png";

import imgAcoustasonicTele from "../images/guitars/telecaster-acoustasonic-american.png";

import imgJimmyPageTelecaster from "../images/guitars/telecaster-jimmy-page.png";

import imgIbanezTcy10e from "../images/guitars/ibanez-tcy10e.png";
import imgIbanezTcy10eTeal from "../images/guitars/ibanez-tcy10e-teal.png";
import imgIbanezTcy10ePurple from "../images/guitars/ibanez-tcy10e-purple.png";

import imgIbanezTcm50Black from "../images/guitars/ibanez-tcm50.png";
import imgIbanezTcm50Sunburst from "../images/guitars/ibanez-tcm50-sunburst.png";
import imgIbanezTcm50Natural from "../images/guitars/ibanez-tcm50-natural.png";

import imgFenderCd60 from "../images/guitars/fender-cd60.png";
import imgFenderCd60Natural from "../images/guitars/fender-cd60-natural.png";

import imgYamahaF310 from "../images/guitars/yamaha-f310.png";
import imgYamahaF310Sunburst from "../images/guitars/yamaha-f310-sunburst.png";

import imgFenderJazzBass from "../images/bass_guitars/fender-jazz-bass.png";
import imgFenderJazzBassNatural from "../images/bass_guitars/fender-jazz-bass-natural.png";
import imgFenderJazzBassSunburst from "../images/bass_guitars/fender-jazz-bass-sunburst.png";

const GUITARS = [
  {
    id: "acoustic_1",
    category: "acoustic",
    type: "electroacoustic",
    manufacturer: "ibanez",
    img: imgIbanezTcy10e,
    colors: {
      black: imgIbanezTcy10e,
      teal: imgIbanezTcy10eTeal,
      purple: imgIbanezTcy10ePurple,
    },
    name: "Ibanez TCY10E",
    description: [
      "The Ibanez TCY10E Talman is a compact and lightweight electro-acoustic guitar, giving the gigging player the same type of mobility as an electric guitar player on stage. ",
      "The Ibanez TCY10E electro-acoustic guitar features the Ibanex AEQ200T 2-band tone control with built-in tuner is optimized for use with the Ibanez Under Saddle Pickup. The 7 segment LED display enables you to tune, wherever and whenever necessary.",
    ],
    price: 300,
    bestseller: false,
    new: true,
  },
  {
    id: "acoustic_4",
    category: "acoustic",
    type: "acoustic",
    manufacturer: "yamaha",
    img: imgYamahaF310,
    colors: { natural: imgYamahaF310, sunburst: imgYamahaF310Sunburst },
    name: "Yamaha F310",
    price: 180,
    bestseller: false,
    description: [
      "Presenting the multi-award winning Yamaha F310 - a full-size steel string guitar which draws on Yamaha's knowledge of professional instruments to provide novices their first playing experience",
      "Yamaha's F Series are crafted from select tonewoods such as a spruce top and rosewood fingerboard, combined with a tough thin lacquer finish to give the guitar a warm responsive and refined sound ",
    ],
  },
  {
    id: "acoustic_2",
    category: "acoustic",
    type: "electroacoustic",
    manufacturer: "ibanez",
    img: imgIbanezTcm50Black,
    colors: {
      sunburst: imgIbanezTcm50Sunburst,
      black: imgIbanezTcm50Black,
      natural: imgIbanezTcm50Natural,
    },
    name: "Ibanez TCM50",
    price: 350,
    bestseller: false,
    description: [
      "The double-cutaway Talman is a rebel with a cause. Electric players looking to add an acoustic-guitar dimension to their arsenal go headover- heels for this distinctive hybrid. The TCM50 features Ibanez’s iconic Talman body design with Figured Ash top, Sapele back and sides. The double-cutaway and shallower body construction allows electric guitar players to switch to acoustic easily. Electronics include AP2 magnetic pickup for warmer sound, along with AEQ200M preamp w/2-band EQ. The TCM50 also features a Purplrheart fretboard and bridge, with Ibanez Advantage Bridge Pins for improved tuning stability.",
    ],
  },
  {
    id: "acoustic_3",
    category: "acoustic",
    type: "acoustic",
    manufacturer: "fender",
    img: imgFenderCd60,
    colors: {
      black: imgFenderCd60,
      natural: imgFenderCd60Natural,
    },
    name: "Fender CD‑60",
    price: 280,
    bestseller: false,
    new: false,
    description: [
      "The CD-60 is a genuine Fender that is affordable and comes in three great-looking finishes to match your style. It provides nicely balanced tone and plenty of volume thanks to its dreadnought body style and spruce top with scalloped X-bracing. The CD-60 is also an excellent choice for veteran players who need an inexpensive second dreadnought model, and it includes a hard-shell case for safe and convenient transport (North America only).",
    ],
  },
  {
    id: "electric_1",
    category: "electric",
    type: "stratocaster",
    manufacturer: "fender",
    img: imgCoryWongStrat,
    colors: {
      blue: imgCoryWongStrat,
    },
    name: "Cory Wong Stratocaster®",
    price: 1999,
    bestseller: true,
    description: [
      "Recognized for his incredible funk chops and inventive lead work, guitarist, producer, and arranger Cory Wong's soulful playing with Vulfpeck, as well as his Grammy-nominated solo work have earned him a loyal following and led to sold-out arena performances. The Cory Wong Stratocaster® is a tribute to Cory's favorite Fender®, thoughtfully modified to meet the funk master's needs.",
      "The Sapphire Blue Transparent satin lacquer finish recreates the look and feel of Cory's beloved original Strat®, while the scaled-down alder body - slightly smaller than a typical Stratocaster - combined with American Ultra™ Modern 'D' neck and sculpted body contours deliver a sublimely comfortable playing experience. A set of Seymour Duncan® Cory Wong Clean Machine™ pickups provides classic Strat quack and chime, fine-tuned to achieve his distinctive tone.",
      `Other features include a maple neck with subtly modified headstock shape, rosewood fingerboard with rolled edges and a compound 10-14" radius, vintage-style 6-screw synchronized Tremolo, deluxe locking tuners that provide improved tuning stability and easy string changes, and a push/push pot on Tone 2 that bypasses the 5-way switch and defaults to "Position 4". Also included are a Cory Wong hair tie (for muting the tremolo springs to achieve Cory's rhythm tone), rubber straplock washer set and custom neck plate.`,
    ],
  },
  {
    id: "electric_2",
    category: "electric",
    type: "stratocaster",
    manufacturer: "fender",
    img: imgPlayerStrat,
    colors: {
      black: imgPlayerStrat,
      sunburst: imgPlayerStratSunburst,
    },
    name: "Player Stratocaster® HSS",
    price: 829,
    bestseller: true,
    description: [
      "Real Deal Sound.",
      "The inspiring sound of a Stratocaster is one of the foundations of Fender. Featuring this classic sound - bell-like high end, punchy mids and robust low end, combined with crystal-clear articulation - the sonically flexible Player Stratocaster HSS is packed with authentic Fender feel and style. It's ready to serve your musical vision, it's versatile enough to handle any style of music and it's the perfect platform for creating your own sound.",
    ],
  },
  {
    id: "electric_3",
    category: "acoustic",
    type: "telecaster",
    manufacturer: "fender",
    img: imgAcoustasonicTele,
    colors: {
      sunburst: imgAcoustasonicTele,
    },
    name: "American Acoustasonic® Telecaster®",
    price: 1999,
    bestseller: true,
    new: true,
    description: [
      "The American Acoustasonic® Telecaster® embodies the spirit of purposeful innovation that Fender was built on. From acoustic shape-shifting to electric rhythm tones, this powerful guitar uses a revolutionary Fender and Fishman®-designed Acoustic Engine to deliver new sonic expression from the studio to the stage.",
    ],
  },
  {
    id: "electric_4",
    category: "electric",
    type: "telecaster",
    manufacturer: "fender",
    img: imgJimmyPageTelecaster,
    colors: {
      cream: imgJimmyPageTelecaster,
    },
    name: "Jimmy Page Telecaster",
    price: 1549,
    new: true,
    description: [
      `The Fender Custom Shop Custom Artist collection Jimmy Page Signature Telecaster® is a faithful recreation of the guitar gifted to Jimmy Page by Jeff Beck, Page's predecessor, in seminal U.K. psychedelic blues-rock outfit the Yardbirds. Page promptly customized the guitar - a 1959 model with a white blonde finish and rosewood fingerboard - by applying eight round mirrors to it in order to, in his own words "make it a kinetic sculpture" and "a channeling vehicle for music" the guitar featured on The Yardbirds singles including 'Think About It'`,
      `The Telecaster was then destined to receive further customization by Page and went on to become the 'Dragon' used for the electric guitar work on eponymous 1969 album Led Zeppelin, one of the most acclaimed and influential debut albums in rock history. True to the original, the Jimmy Page Signature Telecaster has a two-piece ash body with off-center seam, with an eight-hole pickguard and Journeyman Relic lacquer finish. The tinted maple neck has a custom Jimmy Page 1959 profile, topped by a flat-lam rosewood fingerboard with a 7.25" radius and vintage-upgrade frets. The two hand-wound 1958 Telecaster pickups have three-way switching with modern wiring. Other features include a top-load/string-through-body Telecaster bridge with threaded steel saddles, vintage-style tuning machines, and bone nut. Includes deluxe hardshell tweed case, ACE reissue "Stained-Glass" woven strap, mirror application kit, black coil cable and certificate of authenticity.`,
    ],
  },
  {
    id: "bass_1",
    category: "bass",
    type: "jazz",
    manufacturer: "fender",
    img: imgFenderJazzBass,
    colors: {
      cream: imgFenderJazzBass,
      natural: imgFenderJazzBassNatural,
      sunburst: imgFenderJazzBassSunburst,
    },
    name: "Fender Jazz Bass",
    price: 1549,
    new: true,
    description: [
      "With its dual single-coil pickups and smooth playing feel, the Player Jazz Bass is an inspiring instrument with classic, elevated style and authentic Fender bass tone.",
      "Its powerful, rumbling sound is punchy and tight; a growling voice that's matched with fast, smooth playing feel for a shot of creative inspiration. Ready for action in the studio, or on the stage, the Player Jazz Bass can take anything you can think of - and everything you haven't yet.",
    ],
  },
];

const BASS_GUITARS = GUITARS.filter((item) => item.category === "bass");

const UKULELE = [];

const ACCESSORIES = [];

const ACOUSTIC_GUITARS = GUITARS.filter((item) => item.category === "acoustic");
const ELECTRIC_GUITARS = GUITARS.filter((item) => item.category === "electric");
const CLASSICAL_GUITARS = GUITARS.filter(
  (item) => item.category === "classical"
);
const bestsellers = GUITARS.filter((item) => item.bestseller === true);
const newArrivals = GUITARS.filter((item) => item.new === true).reverse();

export {
  GUITARS,
  ACOUSTIC_GUITARS,
  ELECTRIC_GUITARS,
  CLASSICAL_GUITARS,
  BASS_GUITARS,
  UKULELE,
  ACCESSORIES,
  bestsellers,
  newArrivals,
};
