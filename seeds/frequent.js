const { Frequent } = require("../models");

const frequentData = [
  {
    id: "1",
    title: "Amazon",
    url: "https://www.amazon.com/ref=nav_logo",
  },
];
const seedFrequent = () => Frequent.bulkCreate(frequentData);

module.exports = seedFrequent;
