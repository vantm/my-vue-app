import { delay, random, paginate } from "./__mock__";

export const fetchAsync = async (pageIndex, pageSize) => {
  await delay(random(200, 500));
  return paginate(students, pageIndex, pageSize);
};

const students = [
  {
    id: 1,
    name: "Clemens Reder"
  },
  {
    id: 2,
    name: "Ginni Heister"
  },
  {
    id: 3,
    name: "Tabor Colnett"
  },
  {
    id: 4,
    name: "Gregorius Raithmill"
  },
  {
    id: 5,
    name: "Josephina Bartram"
  },
  {
    id: 6,
    name: "Patton Nutton"
  },
  {
    id: 7,
    name: "Janeen Burbury"
  },
  {
    id: 8,
    name: "Stephan Scarlet"
  },
  {
    id: 9,
    name: "Rosalinde Ivory"
  },
  {
    id: 10,
    name: "Geraldine Ruspine"
  },
  {
    id: 11,
    name: "Derwin Cosgreave"
  },
  {
    id: 12,
    name: "Lamont Tissier"
  },
  {
    id: 13,
    name: "Claretta Pickersgill"
  },
  {
    id: 14,
    name: "Rex Tickle"
  },
  {
    id: 15,
    name: "Gayle Pistol"
  },
  {
    id: 16,
    name: "Enriqueta Ryhorovich"
  },
  {
    id: 17,
    name: "Brade Coll"
  },
  {
    id: 18,
    name: "Joann Lebbon"
  },
  {
    id: 19,
    name: "Alie Horsefield"
  },
  {
    id: 20,
    name: "Elyse McJury"
  },
  {
    id: 21,
    name: "Giffard Trouel"
  },
  {
    id: 22,
    name: "Bevin Hanner"
  },
  {
    id: 23,
    name: "Pearline Ovise"
  },
  {
    id: 24,
    name: "Royal Buzin"
  },
  {
    id: 25,
    name: "Jordan Sharple"
  },
  {
    id: 26,
    name: "Margery Ullyatt"
  },
  {
    id: 27,
    name: "Martyn Wheway"
  },
  {
    id: 28,
    name: "Ailyn Domel"
  },
  {
    id: 29,
    name: "Benedikta Been"
  },
  {
    id: 30,
    name: "Allard Kleyn"
  },
  {
    id: 31,
    name: "Cosimo Papaccio"
  },
  {
    id: 32,
    name: "Gilda Busek"
  },
  {
    id: 33,
    name: "Helene Tabbernor"
  },
  {
    id: 34,
    name: "Marguerite Boness"
  },
  {
    id: 35,
    name: "Kassey Armour"
  },
  {
    id: 36,
    name: "Faythe Segoe"
  },
  {
    id: 37,
    name: "Dory Vankov"
  },
  {
    id: 38,
    name: "Fionnula Battman"
  },
  {
    id: 39,
    name: "Guinevere Jeness"
  },
  {
    id: 40,
    name: "Felice Gert"
  },
  {
    id: 41,
    name: "Fredi Selbie"
  },
  {
    id: 42,
    name: "Jeremy Schlagh"
  },
  {
    id: 43,
    name: "Hastie Canland"
  },
  {
    id: 44,
    name: "Gray Saward"
  },
  {
    id: 45,
    name: "Tobias Filchagin"
  },
  {
    id: 46,
    name: "Merola McKimmie"
  },
  {
    id: 47,
    name: "Hakim Wernham"
  },
  {
    id: 48,
    name: "Sabine Pipe"
  },
  {
    id: 49,
    name: "Agosto Castelow"
  },
  {
    id: 50,
    name: "Hercule MacTimpany"
  },
  {
    id: 51,
    name: "Alleyn Stuckley"
  },
  {
    id: 52,
    name: "Norma Giorgio"
  },
  {
    id: 53,
    name: "Ruth Regis"
  },
  {
    id: 54,
    name: "Skell McGuffog"
  },
  {
    id: 55,
    name: "Patsy Cicetti"
  },
  {
    id: 56,
    name: "Anett Dargavel"
  },
  {
    id: 57,
    name: "Tiffany Le Grove"
  },
  {
    id: 58,
    name: "Corrine McPhelim"
  },
  {
    id: 59,
    name: "Aloise Semken"
  },
  {
    id: 60,
    name: "Timofei Depka"
  },
  {
    id: 61,
    name: "Thomasina Schiementz"
  },
  {
    id: 62,
    name: "Olivie Eskrigge"
  },
  {
    id: 63,
    name: "Armando Towll"
  },
  {
    id: 64,
    name: "Viola Dowty"
  },
  {
    id: 65,
    name: "Kathy Mathissen"
  },
  {
    id: 66,
    name: "Alaster Fotitt"
  },
  {
    id: 67,
    name: "Eden Hakonsson"
  },
  {
    id: 68,
    name: "Pierette Miguet"
  },
  {
    id: 69,
    name: "Krystyna Skarin"
  },
  {
    id: 70,
    name: "Maible Regina"
  },
  {
    id: 71,
    name: "Kimmie Banger"
  },
  {
    id: 72,
    name: "Holt Covill"
  },
  {
    id: 73,
    name: "Avery Pracy"
  },
  {
    id: 74,
    name: "Mahmud Venable"
  },
  {
    id: 75,
    name: "Todd Mainz"
  },
  {
    id: 76,
    name: "Ruddie Natte"
  },
  {
    id: 77,
    name: "Odey Timby"
  },
  {
    id: 78,
    name: "Lucretia McCreagh"
  },
  {
    id: 79,
    name: "Melisenda Quigley"
  },
  {
    id: 80,
    name: "Zorana Claisse"
  },
  {
    id: 81,
    name: "Nessi Chesnay"
  },
  {
    id: 82,
    name: "Laurent Frankling"
  },
  {
    id: 83,
    name: "Hyacinthia Baxstair"
  },
  {
    id: 84,
    name: "Andra Iiannoni"
  },
  {
    id: 85,
    name: "Robina Charke"
  },
  {
    id: 86,
    name: "Cristi Faber"
  },
  {
    id: 87,
    name: "Sela Nower"
  },
  {
    id: 88,
    name: "Lydon Barten"
  },
  {
    id: 89,
    name: "Kasper Aspinal"
  },
  {
    id: 90,
    name: "Boy Sackey"
  },
  {
    id: 91,
    name: "Marvin Yourell"
  },
  {
    id: 92,
    name: "Gert Castanho"
  },
  {
    id: 93,
    name: "Odette Sivewright"
  },
  {
    id: 94,
    name: "Anjanette Cordey"
  },
  {
    id: 95,
    name: "Loree Meynell"
  },
  {
    id: 96,
    name: "Andrew Scotchford"
  },
  {
    id: 97,
    name: "Hyman Funnell"
  },
  {
    id: 98,
    name: "Timothy Stallworth"
  },
  {
    id: 99,
    name: "Sonia Twinterman"
  },
  {
    id: 100,
    name: "Taddeusz Skirven"
  }
];
