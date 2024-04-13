const { WebDev } = require("../models");

const WebDevData = [
  {
    id: "1",
    title: "Bootstrap",
    url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
  },
];
const seedWebDev = () => WebDev.bulkCreate(WebDevData);

module.exports = seedWebDev;