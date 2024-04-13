const { Money } = require("../models");

const moneyData = [
  {
    id: "1",
    title: "PayPal",
    url: "https://www.paypal.com/signin/",
  },
];
const seedMoney = () => Money.bulkCreate(moneyData);

module.exports = seedMoney;