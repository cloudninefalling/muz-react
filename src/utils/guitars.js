import imgCoryWongStrat from "../images/guitars/stratocaster-cory-wong.png";

import imgPlayerStrat from "../images/guitars/stratocaster-player-hss.png";
import imgPlayerStratSunburst from "../images/guitars/stratocaster-player-hss-sunburst.png";

import imgAcoustasonicTele from "../images/guitars/telecaster-acoustasonic-american.png";

import imgJimmyPageTelecaster from "../images/guitars/telecaster-jimmy-page.png";

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

import imgFenderTuner from "../images/guitars/fender-original-tuner.png";
import imgFenderDragonCapo from "../images/guitars/fender-dragon-capo.png";

import imgEpiphoneLesPaulUkuleleRed from "../images/guitars/epiphone-ukulele-red.png";
import imgEpiphoneLesPaulUkuleleBlack from "../images/guitars/epiphone-ukulele-black.png";

import imgFlightDUC450 from "../images/guitars/flight-duc450.png";
import imgFlightDUC450Black from "../images/guitars/flight-duc460-black.png";

const GUITARS = [
  {
    id: "ukulele_0",
    category: "ukulele",
    type: "concert",
    manufacturer: "FLIGHT",
    img: imgFlightDUC450,
    colors: {
      natural: imgFlightDUC450,
      black: imgFlightDUC450Black,
    },
    name: "Flight DUC450",
    price: 200,
    bestseller: false,
    description: [
      "How would you like a ukulele that looks stunning, sounds great and is eco-friendly at the same time? Each of our mango ukuleles has its own identity, thanks to the unique and beautiful patterns found on each one, you never know what awaits you inside the box! Not only are there stunning patterns, but the colors themselves are mesmerizing,  ranging from shades of green to red or grey. No two Flight Mango ukuleles are the same, which makes your ukulele one of a kind!",
    ],
  },
  {
    id: "ukulele_1",
    category: "ukulele",
    type: "concert",
    manufacturer: "epiphone",
    img: imgEpiphoneLesPaulUkuleleRed,
    colors: {
      red: imgEpiphoneLesPaulUkuleleRed,
      black: imgEpiphoneLesPaulUkuleleBlack,
    },
    name: "Epiphone Les Paul Ukulele",
    price: 200,
    bestseller: false,
    description: [
      "Long known for its history of making great Les Paul™ guitars, Epiphone presents the Les Paul Concert Ukulele.",
      `Like a traditional Les Paul Standard, the Les Paul Concert Ukulele features a mahogany body combined with a maple top with a AAA grade flame maple top veneer for great tone and a great look, featuring a mahogany neck with a SlimTaper™ D profile shape with 19 frets, a 15" scale length, and a 16" fingerboard radius. `,
    ],
  },
  {
    id: "tuner_1",
    category: "accessories",
    type: "tuner",
    manufacturer: "fender",
    img: imgFenderTuner,
    colors: { black: imgFenderTuner },
    name: "Fender Original Tuner",
    price: 30,
    bestseller: false,
    description: [
      "Engineered for players who need a compact, reliable and accurate tuning system, the Fender Original Tuner delivers on all of these criteria - plus a shot of signature style.",
      "The powerful vibration-based tuning engine ensures dependable precision, while the bright LCD screen with 360° angle-adjustable swivel is easy-to-read in any performance environment.",
      "Featuring Fender color-matched-to-guitar colors, this tuner is a sure-fire Fender lover's favorite.",
    ],
  },
  {
    id: "capo_1",
    category: "accessories",
    type: "capo",
    manufacturer: "fender",
    img: imgFenderDragonCapo,
    colors: { black: imgFenderDragonCapo },
    name: "Fender Dragon Capo",
    price: 15,
    bestseller: false,
    description: [
      "Simple to use and made with durable lightweight cast aluminum, the Dragon Capo delivers ideal capo performance anywhere along the neck of any acoustic or electric guitar.",
      "Convenient micro-dial thumbscrew lets you change positions quickly and easily with just the right pressure at any fret, and special protective pads won't harm neck finishes.",
    ],
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
    new: true,
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
    new: true,
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
    name: "Fender American Professional II Jazz Bass",
    price: 1549,
    new: true,
    description: [
      "The American Professional II Jazz Bass® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today's working player.",
      `Our popular Slim "C" neck now sports smooth rolled fingerboard edges, a "Super-Natural" satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Jazz Bass single-coil pickups are more articulate than ever while delivering the punch and clarity the Jazz Bass is known for.`,
      `The American Pro II Jazz Bass delivers instant familiarity and sonic versatility you'll feel and hear right away, with broad ranging improvements that add up to nothing less than a new standard for professional instruments.`,
    ],
  },
];

const BASS_GUITARS = GUITARS.filter((item) => item.category === "bass");

const UKULELE = GUITARS.filter((item) => item.category === "ukulele");

const ACCESSORIES = GUITARS.filter((item) => item.category === "accessories");

const ACOUSTIC_GUITARS = GUITARS.filter((item) => item.category === "acoustic");
const ELECTRIC_GUITARS = GUITARS.filter((item) => item.category === "electric");

const bestsellers = GUITARS.filter((item) => item.bestseller === true);
const newArrivals = GUITARS.filter((item) => item.new === true).reverse();

export {
  GUITARS,
  ACOUSTIC_GUITARS,
  ELECTRIC_GUITARS,
  BASS_GUITARS,
  UKULELE,
  ACCESSORIES,
  bestsellers,
  newArrivals,
};
