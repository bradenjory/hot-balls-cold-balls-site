export type MenuItem = {
  name: string;
  plant?: boolean;
  prices: string[];
  desc: string;
  /** Marks a plant-based option inside the description, rendered after this text. */
  descPlantAfter?: string;
};

export const HOT: MenuItem[] = [
  {
    name: "Meatballs",
    prices: ["3 for $5.49", "6 for $8.99"],
    desc: "Beef, chicken or plant-based, in your sauce of choice.",
    descPlantAfter: "plant-based",
  },
  { name: "Arancini", prices: ["3 for $6.49", "5 for $9.99"], desc: "Crispy risotto balls with a melty center." },
  { name: "Mac & Cheese Balls", prices: ["4 for $4.99", "8 for $8.49"], desc: "Fried mac, gooey inside." },
  { name: "Buffalo Chicken Balls", prices: ["4 for $5.99", "8 for $9.49"], desc: "With ranch or blue cheese dip." },
  { name: "Falafel", plant: true, prices: ["4 for $4.99", "8 for $7.99"], desc: "Crispy chickpea balls, tahini drizzle." },
  { name: "Garlic Dough Balls", prices: ["6 for $3.99", "12 for $6.99"], desc: "Warm, buttery, made for dipping." },
  { name: "Mix Box", prices: ["$10.99"], desc: "Any 2 kinds, 8 balls." },
];

export const SAUCES = ["Ranch", "Honey Sriracha", "Spicy Buffalo", "Garlic Aioli", "Marinara", "Sweet Chili"];

export const COLD: MenuItem[] = [
  { name: "Gelato", prices: ["1 scoop $4.49", "2 scoops $6.49"], desc: "Rotating flavors, cup or cone." },
  { name: "Mochi Ice Cream", prices: ["2 for $4.49", "4 for $7.99"], desc: "Ice cream wrapped in chewy rice dough." },
  { name: "Donut Holes", prices: ["6 for $3.49", "12 for $5.99"], desc: "Glazed, dusted or filled." },
  { name: "Cookie-Dough Bites", prices: ["Cup $4.49"], desc: "Safe-to-eat, by the cup." },
  { name: "Cake Pops", prices: ["1 for $3.49", "3 for $8.99"], desc: "Seasonal mascot designs." },
  { name: "Fresh Fruit Balls", plant: true, prices: ["Cup $3.99"], desc: "Melon and seasonal fruit, chilled." },
  { name: "Cold Mix Cup", prices: ["$6.99"], desc: "Any 3 cold balls." },
];

export const BOBA = [
  {
    name: "Milk teas",
    prices: ["Regular $5.49", "Large $6.49"],
    options: ["Classic Black", "Brown Sugar", "Taro", "Thai Tea", "Matcha"],
  },
  {
    name: "Fruit teas",
    prices: ["Regular $5.29", "Large $6.29"],
    options: ["Mango", "Strawberry", "Passion Fruit", "Peach"],
  },
  {
    name: "Toppings",
    prices: ["+$0.75 each"],
    options: ["Tapioca pearls", "Strawberry popping boba", "Mango popping boba", "Lychee jelly", "Cheese foam"],
  },
];

export const COMBOS = [
  {
    name: "Hot + Cold Combo",
    price: "$11.99",
    desc: "A Regular hot box plus a small cold item. Why choose? (You still have to pick a side.)",
  },
  { name: "Hot + Cold + Boba", price: "$15.49", desc: "The Hot + Cold Combo plus a regular boba." },
  { name: "“Pick a Side” Snack Combo", price: "$8.49", desc: "A snack box plus a small cold item." },
];
